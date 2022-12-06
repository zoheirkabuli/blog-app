/** @jsxImportSource @emotion/react */
import React from "react";

const Comment = ({ comment: { fullName, commentText } }) => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        paddingBottom: "1rem",
        borderBottom: "2px dashed #E0E0E0",
        "&:last-child": {
          padding: 0,
          border: 0,
        },
      }}
    >
      <p
        css={(theme) => ({
          margin: 0,
          fontSize: "1.4rem",
          color: theme.colors.meta,
        })}
      >
        {fullName}
      </p>
      <p css={{ margin: 0, fontSize: "1.4rem" }}>{commentText}</p>
    </div>
  );
};

export default Comment;
