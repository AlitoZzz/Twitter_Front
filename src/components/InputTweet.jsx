import { useSelector } from "react-redux";

function InputTweet({ handleAddTweet, setTweetInput, tweetInput }) {
  const user = useSelector((state) => state.user);

  return (
    <div className="p-4 homeBodyBorderBottom">
      <form onSubmit={(e) => handleAddTweet(e)}>
        <div className="col-12">
          <h1 className="mt-3">Home</h1>

          <img src={user.pfp} className="pfp"></img>

          <input
            onChange={(e) => setTweetInput(e.target.value)}
            value={tweetInput}
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
