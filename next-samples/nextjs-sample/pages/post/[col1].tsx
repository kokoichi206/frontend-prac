import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Post, getPostContents, getPosts } from '..';

type StaticPathParams = {
  col1: string;
};

export const getStaticPaths: GetStaticPaths<StaticPathParams> = async () => {
  const posts = await getPosts();
  const paths: {
    params: { col1: string };
  }[] = [];
  posts.forEach((post) => {
    const col1 = post.col1;
    if (col1) {
      paths.push({ params: { col1 } });
    }
  });

  // fallback: false にすると、存在しないパスは 404 になる。
  // fallback: 'blocking' にすると、存在しないパスが見つかるまで待つ。
  return { paths, fallback: 'blocking' };
};

type StaticProps = {
  post?: Post;
};

export const getStaticProps: GetStaticProps<StaticProps, StaticPathParams> = async ({ params, preview }) => {
  const notFoundProps = {
    props: {},
    redirect: {
      destination: '/404',
    },
  };

  if (!params) {
    return notFoundProps;
  }

  const { col1 } = params;
  const posts = await getPosts(col1);
  const post = posts.shift();
  if (!post) {
    return notFoundProps;
  }

  post.contents = await getPostContents(post.id);

  return {
    props: {
      post,
    },
  };
};

const PostPage: NextPage<StaticProps> = ({ post }) => {
  if (!post) return null;
  return <div>{JSON.stringify(post)}</div>;
};

export default PostPage;
