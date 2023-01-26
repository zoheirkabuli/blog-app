/** @jsxImportSource @emotion/react */
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { getPlaiceholder } from "plaiceholder";
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

  const { base64, img } = await getPlaiceholder(data.post.featuredImage.url);

  return {
    props: {
      post: {
        slug: data.post.slug,
        title: data.post.title,
        image: { base64: base64, photo: img },
        content: data.post.content.html,
        excerpt: data.post.excerpt,
      },
    },
    revalidate: 1,
  };
};

export default Post;
