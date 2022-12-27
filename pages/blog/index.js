import { gql } from "@apollo/client";
import client from "../../apollo-client";

//
import BlogPage from "../../components/blog/BlogPage";

const index = ({ posts }) => {
  return <BlogPage posts={posts} />;
};

export const getServerSideProps = async (context) => {
  const { data } = await client.query({
    query: gql`
      query AllPosts {
        posts {
          id
          slug
          title
          excerpt
          featuredImage {
            url(
              transformation: {
                image: { resize: { width: 600, height: 450, fit: clip } }
              }
            )
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
