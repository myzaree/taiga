import Head from 'next/head';

import { Layout } from 'layout';
import { Main, Cases } from 'components';
import 'styles/Main.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Taiga Studio</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Layout>
        <Main />
        <Cases />
      </Layout>
    </>
  );
};

