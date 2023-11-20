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
        
        setReload(true);
      });

    //contesta => volves a store y actualizas con datos correctos
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
          tweets.map((tweet) => <Tweet key={tweet._id} tweet={tweet} />)
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}

export default HomeBody;
