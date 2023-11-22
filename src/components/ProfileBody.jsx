import BackArrow from "./icons/BackArrow";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Tweet from "./Tweet";
import axios from "axios";
import { changeFollowProfile } from "../redux/userProfileSlice";
import { changeFollowUser } from "../redux/userSlice";
import { useEffect, useState } from "react";
import FollowButton from "./Follow";

function ProfileBody() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userProfileData = useSelector((state) => state.userProfileData);

  const [buttonState, setButtonState] = useState(0);

  useEffect(() => {
    const following = userProfileData.user.followers.includes(user.id) ? 2 : 1;
    setButtonState(following);
  }, [userProfileData.user.followers]);

  const handleFollow = async () => {
    await axios.patch(
      `http://localhost:3000/users/${userProfileData.user._id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    dispatch(changeFollowProfile(user.id));
    dispatch(changeFollowUser(userProfileData.user._id));
  };

  return (
    <div className="d-flex flex-column profile-body">
      <div
        className="d-flex align-items-center justify-content-start px-3 gap-3 sticky-top profile-top "
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
      <div className="d-flex flex-column top">
        <div className="bg-image-profile"></div>
        <div className="h-50">
          <div className="d-flex">
            <img
              src={userProfileData.user.pfp}
              alt=""
              className="w-25 pfp-profile"
            />
            {user.id !== userProfileData.user._id && (
              <div
                className="ms-auto me-5 align-self-center"
                onClick={handleFollow}
              >
                <FollowButton
                  buttonState={buttonState}
                  setButtonState={setButtonState}
                />
              </div>
            )}
          </div>
          <div className="d-flex flex-column p-3">
            <div className="d-flex flex-nowrap">
              <div className="fs-4 fw-bold">{`${userProfileData.user.firstname} ${userProfileData.user.lastname}`}</div>
              <div className="d-flex gap-3 ms-auto">
                <span>
                  {userProfileData.user.following.length}{" "}
                  <span className="text-secondary">Following</span>
                </span>
                <span>
                  {userProfileData.user.followers.length}{" "}
                  <span className="text-secondary">Followers</span>
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
        {userProfileData.user.tweets
          .slice(0)
          .reverse()
          .map((tweet) => (
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
