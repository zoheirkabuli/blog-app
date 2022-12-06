/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import Lottie from "lottie-react";

//
import loadingFile from "../../assets/json/loading.json";
import errorFile from "../../assets/json/error.json";
import doneFile from "../../assets/json/done.json";

const POST_COMMENT = gql`
  mutation PostComment(
    $email: String!
    $commentText: String!
    $fullName: String!
    $slug: String!
  ) {
    createComment(
      data: {
        fullName: $fullName
        email: $email
        commentText: $commentText
        post: { connect: { slug: $slug } }
      }
    ) {
      id
    }
  }
`;

const CommentForm = ({ slug }) => {
  const [postComment, { error, loading, data }] = useMutation(POST_COMMENT);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    commentText: "",
  });

  const inputHandler = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!Object.keys(inputCheck(formData)).length) {
      await postComment({ variables: { ...formData, slug } });
      setFormData({
        fullName: "",
        email: "",
        commentText: "",
      });
      if (error) console.log(error);
    } else {
      alert("همه فیلدها الزامی است!");
    }
  };

  const inputCheck = (state) => {
    const errors = {};

    if (!state.fullName.trim()) {
      errors.fullName = "نام و نام‌خانوادگی الزامی است!";
    }
    if (!state.email) {
      errors.email = "ایمیل الزامی است!";
    }
    if (!state.commentText) {
      errors.commentText = "متن نظر الزامی است!";
    }

    return errors;
  };

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
      }}
    >
      <div
        css={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#0000008f",
          display: loading ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Lottie animationData={loadingFile} css={{ width: "10rem" }} />
      </div>

      <h2
        css={(theme) => ({
          margin: 0,
          fontSize: "1.6rem",
          color: theme.colors.primary,
        })}
      >
        ارسال نظر
      </h2>

      <form
        css={{ display: "flex", flexDirection: "column", gap: "2rem" }}
        onSubmit={submitHandler}
      >
        <div
          css={{
            display: "flex",
            gap: "2rem",
            width: "100%",
            "@media screen and (max-width:768px)": {
              flexDirection: "column",
            },
          }}
        >
          <div
            css={{
              display: "flex",
              gap: "1rem",
              flexDirection: "column",
              flex: "1 0 0",
            }}
          >
            <label
              htmlFor="fullName"
              css={{ fontSize: "1.4rem", marginInline: "1rem" }}
            >
              نام و نام‌خانوادگی:
            </label>
            <input
              required
              type="text"
              name="fullName"
              id="fullName"
              placeholder="نام و نام خانوادگی را وارد کنید"
              css={(theme) => ({
                padding: "1.5rem 1rem",
                border: `2px solid ${theme.colors.border}`,
                borderRadius: "1rem",
                fontSize: "1.4rem",
                outline: "none",
                transition: "0.25s",
                "&:hover ,&:focus": {
                  borderColor: theme.colors.primary,
                },
              })}
              value={formData.fullName}
              onChange={inputHandler}
            />
          </div>
          <div
            css={{
              display: "flex",
              gap: "1rem",
              flexDirection: "column",
              flex: "1 0 0",
            }}
          >
            <label
              htmlFor="email"
              css={{ fontSize: "1.4rem", marginInline: "1rem" }}
            >
              ایمیل:
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="ایمیل را وارد کنید"
              css={(theme) => ({
                padding: "1.5rem 1rem",
                border: `2px solid ${theme.colors.border}`,
                borderRadius: "1rem",
                fontSize: "1.4rem",
                outline: "none",
                transition: "0.25s",
                "&:hover ,&:focus": {
                  borderColor: theme.colors.primary,
                },
              })}
              value={formData.email}
              onChange={inputHandler}
            />
          </div>
        </div>
        <div
          css={{
            display: "flex",
            gap: "2rem",
            width: "100%",
            "@media screen and (max-width:768px)": {
              flexDirection: "column",
            },
          }}
        >
          <div
            css={{
              display: "flex",
              gap: "1rem",
              flexDirection: "column",
              flex: "1 0 0",
            }}
          >
            <label
              htmlFor="commentText"
              css={{ fontSize: "1.4rem", marginInline: "1rem" }}
            >
              متن دیدگاه:
            </label>
            <textarea
              required
              name="commentText"
              id="commentText"
              placeholder="متن دیدگاه خود را بنویسید"
              rows="10"
              css={(theme) => ({
                padding: "1.5rem 1rem",
                border: `2px solid ${theme.colors.border}`,
                borderRadius: "1rem",
                fontSize: "1.4rem",
                outline: "none",
                transition: "0.25s",
                maxWidth: "100%",
                "&:hover ,&:focus": {
                  borderColor: theme.colors.primary,
                },
              })}
              value={formData.commentText}
              onChange={inputHandler}
            />
          </div>
        </div>
        <button
          type="submit"
          css={(theme) => ({
            padding: "1.5rem 4rem",
            backgroundColor: theme.colors.secondary,
            outline: "none",
            border: 0,
            borderRadius: "1rem",
            fontWeight: "bold",
            alignSelf: "flex-start",
            cursor: "pointer",
            "@media screen and (max-width:768px)": {
              alignSelf: "stretch",
            },
          })}
        >
          ارسال
        </button>
      </form>
      <div
        css={{
          display: data || error ? "flex" : "none",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {error ? (
          <>
            <Lottie
              animationData={errorFile}
              css={{ width: "3.5rem", display: "flex" }}
            />
            <p css={{ margin: 0, fontSize: "1.4rem" }}>
              ارسال نظر با مشکل مواجه شد!‌ دوباره تلاش کنید.
            </p>
          </>
        ) : (
          <>
            <Lottie
              animationData={doneFile}
              css={{ width: "6rem", display: "flex" }}
            />
            <p css={{ margin: 0, fontSize: "1.4rem" }}>
              ارسال نظر با موفقیت انجام شد! باتشکر.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default CommentForm;
