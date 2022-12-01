import Head from "next/head";
import Link from "next/link";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import HomePage from "../components/home/HomePage";

const index = ({ posts }) => {
  return <HomePage posts={posts} />;
};

export const getStaticProps = async (context) => {
  const { data } = await client.query({
    query: gql`
      query Posts {
        posts {
          edges {
            node {
              id
              title
              excerpt
              slug
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      posts: data.posts.edges.map((post) => ({
        id: post.node.id,
        title: post.node.title,
        excerpt: post.node.excerpt,
        slug: post.node.slug,
      })),
    },
  };
};

export default index;
