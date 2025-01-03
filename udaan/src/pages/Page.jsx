import React, { useRef } from 'react';
import './Page.css';
import Video from '../assets/FLYIGHTQUEST.mp4';

const Page = () => {
    const videoRef = useRef(null);

    const handleVideoEnd = () => {
        // Pause the video when it ends
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    const contact = [
        {
            name: 'Vikhyat Agrawal',
            email: '2023pcecavikhyat059@poornima.org',
            no: '+916398644252',
        },
        {
            name: 'Abhinav Mehta',
            email: '2023pcecsabhinav004@poornima.org',
            no: '+919521179009',
        },
        {
            name: 'Bhawuk Arora',
            email: '2022pceadbhawuk017@poornima.org',
            no: '+919782176005',
        },
    ];

    return (
        <div className="about-page">
            <header className="height-75">
                <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
                    <h1 className="text-center fw-semibold italic text-purple-300 upercase ">
                        Page
                    </h1>
                    <p className="w-75 mb-5 text-white text-center uppercase">Comming Soon</p>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8">
                {/* Video Section (Full Width) */}
                <div className="w-full mb-8">
                    <video
                        className="w-full h-auto rounded-lg shadow-lg"
                        autoPlay
                        muted
                        ref={videoRef}
                        onEnded={handleVideoEnd}
                    >
                        <source src={Video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Flex Container for Contact and Registration Sections */}
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Contact Details Section */}
                    <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-6 text-[#1342b0]">Contact Details</h2>
                        <div className="space-y-4">
                            {contact.map((item, index) => (
                                <div key={index} className="border-b border-gray-200 pb-4">
                                    <div className="font-semibold text-lg">{item.name}</div>
                                    <div className="text-sm text-gray-600">{item.email}</div>
                                    <div className="text-sm text-gray-600">{item.no}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Registration Section */}
                    <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
                        <a
                            href="https://unstop.com/competitions/flight-quest-udaan-aeromodellng-club-1308524?lb=dSkZmec"
                            className="bg-[#39bef7] text-white px-8 py-4 rounded-lg hover:bg-[#1342b0] transition duration-300 no-underline text-lg font-semibold"
                        >
                            Click here to register
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
