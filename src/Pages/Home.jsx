import { useEffect } from "react"
import Tweet from "../components/Tweet"
import axios from "axios"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function Home(){
    const user = useSelector((state)=> state.user);
    const navigate = useNavigate();
    !user && navigate("/login");

    useEffect(()=>{
        const getTweets = async()=>{
          const response =  await axios({
                method: "get",
                url: "http://localhost:3000/tweets",
                headers: {
                    Authorization: `Bearer ${user.token}`,
                  }
            })
        }
       getTweets()
    },[])
return(<>

</>)
}
export default Home