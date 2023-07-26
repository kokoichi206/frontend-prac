import { NextPage, NextPageContext, GetStaticProps } from "next";
import { Content } from "next/font/google";
import Head from "next/head";

type SSGProps = {
  message: string;
};

const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props;

  return (
    <div>
      <Head>
        <title>SSG</title>
      </Head>
      <main>
        <p>{message}</p>
      </main>
    </div>
  );
};

// getStaticProps はビルド時に実行される。
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestamp = new Date().toLocaleString();
  const message = `This page was generated at ${timestamp}.`;
  console.log(message);
  return {
    // ここでの props を元に、SSG コンポーネントが生成される。
    props: {
      message,
    },
  };
};

export default SSG;
