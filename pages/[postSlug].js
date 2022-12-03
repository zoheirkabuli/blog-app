/** @jsxImportSource @emotion/react */

import { gql } from "@apollo/client";
import client from "../apollo-client";

// component
import SinglePost from "../components/posts/SinglePost";

const Post = ({ post }) => {
  return <SinglePost post={post} />;
};

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query AllSlugs {
        posts {
          slug
        }
      }
    `,
  });

  return {
    paths: data.posts.map((post) => ({
      params: {
        postSlug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const slug = ctx.params.postSlug;

  const { data } = await client.query({
    query: gql`
      query PostByUrl {
        post(where: { slug: "${slug}" }) {
          title
          content {
            markdown
          }
          featuredImage {
            url(
              transformation: {
                image: { resize: { width: 1280 , height: 720, fit: clip } }
                document: { output: { format: webp } }
              }
            )
          }
        }
      }
    `,
  });

  return {
    props: {
      post: {
        title: data.post.title,
        image: data.post.featuredImage.url,
      },
    },
  };
};

export default Post;
