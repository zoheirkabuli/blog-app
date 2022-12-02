/** @jsxImportSource @emotion/react */
import Link from "next/link";
import React from "react";
import BaseCard from "./BaseCard";

const HomeHero = ({ posts }) => {
  return (
    <div
      css={{
        width: "100%",
        display: "flex",
        gap: "2rem",
        "@media screen and (max-width:768px)": {
          flexDirection: "column",

          "& > *": {
            width: "100%",
          },
        },
      }}
    >
      <div
        css={{
          flexGrow: 1,
          width: "33%",
          "@media screen and (max-width:768px)": {
            width: "100%",
          },
        }}
      >
        <BaseCard post={posts[0]} />
      </div>
      <div
        css={{
          flexGrow: 2,
          width: "66%",
          "@media screen and (max-width:768px)": {
            width: "100%",
          },
        }}
      ></div>
    </div>
  );
};

export default HomeHero;

// {posts.map((post) => (
//   <Link href={`/${post.slug}`}>{post.title}</Link>
// ))}
