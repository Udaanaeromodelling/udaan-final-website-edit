import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';

import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/rc.webp';
import Blog2Img from '../../utils/images/hovercraft.jpg';
import Blog3Img from '../../utils/images/drone.jpg';
import Blog4Img from '../../utils/images/workshop.jpg';

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
                <h1 className='lg:text-9xl sm:text-5xl font-bold text-blue-400 animate-pulse'>UDAAN</h1>
                <p className='text-center fw-semibold text-lg'> Aeromodelling Club</p>
              
            </div>
        </header>

        

        <div className='py-5 bg-gray-300'>
            <div className="container ">
                <div className=''>
                    <div >
                        <p className='text-center font-bold text-3xl  italic text-black sm:text-3xl'>Introduction</p>
                        <p className='text-black text-justify text-lg sm:text-xl italic'>The Udaan Aero Modelling Club is a dynamic community dedicated to fostering a passion for aviation and aeromodeling among students. It provides a platform for learning and experimenting with the principles of flight, aircraft design, and drone technology through hands-on projects and workshops. Members gain practical experience by building and flying model aircraft, enhancing their technical skills in aerodynamics, mechanics, and electronics. The club also encourages innovation, teamwork, 
                            and creative problem-solving, aiming to prepare students for careers in aerospace and related fields.</p>
                      
                    </div>
                   
                </div>
            </div>
        </div>
        <div className="py-5 ">
            <ChooseSection />
        </div>


         <div className='blog-section text-light py-8 sm:py-12'>
            <div className='container mx-auto px-4 sm:px-6'>
                <h2 className='text-center mb-8 text-2xl sm:text-3xl md:text-4xl font-bold italic'>
                    OUR WORK
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {blogs.map((blog) => (
                        <div key={blog.id} className='flex'>
                            <Card className='w-full bg-white rounded-lg overflow-hidden 
                                           shadow-lg hover:shadow-xl 
                                           transition-all duration-300 
                                           transform hover:scale-[1.02]'>
                                {/* Responsive Image Container with Consistent Ratio */}
                                <div className='relative w-full' style={{ paddingTop: '56.25%' }}> {/* 16:9 ratio */}
                                    <Card.Img 
                                        variant="top" 
                                        src={blog.img} 
                                        className='absolute top-0 left-0 w-full h-full 
                                                  object-cover object-center'
                                        alt={blog.title}
                                    />
                                </div>
                                
                                {/* Card Content */}
                                <Card.Body className='p-4 sm:p-6 h-[300px]'>
                                    <Card.Title className='text-xl font-bold mb-4 text-gray-800 text-center'>
                                        {blog.title}
                                    </Card.Title>
                                    <Card.Text className='text-base text-gray-600 
                                                        leading-relaxed text-justify 
                                                        h-[200px] overflow-y-auto'>
                                        {blog.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     
    </div>
  )
}

export default Home;
