import Appbar from "../UI_UX_Components/MyAppBar";
import LandingPage from "../Home_Page/LandingPage";
import Blog from "../Blog_Page/Blog";
import Dashboard from "../Admin_Dashboard/Dashboard";
import SignIn from "../SignIn_Page/AdminSignIn";
import UserSignIn from "../SignIn_Page/SignIn";
import Registration from "../SignIn_Page/Registration";
import Recommended from "../Recommended_Page/Recommended_page";
import Explore from "../Explore_Page/Explore";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import AddNewBlog from "../Admin_Dashboard/AddNewBlog";
import AddNewTribe from "../Admin_Dashboard/AddNewTribe";
import AddNewRegion from "../Admin_Dashboard/AddNewRegion";

function Home() {
  const style = {
    backgroundColor: "#264651",
    overflowY: "scroll",
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyItems: "space-evenly",
  };

  return (
    <>
      <Router>
        <div style={style}>
          <Appbar />

          <div>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/signin" element={<UserSignIn />} />
              <Route path="/adminsignin" element={<SignIn />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/recommended" element={<Recommended />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/add/blog" element={<AddNewBlog />} />
              <Route path="/add/region" element={<AddNewRegion />} />
              <Route path="/add/tribe" element={<AddNewTribe />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default Home;
