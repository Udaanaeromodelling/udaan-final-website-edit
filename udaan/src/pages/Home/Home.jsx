import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';

import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/rc.webp';
import Blog2Img from '../../utils/images/hovercraft.jpg';
import Blog3Img from '../../utils/images/drone.jpg';
import Blog4Img from '../../utils/images/workshop.jpg';
import Blog5Img from '../../utils/images/Harshit-Sharma .jpg';
import Blog6Img from '../../utils/images/Vikhyat.JPG';
import Blog7Img from '../../utils/images/akshat.jpg';
const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'RC Plane',
        description: 'An RC (Radio-Controlled) plane is a model aircraft piloted remotely via a handheld transmitter, allowing precise control over its flight. Designed for enthusiasts and engineers alike, RC planes simulate real-flight dynamics, making them ideal for learning aerodynamics, piloting, and model aircraft design.'
    },
    {
        id: 2,
        img: [Blog2Img],
        title: 'HoverCraft',
        description: 'A hovercraft is an air-cushion vehicle that glides smoothly over surfaces like water, land, or ice using a powerful fan system. This unique design enables it to operate in areas inaccessible to traditional vehicles, making it versatile for transport and exploration.'
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'Drone',
        description: 'An aeromodelling workshop is a hands-on training session where participants learn to design, build, and fly model aircraft. These workshops typically cover topics such as aerodynamics, aircraft construction, remote control systems, and flight techniques, providing practical experience in aeromodelling for enthusiasts and aspiring engineers.'
    },
    {
        id: 4,
        img: [Blog4Img],
        title: 'WorkShop',
        description: 'An aeromodelling workshop is a hands-on training session where participants learn to design, build, and fly model aircraft. These workshops typically cover topics such as aerodynamics, aircraft construction, remote control systems, and flight techniques, providing practical experience in aeromodelling for enthusiasts and aspiring engineers.'
    }
];
const creator = [
    {
        id: 5,
        img: [Blog5Img],
        title: 'Harshit Sharma'
    },
    {
        id: 6,
        img: [Blog6Img],
        title: 'Vikhyat Agrawal'
    },
    {
        id: 7,
        img: [Blog7Img],
        title: 'Akshat'
        }, 
];
function Home() {
  return (
    <div className='home-page bg-gray-300'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            <div className='container d-flex flex-column align-items-center'>
                <h2>Welcome To</h2>
                <h1 className='text-9xl font-bold text-blue-400 animate-pulse'>UDAAN</h1>
                <p className='text-center fw-semibold text-lg'> Aeromodelling Club</p>
              
            </div>
        </header>

        

        <div className='py-5 bg-gray-300'>
            <div className="container ">
                <div className=''>
                    <div >
                        <h2 className='text-center font-bold text-3xl  italic text-black'>Introduction</h2>
                        <p className='text-black text-justify text-lg italic'>The Udaan Aero Modelling Club is a dynamic community dedicated to fostering a passion for aviation and aeromodeling among students. It provides a platform for learning and experimenting with the principles of flight, aircraft design, and drone technology through hands-on projects and workshops. Members gain practical experience by building and flying model aircraft, enhancing their technical skills in aerodynamics, mechanics, and electronics. The club also encourages innovation, teamwork, 
                            and creative problem-solving, aiming to prepare students for careers in aerospace and related fields.</p>
                      
                    </div>
                   
                </div>
            </div>
        </div>
        <div className="py-5 ">
            <ChooseSection />
        </div>


        <div className='blog-section text-light py-5'>
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='text-center  mb-5 text-bold italic'>OUR WORK</h2>
                <div className='row g-4'>
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                           
                                <Card className='h-100 shadow scale-hover-effect'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5 italic'>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text className='text-justify'>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                           
                        </div>
                    ))}
                </div>
              
            </div>
        </div>
        <div className="creator-section py-5">
  <div className="container">
    <h2 className="text-center mb-5 text-bold italic">Credits Go to Team Webmaster</h2>
    <div className="d-flex flex-wrap justify-content-between align-items-start">
      {/* Note Section */}
      <div className="note-section me-4 mb-4 flex-shrink-1">
        <div className="p-4 shadow-lg rounded bg-white">
          <h3 className="text-bold mb-3">Note</h3>
          <p className="text-muted">
            Special thanks to the dedicated team for their hard work and creativity in bringing the Udaan Aeromodelling Club's vision to life. The seamless collaboration and technical expertise of the Webmasters have been instrumental in building this platform.
          </p>
        </div>
      </div>

      {/* Creator Cards */}
      <div className="row g-4 flex-grow-1">
        {creator.map((creator) => (
          <div key={creator.id} className="col-md-6 col-lg-3">
            <Card className="h-100 shadow scale-hover-effect">
              <Card.Img variant="top" src={creator.img} />
              <Card.Body className="p-md-5 italic">
                <Card.Title>{creator.title}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Home;