import { useEffect } from 'react';
import './App.css';
// import AddNewBlog from './Components/Admin_Dashboard/AddNewBlog';
import Home from './Components/Home_Page/Home';


function App() {
  useEffect(()=>{
      sessionStorage.setItem("userType",null);
      sessionStorage.setItem("username",null);
  });
  return (
    <>
       <Home/>
       {/* <AddNewBlog/> */}
    </>
  );
}

export default App;
