/** @jsxImportSource @emotion/react */
import React from "react";

const SinglePostContent = ({ content }) => {
  return (
    <article
      className="article-content"
      dangerouslySetInnerHTML={{ __html: content }}
      css={{
        boxShadow: "0px 4px 4px 0px #21212126",
        padding: "1rem",
        borderRadius: "1rem",
        backgroundColor: "white",

        "& p": {
          margin: "0 0 1rem",
        },

        "& :is(h1, h2, h3, h4, h5, h6)": {
          margin: "2.5rem 0 1rem",
        },
      }}
    />
  );
};

export default SinglePostContent;
