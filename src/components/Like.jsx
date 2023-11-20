import React, { useEffect, useState } from "react";
import "./Like.css";
import { useSelector } from "react-redux";
import axios from "axios";

function Like({ tweetId, likes }) {
  const user = useSelector((state) => state.user);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const loggedUserLiked = likes.includes(user.id);
    loggedUserLiked ? setChecked(true) : setChecked(false);
  }, []);

  const handleLike = () => {
    setChecked(!checked)

    axios.patch(`http://localhost:3000/tweets/${tweetId}/likes`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
  };

  return (
    <div className="likeContainer">
      <input
        checked={checked}
        type="checkbox"
        onChange={handleLike}
      />
      <div className="likeCheckmark">
        <svg viewBox="0 0 256 256">
          <rect fill="none" height="256" width="256"></rect>
          <path
            d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
            strokeWidth="20px"
            stroke="#FFF"
            fill="none"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Like;
