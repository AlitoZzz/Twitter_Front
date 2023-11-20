import { Link } from "react-router-dom";
import Like from "./Like";
import { formatDistance } from "date-fns";

function Tweet({ tweet }) {
  let tweetDate;
  tweet.createdAt !== undefined ? 
  tweetDate = formatDistance(new Date(tweet.createdAt), new Date(), {
    addSuffix: true,
  }) : "Just now"

  return (
    <div className="homeBodyBorderBottom d-flex">
      <div className="px-4 py-2">
        <img src={tweet.user.pfp} className="pfp"></img>
      </div>
      <div className="pe-4 py-2">
        <Link to={"/" + tweet.user.username} className="profileLink">
          {tweet.user.firstname + " " + tweet.user.lastname}
        </Link>
        <span className="tweetUsername ms-2">
          {"@" + tweet.user.username + " · " + tweetDate}
        </span>
        <p>{tweet.content}</p>
        <Like tweetId={tweet._id} likes={tweet.likes} />
      </div>
    </div>
  );
}

export default Tweet;
