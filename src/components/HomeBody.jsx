import { useState } from "react";
import "./HomeBody.css";
import { useDispatch } from "react-redux";
import { addTweet } from "../redux/tweetsSlice";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function HomeBody({ user, tweets }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [tweetInput, setTweetInput] = useState("");

  const handleAddTweet = (e) => {
    e.preventDefault();

    const tweet = {
      _id: "",
      content: tweetInput,
      user: user,
      likes: [],
    };
    //checkeo que el tweet no esta vacio
    tweetInput !== "" && dispatch(addTweet(tweet));

    //envias bd
    axios
      .post(
        "http://localhost:3000/tweets",
        {
          content: tweetInput,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((response) => {
        
      });

    //contesta => volves a store y actualizas con datos correctos
  };

  return (
    <div className="homeBody">
      <div className="p-4">
        <form onSubmit={(e) => handleAddTweet(e)}>
          <div className="col-12">
            <h1 className="mt-3">Home</h1>
            <img src={user.pfp} className="pfp"></img>

            <input
              onChange={(e) => setTweetInput(e.target.value)}
              value={tweetInput}
            />
          </div>
          <div className="col-12 d-flex justify-content-end">
            <button type="submit" className="postBtn">
              <span>Tweet</span>
            </button>
          </div>
        </form>
      </div>
      <div>
        {tweets.map((tweet) => (
          <div key={tweet._id} className="tweet d-flex">
            <div className="p-2">
              <img src={tweet.user.pfp} className="pfp"></img>
            </div>
            <div>
              <Link to={"/" + tweet.user.username}>
                {tweet.user.firstname + " " + tweet.user.lastname}
              </Link>
              <span>{"@" + tweet.user.username + " . " + tweet.createdAt}</span>
              <p>{tweet.content}</p>
              <p>♥</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeBody;
