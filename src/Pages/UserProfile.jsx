import axios from "axios";
import SideBar from "../components/SideBar";
import TrendingTab from "../components/TrendingTab";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { setUserProfileData } from "../redux/userProfileSlice";
import ProfileBody from "../components/ProfileBody";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const userProfileData = useSelector((state) => state.userProfileData);
  const { username } = useParams();
  const [changeProfile, setChangeProfile] = useState(false);

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
  }, [changeProfile]);

  return (
    userProfileData && (
      <>
        <div className="d-flex gap-4 text-light justify-content-center">
          <SideBar
            setChangeProfile={setChangeProfile}
            changeProfile={changeProfile}
          />
          <ProfileBody />
          <TrendingTab />
        </div>
      </>
    )
  );
}
export default UserProfile;
