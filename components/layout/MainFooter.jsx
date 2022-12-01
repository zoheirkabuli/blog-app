/** @jsxImportSource @emotion/react */
import React from "react";

const MainFooter = () => {
  return (
    <footer
      css={(theme) => ({
        backgroundColor: theme.colors.accent,
        display: "flex",
        justifyContent: "center",
        paddingBlock: "3rem",
        "@media screen and (max-width:768px)": {
          paddingBlock: "2rem",
        },
      })}
    >
      <div
        css={{
          display: "flex",
          justifyContent: "center",
          width: "95%",
          maxWidth: "140rem",
          "@media screen and (max-width:768px)": {
            width: "85%",
          },
        }}
      >
        <p
          css={{
            margin: 0,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
          }}
        >
          تمام حقوق برای گروه عکاسان افغانستان محفوظ است.
        </p>
      </div>
    </footer>
  );
};

export default MainFooter;
