import prismjs from 'prismjs';

import { Client } from '@notionhq/client';
import { GetStaticProps, NextPage } from 'next';
import { QueryDatabaseResponse, RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import Link from 'next/link';
import { Layout } from '@/lib/component/Layout';
import { PostComponent } from '@/lib/component/Post';

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
  posts: Post[];
};

export const getPosts = async (col1?: string) => {
  let database: QueryDatabaseResponse | undefined = undefined;
  if (col1) {
    database = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID || '',
      filter: {
        and: [
          {
            property: 'Published',
            checkbox: {
              equals: true,
            },
          },
          {
            property: 'col1',
            rich_text: {
              equals: col1,
            },
          },
        ],
      },
    });
  } else {
    database = await notion.databases.query({
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
  }

  if (!database) return [];

  const posts: Post[] = [];

  for (const page of database.results) {
    // Q. depth のへん、どいういう意味だっけ。
    // A. https://nodejs.org/api/util.html#util_util_inspect_object_options
    // Q. console のリントをしないためには？
    // A. https://eslint.org/docs/rules/no-console
    if (!page) {
      continue;
    }

    if (!('properties' in page)) {
      continue;
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

    posts.push({
      id: page.id,
      title,
      col1,
      createdTs,
      lastEditedTs,
      contents: [],
    });
  }

  return posts;
};

export const getPostContents = async (id: string) => {
  const blocks = await notion.blocks.children.list({
    // これで pages が取得できなかったので、block_id を直接指定することにした。
    // block_id: database.results[0]?.id,
    block_id: '317af9e9536749d19a58c0d1745c2e04',
  });

  const contents: Content[] = [];
  blocks.results.forEach((block) => {
    if (!('type' in block)) {
      // forEach を抜ける。
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

  return contents;
};

// ビルド時に実行され、静的なものとして扱われる。
export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const posts = await getPosts();
  // Promise.all で並列処理する。
  const contentsList = await Promise.all(
    posts.map((post) => {
      return getPostContents(post.id);
    }),
  );
  posts.forEach((post, index) => {
    post.contents = contentsList[index];
  });

  return {
    props: { posts },
  };
};

const Home: NextPage<StaticProps> = ({ posts }) => {
  // HTML レンダリング後に prismjs を実行する！
  useEffect(() => {
    prismjs.highlightAll();
  }, []);

  return (
    <Layout>
      {posts.map((post) => {
        return <PostComponent post={post} key={post.id} />;
      })}
    </Layout>
  );
};

export default Home;
