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
      })}
    >
      <div
        css={{
          display: "flex",
          justifyContent: "center",
          width: "95%",
          maxWidth: "140rem",
        }}
      >
        <p css={{ margin: 0, fontWeight: "bold", color: "white" }}>
          تمام حقوق برای گروه عکاسان افغانستان محفوظ است.
        </p>
      </div>
    </footer>
  );
};

export default MainFooter;
