import { gql } from "@apollo/client";
import client from "../apollo-client";
import HomePage from "../components/home/HomePage";

const index = ({ posts }) => {
  return <HomePage posts={posts} />;
};

export const getStaticProps = async (context) => {
  const { data } = await client.query({
    query: gql`
      query AllPosts {
        posts {
          id
          slug
          title
          excerpt
          featuredImage {
            url
          }
        }
      }
    `,
  });

  return {
    props: {
      posts: data.posts,
    },
  };
};

export default index;
