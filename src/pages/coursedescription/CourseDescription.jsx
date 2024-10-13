// //import React from 'react'
// import { useNavigate, useParams } from "react-router-dom";
// import "./CourseDescription.css";
// import { CourseData } from "../../context/CourseContext";
// import { useEffect, useState } from "react";
// import { server } from "../../main";
// //import { UserData } from "../../context/UserContext";

// const CourseDescription = ({user}) => {
    
//     const params = useParams();
//     const navigate = useNavigate();

//     const [loading, setLoading] = useState(false);


//     const{fetchCourse,course} = CourseData();

//     useEffect(()=>{
//         fetchCourse(params.id);
//     },[]);

//     // const checkoutHandler = async()=>{
          
//     // }

//   return (


//     <>
//     {course && <div className="course-description">
//         <div className="course-header">
//             <img src={`${server}/${course.image}`} alt="" className="course-image"/>
//             <div className="course-info">
//                 <h2>{course.title}</h2>
//                 <p>Instructor:{course.createdBy}</p>
//                 <p>Duration:{course.duration} weeks</p>
//             </div>
           
//         </div>
//         <p>Let,s get started with course At ₹{course.price}</p>


//         <button onClick={()=>navigate(`/course/study/${course._id}`)}
//                  className="common-btn">Study</button>

//                  <br></br>

//         <button onClick={()=>navigate(`/course/study/${course._id}`)}
//                  className="common-btn">Get Free</button>        

// {/* {
//    user && user.subscription.includes(course._id) ? (
//    <button onClick={()=>(`/course/study/${course._id}`)} 
//    className="common-btn">Study</button>) : (

//     <button onClick={()=>navigate(`/course/study/${course._id}`)}
//                  className="common-btn">Study</button>

//    // <button onClick ={checkoutHandler} className="common-btn"> Get Free</button>
//    )} */}





//         </div>}
//     </>
//   );
// };

// export default CourseDescription



//import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import "./CourseDescription.css";
import { CourseData } from "../../context/CourseContext";
import { useEffect, useState } from "react";
import { server } from "../../main";
//import { UserData } from "../../context/UserContext";

const CourseDescription = ({user}) => {
    
    const params = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);


    const{fetchCourse,course} = CourseData();

    useEffect(()=>{
        fetchCourse(params.id);
    },[]);

    // const checkoutHandler = async()=>{
          
    // }

  return (


    <>
    {/* {course && <div className="course-description">
        <div className="course-header">
            <img src={`${server}/${course.image}`} alt="" className="course-image"/>
            <div className="course-info">
                <h2>{course.title}</h2>
                <p>Instructor:{course.createdBy}</p>
                <p>Duration:{course.duration} weeks</p>
            </div>
           
        </div> */}


{course && 
            <div className="course-description">
              <div className="course-header">
                <img
                  src={`${server}/${course.image}`}
                  alt=""
                  className="course-image"
                />
                <div className="course-info">
                  <h2>{course.title}</h2>
                  <p>Instructor: {course.createdBy}</p>
                  <p>Duration: {course.duration} weeks</p>
                </div>
              </div>

              <p>{course.description}</p>
        <p>Let,s get started with course At ₹{course.price}</p>


        <button onClick={()=>navigate(`/course/study/${course._id}`)}
                 className="common-btn">Study</button>

                 <br></br>

        <button onClick={()=>navigate(`/course/study/${course._id}`)}
                 className="common-btn">Get Free</button>        

{/* {
   user && user.subscription.includes(course._id) ? (
   <button onClick={()=>(`/course/study/${course._id}`)} 
   className="common-btn">Study</button>) : (

    <button onClick={()=>navigate(`/course/study/${course._id}`)}
                 className="common-btn">Study</button>

   // <button onClick ={checkoutHandler} className="common-btn"> Get Free</button>
   )} */}





        </div>}
    </>
  );
};

export default CourseDescription