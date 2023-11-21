import Trending from "./Trending";

function TrendingTab() {
  return (
    <div className="trendingSticky vh-100">
      <div className="trendingWidth d-none d-xl-flex flex-column gap-3 trending align-self-start p-3 rounded-3 mt-4">
        <h4>What&apos;s happening</h4>
        <Trending
          category="Programming"
          hashtag="LuchoGPTSurpassesChatGPT"
          tweetsAmount="507K"
        />
        <Trending
          category="Entretainment"
          hashtag="CumpleañosMateo"
          tweetsAmount="20.3K"
        />
        <Trending 
          category="News" 
          hashtag="PartyAtMatisHouse" 
          tweetsAmount="4.12M"
        />
      </div>
    </div>
  );
}

export default TrendingTab;
