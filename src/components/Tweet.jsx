import { Link } from "react-router-dom";
import Like from "./Like";
import { formatDistance } from "date-fns";
import TrashIcon from "./icons/TrashIcon";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { deleteOne } from "../redux/tweetsSlice";
import { deleteOneProfile } from "../redux/userProfileSlice";

function Tweet({ tweet, user, page }) {
  const dispatch = useDispatch();
  const loguedUser = useSelector((state) => state.user);

  const deleteTweet = async () => {
    await axios({
      method: "delete",
      url: `http://localhost:3000/tweets/${tweet._id}`,
      headers: {
        Authorization: `Bearer ${loguedUser.token}`,
      },
    });
    page === "home"
      ? dispatch(deleteOne(tweet._id))
      : dispatch(deleteOneProfile(tweet._id));
  };

  const handleDeleteTweet = () => {
    deleteTweet();
  };

  let tweetDate;
  tweet.createdAt !== undefined
    ? (tweetDate = formatDistance(new Date(tweet.createdAt), new Date(), {
        addSuffix: true,
      }))
    : "Just now";

  return (
    <div className="homeBodyBorderBottom d-flex">
      <div className="ps-4 pe-3 py-2">
        <img
          style={{ objectFit: "cover" }}
          src={
            user.pfp.includes("http")
              ? user.pfp
              : `${import.meta.env.VITE_BACKEND_PORT}/images/${user.pfp}`
          }
          className="pfp"
        ></img>
      </div>
      <div className="pe-4 pt-2 w-100">
        <Link to={"/" + user.username} className="profileLink">
          {user.firstname + " " + user.lastname}
        </Link>
        <span className="tweetUsername ms-2">
          {"@" + user.username + " · " + tweetDate}
        </span>
        <p className="mb-2">{tweet.content}</p>
        <div className="d-flex align-items-start">
          <Like tweetId={tweet._id} likes={tweet.likes} />
          {loguedUser.id === user._id && (
            <div className="ms-auto" onClick={handleDeleteTweet}>
              <TrashIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tweet;
