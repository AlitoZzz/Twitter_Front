import { Link } from "react-router-dom";
import Like from "./Like";

function Tweet({ tweet }) {
  return (
    <div className="homeBodyBorderBottom d-flex">
      <div className="p-2">
        <img src={tweet.user.pfp} className="pfp"></img>
      </div>
      <div className="p-2">
        <Link to={"/" + tweet.user.username}>
          {tweet.user.firstname + " " + tweet.user.lastname}
        </Link>
        <span>{"@" + tweet.user.username + " . " + tweet.createdAt}</span>
        <p>{tweet.content}</p>
        <Like tweetId={tweet._id} likes={tweet.likes} />
      </div>
    </div>
  );
}

export default Tweet;
