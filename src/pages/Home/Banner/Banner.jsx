/* eslint-disable react/no-unescaped-entities */

import { FiDownload } from "react-icons/fi";
import { Typewriter } from 'react-simple-typewriter'

import bannerImg from '../../../assets/images/bannerImg2.png'
import resumePdf from '../../../assets/link/habibur-resume.pdf'
import { Fade } from "react-awesome-reveal";

const Banner = () => {
    return (
        <Fade>
            <div className="text-white bg-gradient-to-r from-indigo-500 to-pink-500">
                <div className="md:flex gap-24 p-2 items-center justify-between max-w-6xl mx-auto py-32">
                    <div className="space-y-5 md:w-1/2 border2">
                        <h1 className="text-5xl font-bold"> Hey! I'm Habib </h1>
                        <div className="text-4xl font-bold">
                            I'm a
                            <Typewriter
                                words={[" Web Developer", " Mern Stack Developer", " React js Developer", " Frontend Developer"]}
                                loop={false}
                            ></Typewriter>
                        </div>
                        <p className='text-lg'>I am a web developer specializing in building dynamic and responsive web applications using React and the Mern stack. With expertise in React, MongoDB, Express, Node.js, and JavaScript, I create full-stack applications that are efficient, scalable, and user-friendly</p>
                        <div>

                            <a href={resumePdf} download>
                                <button className='bg-white text-black px-12 py-3 rounded-full flex items-center'>
                                    <FiDownload className="mr-2"></FiDownload>
                                    Resume</button>
                            </a>
                        </div>
                    </div>

                    <div className='md:w-1/2 border2'>
                        <img src={bannerImg} alt="" />
                    </div>

                </div>
            </div>
        </Fade>
    );
};

export default Banner;