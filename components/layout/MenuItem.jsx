/** @jsxImportSource @emotion/react */

import Link from "next/link";
import { useRouter } from "next/router";

const MenuItem = ({ title, path }) => {
  const { pathname } = useRouter();

  return (
    <li
      css={{
        "@media screen and (max-width:768px)": {
          width: "100%",
          display: "flex",
        },
      }}
    >
      <Link
        href={path}
        css={(theme) => ({
          fontWeight: "bold",
          transition: "color 0.25s",
          position: "relative",
          color: pathname === path ? theme.colors.primary : theme.colors.body,

          "@media screen and (min-width:769px)": {
            "&::after": {
              content: '""',
              position: "absolute",
              backgroundColor: theme.colors.primary,
              width: pathname === path ? "100%" : 0,
              height: "0.3rem",
              right: 0,
              bottom: "-0.5rem",
              transition: "width 0.25s",
            },
            "&:hover": {
              color: theme.colors.primary,
              "&::after": {
                width: "100%",
              },
            },
          },

          "@media screen and (max-width:768px)": {
            width: "100%",
            textAlign: "center",
            padding: "1rem",
            borderRadius: "1rem",
            border: `1px solid ${theme.colors.primary}`,
            color: pathname === path ? "white" : theme.colors.body,
            backgroundColor: pathname === path ? theme.colors.primary : "white",
          },
        })}
      >
        {title}
      </Link>
    </li>
  );
};

export default MenuItem;
