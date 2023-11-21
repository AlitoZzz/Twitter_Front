import axios from "axios";
import SideBar from "../components/SideBar";
import TrendingTab from "../components/TrendingTab";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { setUserProfileData } from "../redux/userProfileSlice";
import ProfileBody from "../components/ProfileBody";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    !user && navigate("/login");

    getUserData();
  }, [user]);

  return (
    userProfileData && (
      <>
        <div className="d-flex gap-4 text-light justify-content-center">
          <SideBar />
          <ProfileBody />
          <TrendingTab />
        </div>
      </>
    )
  );
}
export default UserProfile;
