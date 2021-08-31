import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>WPGraphQL Gutenberg Demo</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
