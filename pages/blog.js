import { gql } from "@apollo/client";
import { client } from "../lib/apolloClient";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";

const GET_POSTS = gql`
  query getPosts {
    posts(first: 18, after: null) {
      nodes {
        databaseId
        uri
        title
      }
    }
  }
`;

export default function Blog({ posts }) {
  return (
    <Layout>
      <h1>Blog</h1>
      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.databaseId}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await client.query({
    query: GET_POSTS,
  });

  return {
    props: {
      posts: response.data.posts.nodes,
    },
  };
}
