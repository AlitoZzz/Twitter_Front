import TwitterIcon from "../components/icons/TwitterIcon";
import TwitterHome from "../components/icons/TwitterHome";
import TwitterProfile from "../components/icons/TwitterProfile";
import { Link } from "react-router-dom";
import TweetButton from "../components/TweetButton";
import { useSelector } from "react-redux";

function SideBar() {
  const user = useSelector((state) => state.user);

  return (
    <div className="sidebarSticky sidebarWidth vh-100 d-flex flex-column gap-4 py-4 align-self-stretch">
      <Link 
        to="/" 
        className="link-navbar text-center text-xxl-start ps-xxl-3"
      >
        <TwitterIcon height="25" width="25" />
      </Link>

      <Link 
        to="/" 
        className="link-navbar d-flex gap-3 align-items-center justify-content-center justify-content-xxl-start ps-xxl-3"
      >
        <TwitterHome />
        <span className="d-none d-xxl-block">Home</span>
      </Link>

      <Link
        to={`/${user.username}`}
        className="link-navbar d-flex gap-3 align-items-center justify-content-center justify-content-xxl-start ps-xxl-3"
      >
        <TwitterProfile />
        <span className="d-none d-xxl-block">Profile</span>
      </Link>

      <TweetButton text="Tweet" />

      <div className="d-flex mt-auto">
        <TweetButton to="/logout" text="Logout" color={"red"} className="" />
      </div>
    </div>
  );
}

export default SideBar;
