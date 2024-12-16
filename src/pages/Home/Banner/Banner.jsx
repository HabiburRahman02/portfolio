/* eslint-disable react/no-unescaped-entities */

import { FiDownload } from "react-icons/fi";
import { Typewriter } from 'react-simple-typewriter'
import bannerImgJson from '../../../assets/images/bannerImgJson.json'
import resumePdf from '../../../assets/link/habibur-resume.pdf'
import { Bounce, Fade, Flip, Zoom } from "react-awesome-reveal";
import Lottie from "lottie-react";

const Banner = () => {
    // style={{ clipPath: 'ellipse(100% 100% at 50% 0%)' }}
    return (
        <div className="text-white bg-gradient-to-r from-indigo-500 to-pink-500">
            <div className="md:flex gap-24 p-2 items-center justify-between max-w-[1300px] mx-auto py-12">
                <div className="space-y-5 md:w-1/2 border2">
                    <Fade duration={2000} direction="down" >
                        <h1 className="text-5xl font-bold"> Hey! I'm Habib </h1>
                    </Fade>
                    <Fade duration={2000} direction="up">
                        <div className="text-4xl font-bold">
                            I'm a
                            <Typewriter
                                words={[" Web Developer", " Mern Stack Developer", " React js Developer", " Frontend Developer"]}
                                loop={false}
                            ></Typewriter>
                        </div>
                    </Fade>
                    <Fade direction="up" duration={2000}>
                        <p className='text-lg'>I am a web developer specializing in building dynamic and responsive web applications using React and the Mern stack. With expertise in React, MongoDB, Express, Node.js, and JavaScript, I create full-stack applications that are efficient, scalable, and user-friendly</p>
                    </Fade>
                    <div>

                        <a href={resumePdf} download>
                            <Fade duration={2000} direction="up">
                                <button className='bg-white text-black px-12 py-3 rounded-full flex items-center'>
                                    <FiDownload className="mr-2"></FiDownload>
                                    Resume</button>
                            </Fade>
                        </a>
                    </div>
                </div>

                <div className='md:w-1/2 border2'>
                    <Fade duration={2000} direction="down">
                        <Lottie className="w-full" animationData={bannerImgJson} loop={true} />
                    </Fade>
                </div>

            </div>
        </div>
    );
};

export default Banner;