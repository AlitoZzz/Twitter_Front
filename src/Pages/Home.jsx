import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import TrendingTab from "../components/TrendingTab";
import HomeBody from "../components/HomeBody";
import { setTweets } from "../redux/tweetsSlice";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const tweets = useSelector((state) => state.tweets);

  useEffect(() => {
    !user && navigate("/login");

    const getTweets = async () => {
      const response = await axios({
        method: "get",
        url: "http://localhost:3000/tweets?order=asc&limit=20",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      dispatch(setTweets(response.data));
    };
    user && getTweets();
  }, [user]);

  return user && (
    <>
      <div className="d-flex justify-content-between text-light vh-100">
        <SideBar user={user} />
        <HomeBody user={user} tweets={tweets} />
        <TrendingTab />
      </div>
    </>
  );
}
export default Home;
