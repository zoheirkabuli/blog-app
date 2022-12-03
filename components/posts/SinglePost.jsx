/** @jsxImportSource @emotion/react */
import React from "react";
import Image from "next/image";
import Head from "next/head";

const SinglePost = ({ post }) => {
  return (
    <>
      <Head>
        <title>{`${post.title} | گروه عکاسان افغانستان`}</title>
      </Head>
      <div
        css={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          maxHeight: "35rem",
          position: "relative",
        }}
      >
        <Image
          src={post.image}
          width={1280}
          height={720}
          alt={post.title}
          css={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <div
          css={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
              "linear-gradient(180deg, rgba(245,245,245,0) 0%, rgba(250,250,250,1) 100%)",
          }}
        >
          <h1 css={{ margin: 0, fontWeight: "900" }}>{post.title}</h1>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
