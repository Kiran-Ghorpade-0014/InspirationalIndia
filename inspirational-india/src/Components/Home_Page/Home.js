import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Appbar from "../UI_UX_Components/MyAppBar";
import LandingPage from "../Home_Page/LandingPage";
import Blog from "../Blog_Page/Blog";
import Dashboard from "../Admin_Dashboard/Dashboard";
import SignIn from "../SignIn_Page/AdminSignIn";
import UserSignIn from "../SignIn_Page/SignIn";
import Registration from "../SignIn_Page/Registration";
import Recommended from "../Recommended_Page/Recommended_page";
import Explore from "../Explore_Page/Explore";
import AddNewBlog from "../Admin_Dashboard/AddNewBlog";
import AddNewTribe from "../Admin_Dashboard/AddNewTribe";
import AddNewRegion from "../Admin_Dashboard/AddNewRegion";
import SignOut from "../SignIn_Page/SignOut";
import About from "../About/About";
import ErrorPage from "../Error_page/ErrorPage";
import Reports from "../Admin_Dashboard/Reports";
import { useState } from "react";
import CustomAlert from "../UI_UX_Components/CustomAlert";
import { Snackbar, Stack } from "@mui/material";


function Home() {

  const [isLogin, setIsLogin] = useState(false);
  const [alertOpen, setAlertOpen] = useState(true);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const style = {
    backgroundColor: "#264651",
    overflowY: "scroll",
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyItems: "space-evenly",
  };

  const openAlert=(type, message)=>{
      setAlertOpen(true);
      setAlertType(type);
      setAlertMessage(message);
  }

  return (
    <>
      <Router>
        <div style={style}>
          <Appbar flag={isLogin} />
          
           {/* Material-UI Alert */}
           <Stack sx={{ width: '50vw', alignItems:'center', justifyContent:'center', display:'flex' }} spacing={2}>
            <CustomAlert type={alertType} message={alertMessage} alertOpen={alertOpen} handleCloseAlert={()=> setAlertOpen(false)}/>
          </Stack>



          <div>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/ErrorPage" element={<ErrorPage />} />
              <Route path="/recommended" element={<Recommended isLogin={isLogin}/>} />
              <Route path="/blog/:blog_Id" element={<Blog isLogin={isLogin}/>} />
              <Route path="/about" element={<About />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/registration" element={<Registration />} />

              {/* Dashboard */}
              <Route path="/dashboard" element={<Dashboard isLogin={isLogin}/>} />
              <Route path="/manage/blog" element={<AddNewBlog isLogin={isLogin}/>} />
              <Route path="/manage/region" element={<AddNewRegion isLogin={isLogin}/>} />
              <Route path="/manage/tribe" element={<AddNewTribe isLogin={isLogin}/>} />
              <Route path="/manage/reports/:type" element={<Reports isLogin={isLogin}/>} />

              {/* Sign In - Sign Out Manager */}
              <Route path="/admin/signin" element={<SignIn openAlert={openAlert} updateFlag={()=>setIsLogin(true)}/>} />
              <Route path="/signin" element={<UserSignIn openAlert={openAlert} updateFlag={()=>setIsLogin(true)}/>} />
              <Route path="/signout" element={<SignOut updateFlag={()=>setIsLogin(false)}/>} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default Home;
