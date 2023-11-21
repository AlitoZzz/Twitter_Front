import BackArrow from "./icons/BackArrow";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Tweet from "./Tweet";
import FollowButton from "./Follow";

function ProfileBody() {
  const userProfileData = useSelector((state) => state.userProfileData);

  return (
    <div className="d-flex flex-column profile-body">
      <div className="d-flex flex-column top">
        <div
          className="d-flex align-items-center justify-content-start px-3 gap-3 sticky-top profile-top"
          style={{ minHeight: "3.3rem" }}
        >
          <Link to="/" className="text-light">
            <BackArrow />
          </Link>
          <div className="d-flex flex-column">
            <h5 className="m-0">{`${userProfileData.user.firstname} ${userProfileData.user.lastname}`}</h5>
            <small className="text-secondary">{`${userProfileData.user.tweets.length} posts`}</small>
          </div>
        </div>
        <div className="bg-image-profile"></div>
        <div className="h-50">
          <img
            src={userProfileData.user.pfp}
            alt=""
            className="w-25 pfp-profile"
          />
          <div className="d-flex flex-column p-3">
            <div className="d-flex flex-nowrap">
              <div className="fs-4 fw-bold">{`${userProfileData.user.firstname} ${userProfileData.user.lastname}`}</div>
              <div className="d-flex gap-3 ms-auto">
                <span>
                  19 <span className="text-secondary">Following</span>
                </span>
                <span>
                  123 <span className="text-secondary">Followers</span>
                </span>
                <span>
                  <FollowButton />
                </span>
              </div>
            </div>
            <div className="mb-3 text-secondary">{`@${userProfileData.user.username}`}</div>
            <div className="mb-3">{userProfileData.user.description}</div>
            <div>
              <span className="custom-tab pb-3 fw-bold">Posts</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        {userProfileData.user.tweets.map((tweet) => (
          <Tweet
            key={tweet._id}
            tweet={tweet}
            user={userProfileData.user}
            page={"profile"}
          />
        ))}
      </div>
    </div>
  );
}

export default ProfileBody;
