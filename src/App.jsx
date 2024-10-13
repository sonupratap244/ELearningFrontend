//import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import "./App.css";
import Home from './pages/home/Home';
import About from "./pages/about/About";
import Header from './components/header/Header';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Verify from './pages/auth/Verify';
import Footer from "./components/footer/Footer";
import Account from "./pages/account/Account";
import { UserData } from "./context/UserContext";
import Loading from "./components/loading/Loading";
import Courses from "./pages/courses/Courses";
import CourseDescription from "./pages/coursedescription/CourseDescription";
import CourseStudy from "./pages/coursestudy/CourseStudy";
import Lecture from "./pages/lecture/Lecture";
import AdminDashboard from "./Admin/Dashboard/AdminDashboard";
import AdminCourses from "./Admin/Courses/AdminCourses";
import AdminUsers from "./Admin/Users/AdminUsers";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Contect from "./pages/Contect/Contect";



const App = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


const {isAuth,user,loading} = UserData();


  return (
  <> 
   {loading? (
    <Loading/>
   ) : (<BrowserRouter>
   <Header isAuth={isAuth}/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/courses" element={<Courses/>}/>
    <Route path="/contect" element={<Contect/>}/>
    <Route path="/account" element={isAuth?<Account user={user}/>:<Login/>}/>
    <Route path="/login" element={isAuth?<Home/>:<Login/>}/>
    <Route path="/register" element={isAuth?<Home/>:<Register/>}/>
    <Route path="/verify" element={isAuth?<Home/>:<Verify/>}/>
    <Route path="/forgot" element={isAuth?<Home/>:<ForgotPassword/>}/>
    <Route path="/reset-password/:token" element={isAuth?<Home/>:<ResetPassword/>}/>
    <Route path="/course/:id" element={isAuth?<CourseDescription user={user}/>:<Login/>} />
    <Route path="/course/study/:id" element={isAuth?<CourseStudy user={user}/>:<Login/>} />
    {/* <Route path="/lectures/:id" element={isAuth?<Lecture user={user}/>:<Login/>} /> */}
    <Route path="/lectures/:id" element={<Lecture user={user}/>} />
    <Route path="/admin/dashboard" element={isAuth?<AdminDashboard user={user}/> : <Login/>}/>
    <Route path="/admin/course" element={isAuth?<AdminCourses user={user}/> : <Login/>}/>
    <Route path="/admin/users" element={isAuth?<AdminUsers user={user}/> : <Login/>}/>


   </Routes>
   <Footer/>
   </BrowserRouter>
  )}

  </>
  );
};

export default App