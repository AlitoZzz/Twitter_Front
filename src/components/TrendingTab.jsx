import Trending from "./Trending";

function TrendingTab() {
  return (
    <div className="trendingSticky vh-100">
      <div className="trendingWidth d-none d-xl-flex flex-column gap-3 trending align-self-start p-3 rounded-3 mt-4">
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
    </div>
  );
}

export default TrendingTab;
