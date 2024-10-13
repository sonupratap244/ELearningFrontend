//import React from 'react'
import "./Testimonials.css";
import myImage from "./image/myImage.jpg";
import photo from "./Image/photo.jpg";
import img from "./Image/img.jpg";


const Testimonials = () => {

    const testimonialsData = [
        {
          id: 1,
          name: "Sonu Patel",
          position: "Student",
          message:
            "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
          
          image: myImage,
        },
        {

          id: 2,
          name: "Vipul Sharma",
          position: "Student",
          message:
            "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
          image:
            img,
        },
        {
          id: 3,
          name: "Pranshu ",
          position: "Student",
          message:
          "The instructors are very knowledgeable, and the platform's structure is easy to follow.",
          image:
            "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
        },
        {
          id: 4,
          name: "Rohit Gangwar",
          position: "Student",
          message:
            "I love the interactive courses! They really made learning so much more engaging and enjoyable.",
          image:
            photo,
        },
      ];

  return (
    <section className="testimonials"> 
      <h2 data-aos="fade-down">What our student say</h2>
      <div className="testimonials-cards"  data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          {
            testimonialsData.map((e)=>(
                <div className="testimonial-card" key={e.id}>
                    <div className="student-image">
                        <img src={e.image}/>
                    </div>
                    <p className="message">{e.message}</p>
                    <div className="info">
                        <p className="name">{e.name}</p>
                        <p className="position">{e.position}</p>
                    </div>
                </div>
            ))
          }
      </div>
    </section>
  )
}

export default Testimonials