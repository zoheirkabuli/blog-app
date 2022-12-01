/** @jsxImportSource @emotion/react */
import React from "react";
import Link from "next/link";
import Image from "next/image";

// images
import logo from "../../assets/img/logo.png";
import MenuItem from "./MenuItem";

const MainHeader = () => {
  return (
    <header
      css={{
        display: "flex",
        justifyContent: "center",
        position: "sticky",
        borderBottom: "1px solid #f6f6f6",
        boxShadow: "0 5px 10px 0 #0000000a",
        backgroundColor: "white",
      }}
    >
      <div
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "95%",
          maxWidth: "140rem",
          paddingBlock: "1rem",
        }}
      >
        <Link
          href={"/"}
          css={{
            display: "flex",
            width: "22rem",
          }}
        >
          <Image
            src={logo}
            css={{
              width: "100%",
              aspectRatio: "7/2",
              height: "auto",
            }}
            alt="afgphotographers logo"
            width={220}
            height={63}
          />
        </Link>
        <nav>
          <ul
            css={{
              padding: 0,
              margin: 0,
              listStyle: "none",
              display: "flex",
              alignItems: "center",
              gap: "3rem",
            }}
          >
            <MenuItem title={"خانه"} path={"/"} />
            <MenuItem title={"بلاگ"} path={"/blog"} />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
