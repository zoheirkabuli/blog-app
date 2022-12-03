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
      <div
        css={(theme) => ({
          flexGrow: 1,
          height: "0.3rem",
          backgroundColor: theme.colors.border,
        })}
      ></div>
      <h2
        css={(theme) => ({
          margin: 0,
          fontSize: "2.4rem",
          color: theme.colors.primary,
        })}
      >
        {title}
      </h2>
      <div
        css={(theme) => ({
          flexGrow: 1,
          height: "0.3rem",
          backgroundColor: theme.colors.border,
        })}
      ></div>
    </div>
  );
};

export default TItleLine;
