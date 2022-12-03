/** @jsxImportSource @emotion/react */
import React from "react";
import Head from "next/head";
import Link from "next/link";

// component
import HomeHero from "./HomeHero";
import HomePosts from "./HomePosts";

const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>خانه | گروه عکاسان افغانستان</title>
      </Head>
      <div
        css={{
          width: "95%",
          maxWidth: "120rem",
          display: "flex",
          flexDirection: "column",
          gap: "5rem",
          marginBlock: "3rem",
        }}
      >
        <HomeHero posts={posts.slice(0, 9)} />
        <HomePosts posts={posts} />
      </div>
    </>
  );
};

export default HomePage;
