import { gql } from "@apollo/client";
import client from "../apollo-client";
import HomePage from "../components/home/HomePage";
import { getPlaiceholder } from "plaiceholder";

const index = ({ posts }) => {
  return <HomePage posts={posts} />;
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

  const posts = [...data.posts];

  for (let index = 0; index < posts.length; index++) {
    const { img, base64 } = await getPlaiceholder(
      posts[index].featuredImage.url
    );
    posts[index] = {
      id: posts[index].id,
      slug: posts[index].slug,
      title: posts[index].title,
      excerpt: posts[index].excerpt,
      featuredImage: { ...img, blurDataURL: base64 },
    };
  }

  return {
    props: {
      posts: posts,
    },
  };
};

export default index;
