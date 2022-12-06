/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import Lottie from "lottie-react";

import Comment from "./Comment";
//
import loadingFile from "../../assets/json/loading.json";

const GET_COMMENTS = gql`
  query AllComments($slug: String!) {
    comments(where: { post: { slug: $slug } }, stage: PUBLISHED) {
      id
      fullName
      commentText
    }
  }
`;

const CommentsList = ({ slug }) => {
  const [comments, setComments] = useState([]);
  const [loadComments, { error, loading }] = useLazyQuery(GET_COMMENTS, {
    variables: { slug: slug },
  });

  useEffect(() => {
    const loadApi = async () => {
      const { data } = await loadComments();
      setComments(data.comments);
    };

    loadApi();
  }, []);

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        padding: "1rem",
        borderRadius: "1rem",
        backgroundColor: "white",
        boxShadow: "0px 4px 4px 0px #21212126",
        position: "relative",
        overflow: "hidden",
        minHeight: "15rem",
      }}
    >
      <h2
        css={(theme) => ({
          margin: 0,
          fontSize: "1.6rem",
          color: theme.colors.primary,
        })}
      >
        نظرات{" "}
        {!loading && loading !== undefined && (
          <span
            css={(theme) => ({ fontSize: "1.2rem", color: theme.colors.meta })}
          >
            ({comments.length} نظر)
          </span>
        )}
      </h2>
      {loading && loading !== undefined ? (
        <div
          css={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#0000008f",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Lottie
            animationData={loadingFile}
            css={{ width: "10rem", display: "flex" }}
          />
        </div>
      ) : (
        <div css={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentsList;