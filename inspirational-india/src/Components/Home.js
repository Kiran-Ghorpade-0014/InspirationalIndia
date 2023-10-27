// import SliderImages from "../SliderImages";
import Footer from "./Footer";
import Appbar from "./MyAppBar";
import LandingPage from "./landingPage";

function Home() {
    const style = {
        backgroundImage : "url('./images/north_east_india.jpg')",
        backgroundAttachment:'fixed',
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

                <LandingPage/>
                <div>
                {/* <SliderImages/> */}
                </div>
                  

                <Footer />
        </div>
    </>
  );
}

export default Home;
