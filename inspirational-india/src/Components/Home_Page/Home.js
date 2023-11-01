// import Footer from "../UI_UX_Components/Footer";
import Appbar from "../UI_UX_Components/MyAppBar";
import LandingPage from "./landingPage";
// import Blog from '../Blog/Blog';
// import Dashboard from '../Admin_Dashboard/Dashboard';
// import SignIn from "../Admin_SignIn_Page/AdminSignIn";



function Home() {
    const style = {
        backgroundColor:'#264651',
        overflow:'scroll',
        height:'100vh',
        width:'100vw',
        display:'flex',
        flexDirection:'column',
        justifyItems:'space-evenly'
    };

    return(
    < >
        <div style={style}>
          {/* <div> */}
                <Appbar />

                <LandingPage/>
                {/* <Dashboard/> */}
                <div>
                {/* <Blog/> */}
                {/* <SignIn/> */}
                </div>
                  

                {/* <Footer color="white"/> */}
        </div>
    </>
  );
}

export default Home;
