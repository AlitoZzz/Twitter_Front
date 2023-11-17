import Trending from "./Trending";

function TrendingTab() {
  return (
    <div className="d-flex flex-column gap-3 trending align-self-start pe-6 p-3 rounded-3 mt-4">
      <h4>What&apos;s happening</h4>
      <Trending
        category="Programming"
        hashtag="MongoVsSequelize"
        tweetsAmount="97.5K"
      />
      <Trending
        category="Entretainment"
        hashtag="StarWars"
        tweetsAmount="200K"
      />
      <Trending category="News" hashtag="LinInUranus" tweetsAmount="2.7k" />
    </div>
  );
}

export default TrendingTab;
