import { useEffect, useState } from "react";
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

  const [receivedTweets, setReceivedTweets] = useState(false);

  const user = useSelector((state) => state.user);

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
      setTimeout(() => {
        setReceivedTweets(true);
        dispatch(setTweets(response.data));
      }, 2000);
    };
    user && getTweets();
  }, [user]);

  return user && (
    <>
      <div className="d-flex justify-content-between text-light vh-100">
        <SideBar />
        <HomeBody receivedTweets={receivedTweets} />
        <TrendingTab />
      </div>
    </>
  );
}
export default Home;
