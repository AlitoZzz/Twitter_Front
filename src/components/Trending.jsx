function Trending({ category, hashtag, tweetsAmount }) {
  return (
    <div className="d-flex flex-column">
      <small className="text-secondary">{category} · Trending</small>
      <span>#{hashtag}</span>
      <small className="text-secondary">{tweetsAmount} Tweets</small>
    </div>
  );
}

export default Trending;
