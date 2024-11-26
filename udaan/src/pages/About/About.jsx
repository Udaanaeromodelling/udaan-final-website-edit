import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import AboutUsSectionImg from '../../utils/images/about-us-section-img.jpg';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import moment1 from '../../utils/images/momet1.png';
import Person2 from '../../utils/images/IIT RURKEE.png';
import Person3 from '../../utils/images/person3.jpg';
import Person4 from '../../utils/images/person4.jpg';
import Person5 from '../../utils/images/person5.jpg';
import Person6 from '../../utils/images/person6.jpg';
import Person7 from '../../utils/images/person7.jpg';
import Person8 from '../../utils/images/person8.jpg';
import Person9 from '../../utils/images/person9.jpg';

const persons = [
    {
        id: 1,
        img: [moment1]
    },
    {
        id: 2,
        img: [Person2]
    },
    {
        id: 3,
        img: [Person3]
    },
    {
        id: 4,
        img: [Person4]
    },
    {
        id: 5,
        img: [Person5]
    },
    {
        id: 6,
        img: [Person6]
    },
    {
        id: 7,
        img: [Person7]
    },
    {
        id: 8,
        img: [Person8]
    },
    {
        id: 9,
        img: [Person9]
    },
];

function About() {
    return (
        <div className='about-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold italic text-purple-300 u'>ABOUT US</h1>
                    <p className=' w-75 mb-5  text-purple-300 text-justify'>The Udaan AeroModelling Club, founded in 2015 at Poornima College of Engineering, is a hub for students passionate about aviation and aeromodelling. Known for winning prestigious competitions, the club fosters innovation, technical skill, and teamwork in aerospace engineering.</p>
                </div>
            </header>

            <div className='container my-5'>
                <div className="row">
                    <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                        <h2 className='mb-4 mb-lg-5 font-bold text-black italic uppercase'>History</h2>
                        <p className='text-balance justify-center text-justify italic'>
                            The Udaan AeroModelling Club, founded in 2015 at Poornima College of Engineering, has grown into a renowned group for students passionate about aviation, engineering,
                             and aeromodelling. Originally started by a group of dedicated seniors, the club quickly gained momentum as members mastered the basics of flight dynamics, aerodynamics, and structural design. Over time, the club moved beyond basic model aircraft to tackle advanced drone technology, autonomous systems, and high-precision aeromodelling projects.

                        </p>
                        <p className='mb-5 text-balance text-justify italic'>
                        The club’s impressive track record includes notable achievements at some of the country’s most prestigious competitions. Udaan has secured a winning position at IIT Kanpur, placed in the top 10 at IIT Bombay, and won 1st, 2nd, and 3rd prizes at LNMIIT. The club has twice emerged as winners at MNIT Jaipur and JECRC, showcasing consistent excellence in the field. Additionally, Udaan took home the winner’s title at IIT Jodhpur, further solidifying its reputation for innovative design and competitive skill.


                        </p>
                        <p className='mb-8 text-balance text-justify italic'>
                        Beyond competitions, Udaan regularly hosts workshops, lectures, and practical sessions, enabling students to gain hands-on experience and deepen their technical expertise in aerodynamics, mechanics, and electronics. The club’s supportive community fosters collaboration, creativity, and technical growth, making it a source of pride for Poornima College. Today, Udaan continues to inspire future engineers, establishing a legacy of success in aeromodelling and contributing to the advancement of aerospace technology at the college.
                        </p>
                     
                    </div>
                    <div className='col-lg-6 d-flex justify-content-center'>
                        <img src={AboutUsSectionImg} className='img-fluid w-75' alt="" />
                    </div>
                </div>
            </div>

            <div className='bg-dark text-light py-5'>
                <ChooseSection />
            </div>

           
        </div>

    )
}

export default About;