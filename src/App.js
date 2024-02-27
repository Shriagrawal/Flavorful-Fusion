import './App.css';
import React, { useState } from 'react'
import Header from './Components/Header';
import Body from './Components/Body';
import { BrowserRouter as Router, Route,Routes,Outlet } from 'react-router-dom'; // Correct imports
import Contactus from './Components/Contact_us';
import Aboutus from './Components/Aboutus';
import Error from './Components/Error';
import RestaurantMenu from './Components/RestaurantMenu';
import Usercontext from './Utils/UserContext';
import { Provider } from "react-redux";
import appStore from './Utils/appStore';
import Cart from './Components/Cart'
// header:
   // logo
   // nav items

//Body 
   // Search
   //button to show top rated res
   // cards container
      // cards
         //Img,cusine,Name of the res,Star rating

//Footer
  //adress,contact,copyright

const App = () =>{
   const [username,setusername] = useState("shristi")
   return(
      <Provider store={appStore}>
      <Usercontext.Provider value={{loggedinuser:username,setusername}}>
    <div className="Applayout">
       <Header/>
       <Outlet/>
    </div>
    </Usercontext.Provider>
    </Provider>
   )
}

const AppRouter = () => {
   return (
     <Router>
      <Routes>
       <Route key = "5" path="/" element={<App />} children={[
         <>
        <Route key = "1" path='/' element={ <Body/>}></Route>
        <Route  key = "2" path="/contact_us" element={<Contactus/>} />
        <Route key = "3" path='/about_us' element={<Aboutus/>}/>
        <Route key = "4"  path='/restaurants/:resID' element={<RestaurantMenu/>}></Route>
        <Route key="5" path='/cart' element={<Cart/>}/>
        </>
       ]}/>
       <Route key = "6" path='*' element={<Error/>}/>
       </Routes>
     </Router>
   );
 };

export default AppRouter