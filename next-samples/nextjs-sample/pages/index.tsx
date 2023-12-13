import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

import { Client } from '@notionhq/client';
import { GetStaticProps, NextPage } from 'next';
import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export type Content =
  | {
      type: 'paragraph' | 'heading_1' | 'heading_2' | 'heading_3' | 'quote';
      text: string | null;
    }
  | {
      type: 'code';
      text: string | null;
      language: string | null;
    };

export type Post = {
  id: string;
  title: string | null;
  col1: string | null;
  createdTs: string | null;
  lastEditedTs: string | null;
  contents: Content[];
};

type StaticProps = {
  post: Post | null;
};

// ビルド時に実行され、静的なものとして扱われる。
export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const database = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID || '',
    filter: {
      and: [
        {
          property: 'Published',
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    sorts: [
      {
        timestamp: 'created_time',
        direction: 'descending',
      },
    ],
  });

  // Q. depth のへん、どいういう意味だっけ。
  // A. https://nodejs.org/api/util.html#util_util_inspect_object_options
  // Q. console のリントをしないためには？
  // A. https://eslint.org/docs/rules/no-console
  // eslint-disable-next-line no-console
  console.dir(database.results[0], { depth: null });
  const page = database.results[0];
  if (!page) {
    return {
      props: {
        post: null,
      },
    };
  }

  if (!('properties' in page)) {
    return {
      props: {
        post: {
          id: page.id,
          title: null,
          col1: null,
          createdTs: null,
          lastEditedTs: null,
          contents: [],
        },
      },
    };
  }

  let title: string | null = null;
  if (page.properties['Name']?.type === 'title') {
    title = (page.properties['Name'].title as RichTextItemResponse[])[0]?.plain_text ?? null;
  }

  let col1: string | null = null;
  if (page.properties['col1']?.type === 'rich_text') {
    col1 = (page.properties['col1'].rich_text as RichTextItemResponse[])[0]?.plain_text ?? null;
  }

  let createdTs: string | null = null;
  if ('created_time' in page) {
    createdTs = page.created_time;
  }

  let lastEditedTs: string | null = null;
  if ('last_edited_time' in page) {
    createdTs = page.last_edited_time;
  }

  const blocks = await notion.blocks.children.list({
    // これで pages が取得できなかったので、block_id を直接指定することにした。
    // block_id: database.results[0]?.id,
    block_id: '317af9e9536749d19a58c0d1745c2e04',
  });

  const contents: Content[] = [];
  blocks.results.forEach((block) => {
    if (!('type' in block)) {
      return;
    }

    switch (block.type) {
      case 'paragraph':
        contents.push({
          type: 'paragraph',
          text: block.paragraph?.rich_text[0]?.plain_text ?? null,
        });
        break;
      case 'heading_1':
        contents.push({
          type: 'heading_1',
          text: block.heading_1?.rich_text[0]?.plain_text ?? null,
        });
        break;
      case 'heading_2':
        contents.push({
          type: 'heading_2',
          text: block.heading_2?.rich_text[0]?.plain_text ?? null,
        });
        break;
      case 'heading_3':
        contents.push({
          type: 'heading_3',
          text: block.heading_3?.rich_text[0]?.plain_text ?? null,
        });
        break;
      case 'quote':
        contents.push({
          type: 'quote',
          text: block.quote?.rich_text[0]?.plain_text ?? null,
        });
        break;
      case 'code':
        contents.push({
          type: 'code',
          text: block.code?.rich_text[0]?.plain_text ?? null,
          language: block.code?.language ?? null,
        });
        break;
    }
  });

  const post: Post = {
    id: page.id,
    title,
    col1,
    createdTs,
    lastEditedTs,
    contents,
  };

  console.dir(post, { depth: null });

  return {
    props: { post },
  };
};

const Home: NextPage<StaticProps> = ({ post }) => {
  if (!post) return null;
  console.log(post);
  return (
    <div className={styles.wrapper}>
      <div>
        <h1>{post.title}</h1>
      </div>
    </div>
  );
};

export default Home;
