import { useSelector } from "react-redux";

function InputTweet({ handleAddTweet, setTweetInput, tweetInput }) {
  const user = useSelector((state) => state.user);

  return (
    <div className="p-4 homeBodyBorderBottom">
      <form onSubmit={(e) => handleAddTweet(e)}>
        <h1 className="mt-3">Home</h1>
        
        <div className="col-12 d-flex no-wrap my-3">

          <img src={user.pfp} className="pfp"></img>

          <input className="inputTweet ms-3 border-0 bg-transparent w-100 text-white"
            onChange={(e) => setTweetInput(e.target.value)}
            html={tweetInput}
            placeholder="What's happening?"
          />

        </div>
        <div className="col-12 d-flex justify-content-end">
          <button type="submit" className="postBtn">
            <span>Tweet</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputTweet;
