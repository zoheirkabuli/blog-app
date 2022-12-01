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
      query Posts {
        posts {
          edges {
            node {
              slug
            }
          }
        }
      }
    `,
  });

  return {
    paths: data.posts.edges.map((post) => ({
      params: {
        postSlug: decodeURI(post.node.slug),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const slug = ctx.params.postSlug;

  const { data } = await client.query({
    query: gql`
      query Post {
        post(id: "${decodeURI(slug)}", idType: SLUG) {
          id
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      post: {
        title: data.post.title,
        image: data.post.featuredImage.node.sourceUrl,
      },
    },
  };
};

export default Post;
