import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <h1>
        Data is too Large
        <span role="img" aria-label="emoji">
          🤯
        </span>
      </h1>
      <h2>
        Please wait...
        <span role="img" aria-label="emoji">
          🙏
        </span>
      </h2>

      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
