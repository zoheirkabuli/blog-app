/** @jsxImportSource @emotion/react */
import Link from "next/link";
import React from "react";

// component
import BaseCard from "./BaseCard";
import BlogCard from "./BlogCard";

const HomeHero = ({ posts }) => {
  return (
    <div
      css={{
        width: "100%",
        display: "flex",
        gap: "2rem",
        "@media screen and (max-width:768px)": {
          flexDirection: "column",
          gap: "1rem",

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
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          "@media screen and (max-width:768px)": {
            width: "100%",
          },
        }}
      >
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            "@media screen and (max-width:768px)": {
              display: "none",
            },
          }}
        >
          <p css={{ margin: 0, fontWeight: "bold" }}>اخبار روزانه</p>
          <Link
            href={"/blog"}
            css={(theme) => ({
              display: "flex",
              marginInline: "1rem",
              alignItems: "center",
              gap: "1rem",
              fontSize: "1.4rem",
              alignSelf: "flex-start",
              transition: "color 0.25s",
              "&:hover": {
                color: theme.colors.primary,

                "& > svg": {
                  fill: theme.colors.primary,
                },
              },
            })}
          >
            مشاهده همه{" "}
            <svg
              css={{ width: "1.4rem", transition: "fill 0.25s" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
          </Link>
        </div>
        <div
          css={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem 2rem",
            "@media screen and (max-width:768px)": {
              gridTemplateColumns: "1fr",
            },
          }}
        >
          {posts.map(
            (post, index) => index > 0 && <BlogCard key={post.id} post={post} />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
