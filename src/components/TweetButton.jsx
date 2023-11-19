import React from "react";
import "./TweetButton.css";

function TweetButton({ text, color = "blue" }) {
  return (
    <button className={`tweetBtn ${color}`}>
      <span>{text}</span>
    </button>
  );
}

export default TweetButton;
