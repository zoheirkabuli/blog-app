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

  const images = [];

  for (const post of data.posts) {
    images.push(await getPlaiceholder(post.featuredImage.url));
  }

  return {
    props: {
      posts: data.posts.map((post, index) => ({
        ...post,
        featuredImage: {
          ...images[index].img,
          blurDataURL: images[index].base64,
        },
      })),
    },
  };
};

export default index;
