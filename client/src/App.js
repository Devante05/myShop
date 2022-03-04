import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./utils/AuthContext"
import { StoreProvider } from "./utils/GlobalState";
// import PubHome from "./pages/PubHome";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import EditProfile from "./pages/EditProfile";
import PrivateRoute from "./utils/PrivateRoute";  



function App() {
  return (
    <Router>
      <AuthProvider>
      <StoreProvider>
      <Routes>
        <Route exact path = "/" element = {<Home/>}></Route>
        {/* <Route  path = "/home" element = {<PrivateRoute/>}>
        <Route  path='/home' element={<Home/>}/>
          </Route> */}
          <Route  path = "/myprofile" element = {<PrivateRoute/>}>
        <Route  path='/myprofile' element={<MyProfile/>}/>
          </Route>
          <Route  path = "/editprofile" element = {<PrivateRoute/>}>
        <Route  path='/editprofile' element={<EditProfile/>}/>
          </Route>        
          <Route  path = "/profile" element = {<Profile/>}></Route>
        <Route  path = "/signup" element = {<Signup/>}></Route>
        <Route  path = "/login" element = {<Login/>}></Route>
        <Route  path = "/forgotpassword" element = {<ForgotPassword/>}></Route>
      </Routes>
      </StoreProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
