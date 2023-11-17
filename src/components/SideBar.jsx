import TwitterIcon from "../components/icons/TwitterIcon";
import TwitterHome from "../components/icons/TwitterHome";
import TwitterProfile from "../components/icons/TwitterProfile";
import { Link } from "react-router-dom";
import TweetButton from "../components/TweetButton";

function SideBar({ user }) {
  return (
    <div className="d-flex flex-column gap-4 py-4 align-self-stretch">
      <Link to="/" className="link-navbar">
        <TwitterIcon height="25" width="25" />
      </Link>
      <Link to="/" className="link-navbar d-flex gap-3 align-items-center">
        <TwitterHome />
        Home
      </Link>
      <Link
        to={`/${user.username}`}
        className="link-navbar d-flex gap-3 align-items-center"
      >
        <TwitterProfile />
        Profile
      </Link>
      <TweetButton text="Tweet" />
      <div className="d-flex mt-auto">
        <TweetButton to="/logout" text="Logout" color={"red"} className="" />
      </div>
    </div>
  );
}

export default SideBar;
