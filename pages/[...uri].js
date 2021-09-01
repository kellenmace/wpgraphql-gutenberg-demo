import { gql } from "@apollo/client";
import { client } from "../lib/apolloClient";
import Layout from "../components/Layout";
import Block, { BLOCKS_FIELD } from "../components/Block";

export default function SinglePost({ post }) {
  const { title, blocks } = post;

  return (
    <Layout>
      <article className="blog-post">
        <h1 className="post-title">{title}</h1>
        <div>
          {blocks
            ? blocks.map((block, index) => <Block block={block} key={index} />)
            : null}
        </div>
      </article>
    </Layout>
  );
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

const GET_POST = gql`
  query getPost($uri: ID!) {
    post(id: $uri, idType: URI) {
      title
      ...BlocksField
    }
  }
  ${BLOCKS_FIELD}
`;

export async function getStaticProps(context) {
  const uri = context.params.uri.join("/");
  const response = await client.query({
    query: GET_POST,
    variables: { uri },
  });

  const post = response?.data?.post;

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
    revalidate: 120,
  };
}
