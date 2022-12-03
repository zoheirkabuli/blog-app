/** @jsxImportSource @emotion/react */
import React from "react";

const TItleLine = ({ title }) => {
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        width: "80%",
        alignSelf: "center",
      }}
    >
      <div></div>
      <h2
        css={(theme) => ({
          margin: 0,
          fontSize: "2.4rem",
          color: theme.colors.primary,
        })}
      >
        {title}
      </h2>
      <div></div>
    </div>
  );
};

export default TItleLine;
