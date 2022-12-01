import React from "react";
import Image from "next/image";
import Head from "next/head";

const SinglePost = ({ post }) => {
  return (
    <>
      <Head>
        <title>{`${post.title} | گروه عکاسان افغانستان`}</title>
      </Head>
      <Image src={post.image} alt={post.title} width={500} height={500} />
      <h1>{post.title}</h1>
    </>
  );
};

export default SinglePost;
