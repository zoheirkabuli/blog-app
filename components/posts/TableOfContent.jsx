/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";

const TableOfContent = () => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const headings = document.querySelectorAll(
      ".article-content :is(h1, h2, h3, h4, h5, h6)"
    );

    headings.forEach((heading, index) => {
      heading.setAttribute("id", `${heading.innerText.replace(" ", "-")}`);
    });

    setHeadings(Array.from(headings));
  }, []);

  return (
    <div
      css={{
        boxShadow: "0px 4px 4px 0px #21212126",
        backgroundColor: "white",
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "column",
        position: "sticky",
        top: "10rem",
      }}
    >
      <p css={{ margin: "2rem", fontSize: "1.4rem", fontWeight: 700 }}>
        آنچه در این مقاله می‌خوانید:
      </p>
      <ul css={{ margin: 0, listStyle: "none", padding: 0 }}>
        {headings.map((heading) => (
          <li key={heading.id} css={{ display: "flex" }}>
            <a href={`#${heading.id}`} css={{ padding: "1rem 1.5rem" }}>
              {heading.innerText}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContent;
