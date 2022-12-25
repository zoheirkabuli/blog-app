/** @jsxImportSource @emotion/react */

import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ post }) => {
  return (
    <div
      css={(theme) => ({
        display: "flex",
        gap: "1rem",
        padding: "0.5rem",
        borderBottom: "0.3rem solid",
        borderBottomColor: theme.colors.secondary,
        backgroundColor: "white",
        borderRadius: "1rem",
        boxShadow: "0 5px 15px -5px #0003",
      })}
    >
      <Link href={`/${post.slug}`} css={{ display: "flex", width: "30%" }}>
        <Image
          {...post.featuredImage}
          placeholder="blur"
          width={120}
          height={90}
          css={{
            width: "100%",
            aspectRatio: "4/3",
            borderRadius: "1rem",
            objectFit: "cover",
            height: "auto",
          }}
        />
      </Link>
      <Link
        href={`/${post.slug}`}
        css={{
          display: "flex",
          flexGrow: 1,
          margin: "1rem 0",
          width: "70%",
          alignSelf: "flex-start",
        }}
      >
        <h3 css={{ margin: 0, fontSize: "1.8rem" }}>{post.title}</h3>
      </Link>
    </div>
  );
};

export default BlogCard;
