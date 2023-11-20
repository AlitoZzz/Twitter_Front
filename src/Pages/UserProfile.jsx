import axios from "axios";
import SideBar from "../components/SideBar";
import TrendingTab from "../components/TrendingTab";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { setUserProfileData } from "../redux/userProfileSlice";

function UserProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userProfileData = useSelector((state) => state.userProfileData);
  const { username } = useParams();

  const getUserData = async () => {
    const response = await axios({
      method: "get",
      url: `http://localhost:3000/${username}`,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    dispatch(setUserProfileData(response.data));
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    userProfileData && (
      <>
        {console.log(userProfileData)}
        <div className="d-flex gap-4 text-light vh-100 justify-content-center">
          <SideBar />
          <div className="d-flex flex-column w-lg-50 profile-body">
            <div className="d-flex flex-column h-50 border-bottom">
              <div
                className="d-flex align-items-center justify-content-start px-3 gap-3"
                style={{ minHeight: "3.3rem" }}
              >
                <Link to="/" className="text-light sticky-top">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-arrow-left-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                    />
                  </svg>
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
              </div>
            </div>
          </div>
          <TrendingTab />
        </div>
      </>
    )
  );
}
export default UserProfile;
