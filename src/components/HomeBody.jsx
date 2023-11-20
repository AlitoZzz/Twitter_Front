import { useState } from "react";
import "./HomeBody.css";
import { useDispatch, useSelector } from "react-redux";
import { addTweet } from "../redux/tweetsSlice";
import axios from "axios";
import Spinner from "./Spinner";
import Tweet from "./Tweet";
import InputTweet from "./InputTweet";

function HomeBody({ receivedTweets }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const tweets = useSelector((state) => state.tweets);
  const [tweetInput, setTweetInput] = useState("");

  const handleAddTweet = (e) => {
    e.preventDefault();

    //envias bd
    tweetInput !== "" &&
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
          let tweetUser = {
            _id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            pfp: user.pfp,
          }
          let newTweet = response.data;
          newTweet.user = tweetUser;

          dispatch(addTweet(newTweet));
        });
  };

  return (
    <div className="homeBody">
      <InputTweet
        tweetInput={tweetInput}
        setTweetInput={setTweetInput}
        handleAddTweet={handleAddTweet}
      />
      <div>
        {receivedTweets ? (
          tweets.map((tweet) => <Tweet key={tweet._id} tweet={tweet} user={tweet.user} />)
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}

export default HomeBody;
