import { useEffect } from "react";
import Tweet from "../components/Tweet";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
  return <></>;
}
export default Home;
