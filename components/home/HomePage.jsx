import React from "react";
import Head from "next/head";
import Link from "next/link";

const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>خانه | گروه عکاسان افغانستان</title>
      </Head>
      {posts.map((post) => (
        <Link key={post.id} href={post.slug}>
          <h1>{post.title}</h1>
        </Link>
      ))}
    </>
  );
};

export default HomePage;
