//import React from 'react'
import { Link } from "react-router-dom";
import "./common.css";
import { FaHome, FaBook, FaUserAlt } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";




const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul>
            <li>
                <Link to={`/admin/dashboard`}>
                  <div className="icon">
                   <FaHome />
                  </div>
                  <span>Home</span>
                </Link>
            </li>

             <li>
                <Link to={`/admin/course`}>
                  <div className="icon">
                   <FaBook />
                  </div>
                  <span>Courses</span>
                </Link>
            </li>

            <li>
                <Link to={`/admin/users`}>
                  <div className="icon">
                   <FaUserAlt />
                  </div>
                  <span>Users</span>
                </Link>
            </li>

            <li>
                <Link to={`/account`}>
                  <div className="icon">
                   <HiOutlineLogout />
                  </div>
                  <span>Logout</span>
                </Link>
            </li>
            
        </ul>
    </div>
  );
}

export default Sidebar