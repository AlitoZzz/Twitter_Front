import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import TrendingTab from "../components/TrendingTab";

function Home() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    !user && navigate("/login");

    const getTweets = async () => {
      const response = await axios({
        method: "get",
        url: "http://localhost:3000/tweets",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
    };
    user && getTweets();
  }, []);
  return (
    <>
      <div className="d-flex justify-content-between text-light vh-100">
        <SideBar user={user} />
        <div></div>
        <TrendingTab />
      </div>
    </>
  );
}
export default Home;
