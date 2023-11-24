import { useEffect } from 'react';
import './App.css';
// import AddNewBlog from './Components/Admin_Dashboard/AddNewBlog';
import Home from './Components/Home_Page/Home';
// import ListItems from './Components/Admin_Dashboard/ListItems';


function App() {
  useEffect(()=>{
      sessionStorage.setItem("userType",null);
      sessionStorage.setItem("username",null);
  });
  return (
    <>
       <Home/>
       {/* <ListItems
              fetchUrl="http://localhost:8181/v1/region/allRegions"
              TitleName="Region"
            /> */}
    </>
  );
}

export default App;
