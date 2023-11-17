import React from "react";
import "./TweetButton.css";

function TweetButton({ text, color }) {
  return (
    <button className={`${color}`}>
      <span>{text}</span>
    </button>
  );
}

export default TweetButton;
