/** @jsxImportSource @emotion/react */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BaseCard = ({ post }) => {
  return (
    <div
      css={(theme) => ({
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "0.5rem 0.5rem 1rem",
        borderRadius: "1rem",
        boxShadow: "0 5px 15px -5px #0003",
        borderBottom: "0.5rem solid",
        borderBottomColor: theme.colors.secondary,
        "@media screen and (max-width:768px)": {
          flexDirection: "row",
          padding: "0.5rem",
          borderBottomWidth: "0.3rem",
        },
      })}
    >
      <Link
        href={`/${post.slug}`}
        css={{
          display: "flex",
          "@media screen and (max-width:768px)": {
            width: "30%",
          },
        }}
      >
        <Image
          src={post.featuredImage.url}
          width={400}
          height={300}
          alt={post.title}
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
          marginInline: "1rem",
          "@media screen and (max-width:768px)": {
            flexGrow: 1,
            margin: "1rem 0",
            width: "70%",
            alignSelf: "flex-start",
          },
        }}
      >
        <h3 css={{ margin: 0, fontSize: "1.6rem" }}>{post.title}</h3>
      </Link>
      <p
        css={{
          margin: "0 1rem",
          fontSize: "1.4rem",
          textAlign: "justify",
          "@media screen and (max-width:768px)": {
            display: "none",
          },
        }}
      >{`${post.excerpt} ...`}</p>
      <Link
        href={`/${post.slug}`}
        css={(theme) => ({
          display: "flex",
          marginInline: "1rem",
          alignItems: "center",
          gap: "1rem",
          fontSize: "1.4rem",
          alignSelf: "flex-start",
          color: theme.colors.primary,
          "@media screen and (max-width:768px)": {
            display: "none",
          },
        })}
      >
        بیشتر بخوانید
        <svg
          css={(theme) => ({ width: "1.4rem", fill: theme.colors.primary })}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        </svg>
      </Link>
    </div>
  );
};

export default BaseCard;
