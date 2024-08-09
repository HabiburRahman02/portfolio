/* eslint-disable react/no-unescaped-entities */

import { Typewriter } from 'react-simple-typewriter';
import profileImg from '../../../assets/images/profileImg3.png'
const AboutMe = () => {
    return (
        <div className="md:flex gap-12 p-2 items-center max-w-6xl mx-auto py-32">
            <div className='md:w-1/2 p-8 w-full rounded-2xl border-2 border-t-gray-700 border-r-8 border-r-gray-700 border-b-8 border-b-gray-700 border-l-gray-700 hover:border-t-indigo-500 hover:border-r-pink-500 hover:border-b-pink-500 hover:border-l-indigo-500 cursor-pointer transition-all mb-6'>
                <img className='rounded-2xl bg-gradient-to-r from-indigo-500 to-pink-500' src={profileImg} alt="" />
            </div>
            <div className='md:w-1/2 space-y-5'>
                <h1 className="text-5xl font-bold  "> About Me </h1>
                <div>
                    <h3 className="text-4xl font-semibold">I'm a Developer, so available</h3>
                    <div className='text-2xl font-semibold text-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 uppercase'>
                        for
                        <Typewriter
                            words={[" Web Development", " Web Design", " Mern Stack Development", " Frontend Development"]}
                            loop={false}
                        ></Typewriter>
                    </div>
                </div>
                <p className='text-lg'>I’m Habib, a dedicated web developer with a  for crafting dynamic and responsive web experiences. My expertise lies in utilizing the React library and the MERN stack (MongoDB, Express, React, Node.js) to build robust full-stack applications. I’m committed to leveraging modern technologies to deliver high-quality solutions that enhance user experience and drive success</p>
            </div>
        </div>
    );
};

export default AboutMe;