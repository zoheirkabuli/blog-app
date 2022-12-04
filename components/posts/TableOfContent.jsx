/** @jsxImportSource @emotion/react */

const TableOfContent = ({ headings }) => {
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
          <li
            key={heading.id}
            css={{ display: "flex", padding: "1rem 1.5rem" }}
          >
            <a href={`#${heading.id}`}>{heading.innerText}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContent;
