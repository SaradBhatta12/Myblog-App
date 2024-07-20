"use client";
// components/Loading.js
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loading = () => {
  return (
    <div className="loading-container">
      <ClipLoader color={"#123abc"} loading={true} css={override} size={150} />
      <style jsx>{`
        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
      `}</style>
    </div>
  );
};

export default Loading;
