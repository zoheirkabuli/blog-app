/** @jsxImportSource @emotion/react */
import React from "react";
import TItleLine from "../TItleLine";

// components
import BlogCard from "./BlogCard";

const HomePosts = ({ posts }) => {
  return (
    <div css={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <TItleLine title={"مطالب جدید"} />
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
  );
};

export default HomePosts;
