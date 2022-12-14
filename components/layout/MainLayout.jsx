/** @jsxImportSource @emotion/react */
import React from "react";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

const MainLayout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <div
        css={{
          flex: "1 0 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </div>
      <MainFooter />
    </>
  );
};

export default MainLayout;
