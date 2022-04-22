import React from "react";
import Profile from "../Profile";
import Header from "../Header";
import "./ProfilePage.css";

function ProfilePage() {
  //   const { user, isAuthenticated, isLoading } = useAuth0();
  // const [user_id, setUser_id] = useState(Number(user?.sub.substring(14, 18)));
  return (
    <div className="ProfilePage">
      <Header />
      <Profile />
    </div>
  );
}

export default ProfilePage;
