/** @jsxImportSource @emotion/react */

import Link from "next/link";
import { useRouter } from "next/router";

const MenuItem = ({ title, path }) => {
  const { pathname } = useRouter();

  return (
    <li>
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
        })}
      >
        {title}
      </Link>
    </li>
  );
};

export default MenuItem;
