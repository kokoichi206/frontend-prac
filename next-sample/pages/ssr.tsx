import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

type SSRProps = {
  message: string;
};

const SSR: NextPage<SSRProps> = (props) => {
  const { message } = props;

  return (
    <div>
      <Head>
        <title>SSR</title>
      </Head>
      <main>
        <p>{message}</p>
      </main>
    </div>
  );
};

// getServerSideProps はリクエスト毎に実行される！
export const getServerSideProps: GetServerSideProps<SSRProps> = async (
  context
) => {
  const timestamp = new Date().toLocaleString();
  const message = `This page was generated at ${timestamp}.`;
  console.log(message);

  return {
    // ここでの props を元に、SSR コンポーネントが生成される。
    props: {
      message,
    },
  };
};

export default SSR;
