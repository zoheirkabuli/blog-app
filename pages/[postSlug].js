/** @jsxImportSource @emotion/react */
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import client from "../apollo-client";

// component
import SinglePost from "../components/posts/SinglePost";

const Post = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>درحال بارگذاری...</h1>;
  }
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
    fallback: true,
  };
};

export const getStaticProps = async (ctx) => {
  const slug = ctx.params.postSlug;

  const { data } = await client.query({
    query: gql`
      query PostByUrl {
        post(where: { slug: "${slug}" }) {
          slug
          title
          content {
            html
          }
          featuredImage {
            url
          }
          excerpt
        }
      }
    `,
  });

  return {
    props: {
      post: {
        slug: data.post.slug,
        title: data.post.title,
        image: data.post.featuredImage.url,
        content: data.post.content.html,
        excerpt: data.post.excerpt,
      },
    },
    revalidate: 1,
  };
};

export default Post;
