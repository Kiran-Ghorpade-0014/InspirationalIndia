// import SliderImages from "../SliderImages";
// import Footer from "../Shared/Footer";
import Appbar from "../Shared/MyAppBar";
// import LandingPage from "./landingPage";
import Blog from '../Blog/Blog';


function Home() {
    const style = {
        // backgroundImage : "url('./images/north_east_india.jpg')",
        // backgroundAttachment:'fixed',
        backgroundColor:'#264651',
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
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

                {/* <LandingPage/> */}
                <div>
                {/* <SliderImages/> */}
                <Blog/>
                </div>
                  

                {/* <Footer color="white"/> */}
        </div>
    </>
  );
}

export default Home;
