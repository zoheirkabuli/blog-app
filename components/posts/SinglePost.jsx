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
          height: "35rem",
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
              "linear-gradient(180deg, rgba(245,245,245,0.2) 0%, rgba(250,250,250,1) 90%)",
          }}
        >
          <h1 css={{ margin: 0, fontWeight: "900" }}>{post.title}</h1>
        </div>
      </div>

      <div
        css={{
          display: "flex",
          gap: "2rem",
          width: "90%",
          maxWidth: "140rem",
          marginTop: "-10rem",
          zIndex: 1,
          marginBottom: "2rem",
          "@media screen and (max-width:768px)": {
            flexDirection: "column",
          },
        }}
      >
        <div css={{ width: "33%" }}></div>
        <div
          css={{
            width: "66%",
            "@media screen and (max-width:768px)": {
              width: "100%",
            },
          }}
        >
          <article
            dangerouslySetInnerHTML={{ __html: post.content }}
            css={{
              boxShadow: "0px 4px 4px 0px #21212126",
              padding: "1rem",
              borderRadius: "1rem",
              backgroundColor: "white",

              "& p": {
                margin: "0 0 1rem",
              },

              "& :is(h1, h2, h3, h4, h5, h6)": {
                margin: "3rem 0 1rem",
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SinglePost;
