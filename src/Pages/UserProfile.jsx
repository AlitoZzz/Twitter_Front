import SideBar from "../components/SideBar";
import TrendingTab from "../components/TrendingTab";

function UserProfile() {
  return (
    <>
      <div className="d-flex justify-content-between text-light vh-100">
        <SideBar />
        <div className="d-flex flex-column w-50 profile-body"></div>
        <TrendingTab />
      </div>
    </>
  );
}
export default UserProfile;
