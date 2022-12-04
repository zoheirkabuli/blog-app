/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";

// components
import SinglePostContent from "./SinglePostContent";
import TableOfContent from "./TableOfContent";

const SinglePost = ({ post }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const headings = document.querySelectorAll(
      ".article-content :is(h1, h2, h3, h4, h5, h6)"
    );

    headings.forEach((heading, index) => {
      heading.setAttribute("id", `${heading.innerText.replace(" ", "-")}`);
    });

    setHeadings(Array.from(headings));
  }, []);

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
          priority
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
        <div
          css={{
            width: "25%",
            "@media screen and (max-width:768px)": {
              width: "100%",
            },
          }}
        >
          {headings.length > 0 && <TableOfContent headings={headings} />}
        </div>

        <div
          css={{
            width: "75%",
            "@media screen and (max-width:768px)": {
              width: "100%",
            },
          }}
        >
          <SinglePostContent content={post.content} />
        </div>
      </div>
    </>
  );
};

export default SinglePost;
