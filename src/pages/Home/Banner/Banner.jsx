/* eslint-disable react/no-unescaped-entities */

import { FiDownload } from "react-icons/fi";
import { Typewriter } from 'react-simple-typewriter'
import bannerImgJson from '../../../assets/images/bannerImgJson.json'
import resumePdf from '../../../assets/link/habibur-resume.pdf'
import { Fade } from "react-awesome-reveal";
import { FaHandsClapping } from "react-icons/fa6";
import Lottie from "lottie-react";

const Banner = () => {
    // style={{ clipPath: 'ellipse(100% 100% at 50% 0%)' }}
    return (
        <div className="text-white bg-gradient-to-r from-indigo-500 to-pink-500">
            <div className="md:flex gap-24 p-2 items-center justify-between max-w-[1300px] mx-auto py-12">
                <div className="space-y-5 md:w-1/2 border2">
                    <Fade duration={2000} direction="down" >
                        <div className="flex items-center gap-2 text-3xl font-bold">
                            <h1> Hey! I'm Habib</h1>
                            <FaHandsClapping className="text-orange-100"></FaHandsClapping>
                        </div>
                    </Fade>
                    <Fade duration={2000} direction="up">
                        <div className="text-4xl sm:text-5xl font-bold">
                            I'm a
                            <Typewriter
                                words={[" Web Developer", " React js Developer", " Frontend Developer"]}
                                loop={false}
                                cursor="|"
                                delaySpeed={2000}
                                typeSpeed={50}
                                deleteSpeed={50}
                            ></Typewriter>
                        </div>
                    </Fade>
                    <Fade direction="up" duration={2000}>
                        <p className='text-lg'>I am a web developer specializing in building dynamic and responsive web applications using React and the Mern stack. With expertise in React, MongoDB, Express, Node.js, and JavaScript, I create full-stack applications that are efficient, scalable, and user-friendly</p>

                        <div>

                            <a href={resumePdf} download>

                                <button className='bg-white hover:text-blue-600 duration-500 text-black px-12 py-3 rounded-full flex items-center'>
                                    <FiDownload className="mr-2"></FiDownload>
                                    Resume</button>

                            </a>
                        </div>
                    </Fade>
                </div>

                <div className='md:w-1/2 border2'>
                    {/* <Fade duration={2000} direction="down"> */}
                    <Lottie className="w-full" animationData={bannerImgJson} loop={true} />
                    {/* </Fade> */}
                </div>

            </div>
        </div>
    );
};

export default Banner;