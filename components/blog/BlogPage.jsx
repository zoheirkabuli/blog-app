/** @jsxImportSource @emotion/react */
import React from "react";
import Head from "next/head";
import TitleLine from "../TitleLine";
import BlogCard from "../home/BlogCard";

const BlogPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>بلاگ | گروه عکاسان افغانستان</title>
        <meta
          name="description"
          content="گروه عکاسان افغانستان | اخبار روز عکاسی و عکاسان"
        />
      </Head>
      <div
        css={{
          width: "95%",
          maxWidth: "120rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          marginBlock: "3rem",
        }}
      >
        <TitleLine title={"مقالات"} />
        <div
          css={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "1rem 2rem",
            "@media screen and (max-width:768px)": {
              gridTemplateColumns: "1fr",
            },
          }}
        >
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
