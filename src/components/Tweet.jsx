import { Link } from "react-router-dom";
import Like from "./Like";
import { formatDistance } from "date-fns";

function Tweet({ tweet, user }) {
  let tweetDate;
  tweet.createdAt !== undefined ? 
  tweetDate = formatDistance(new Date(tweet.createdAt), new Date(), {
    addSuffix: true,
  }) : "Just now"

  return (
    <div className="homeBodyBorderBottom d-flex">
      <div className="px-4 py-2">
        <img src={user.pfp} className="pfp"></img>
      </div>
      <div className="pe-4 py-2">
        <Link to={"/" + user.username} className="profileLink">
          {user.firstname + " " + user.lastname}
        </Link>
        <span className="tweetUsername ms-2">
          {"@" + user.username + " · " + tweetDate}
        </span>
        <p>{tweet.content}</p>
        <Like tweetId={tweet._id} likes={tweet.likes} />
      </div>
    </div>
  );
}

export default Tweet;
