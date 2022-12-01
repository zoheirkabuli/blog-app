/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// component
import MenuItem from "./MenuItem";

// images
import logo from "../../assets/img/logo.png";

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { pathname } = useRouter();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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
          flexWrap: "wrap",
          "@media screen and (max-width:768px)": {
            width: "90%",
          },
        }}
      >
        <div
          css={{
            display: "none",
            "@media screen and (max-width:768px)": {
              display: "flex",
              width: "2rem",
            },
          }}
          onClick={() => {
            setIsOpen((prevIsOpen) => !prevIsOpen);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
        <Link
          href={"/"}
          css={{
            display: "flex",
            width: "22rem",
            "@media screen and (max-width:768px)": {
              width: "18rem",
            },
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
        <nav
          css={{
            "@media screen and (max-width:768px)": {
              width: "100%",
              overflow: "hidden",
              transition: "max-height 0.25s ease",
              maxHeight: isOpen ? "100vh" : 0,
            },
          }}
        >
          <ul
            css={{
              padding: 0,
              margin: 0,
              listStyle: "none",
              display: "flex",
              alignItems: "center",
              gap: "3rem",
              "@media screen and (max-width:768px)": {
                flexDirection: "column",
                gap: "1rem",
                paddingTop: "1rem",
              },
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
