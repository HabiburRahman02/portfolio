/* eslint-disable react/no-unescaped-entities */
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import healthImg from '../../../../assets/images/projects/health-event.jpg'
import rinterioImg from '../../../../assets/images/projects/rinterio.jpg'
import { Fade } from "react-awesome-reveal";
import Tilt from 'react-parallax-tilt';

const ProjectContainerTwo = () => {
    return (
        <div className='grid grid-cols-1 gap-16 text-black'>
            <Fade>
                <div className="p-6 md:p-8 md:flex items-center gap-16 mx-4 space-y-2 shadow-2xl rounded-2xl bg-white border-2 border-t-gray-700 border-r-8 border-r-gray-700 border-b-8 border-b-gray-700 border-l-gray-700 hover:border-t-indigo-500 hover:border-r-pink-500 hover:border-b-pink-500 hover:border-l-indigo-500 transition-all">
                    <div className='md:w-1/2'>
                        <a href="https://health-event-14e66.web.app" target="_blank">
                            <Tilt>
                                <img className='w-full h-[230px] md:h-[300px] object-cover rounded-md' src={healthImg} alt="" />
                            </Tilt>
                        </a>
                    </div>
                    <div className="md:w-1/2 space-y-4">
                        <p className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">Health Event Website</p>
                        <p>When a user visits the health event website, they will initially see banners, doctor names, available services, and feedback on the homepage. However, when they attempt to view more detailed information, they will be redirected to a login form. Once logged in, they can access all the detailed content. Additionally, there will be a donation section where users can view information about blood groups and other related details.</p>

                        <div className='flex items-center justify-between'>
                            <a href="https://health-event-14e66.web.app" target="_blank">
                                <div className='flex items-center  gap-3 text-2xl hover:underline text-green-600 cursor-pointer'>
                                    <MdLiveTv></MdLiveTv>
                                    <p>Live Preview</p>
                                </div>
                            </a>
                            <a href="https://github.com/HabiburRahman02/health-event" target="_blank">
                                <div className='text-5xl  hover:text-slate-900 cursor-pointer'>
                                    <FaGithub></FaGithub>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </Fade>
            <Fade>
                <div className="p-6 md:p-8 md:flex items-center gap-16 mx-4 space-y-2 shadow-2xl rounded-2xl bg-white border-2 border-t-gray-700 border-r-8 border-r-gray-700 border-b-8 border-b-gray-700 border-l-gray-700 hover:border-t-indigo-500 hover:border-r-pink-500 hover:border-b-pink-500 hover:border-l-indigo-500 transition-all">
                    <div className='md:w-1/2'>
                        <a href="https://health-event-14e66.web.app" target="_blank">
                            <Tilt>
                                <img className='w-full h-[230px] md:h-[300px] object-cover rounded-md' src={rinterioImg} alt="" />
                            </Tilt>
                        </a>
                    </div>
                    <div className="md:w-1/2 space-y-4">
                        <p className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">Rinterio Website</p>
                        <p>
                            This building design-related website allows users to explore various design options, learn about estimated costs, view available designs, and see the latest portfolio along with other features. Currently built using HTML, CSS, and Tailwind, the website offers a visually appealing and responsive experience, with plans to add more interactive functionality in the future. Additionally, the site will incorporate user feedback to continuously improve and meet evolving needs.</p>

                        <div className='flex items-center justify-between'>
                            <a href="https://habiburrahman02.github.io/A3-rinterio-website" target="_blank">
                                <div className='flex items-center  gap-3 text-2xl hover:underline text-green-600 cursor-pointer'>
                                    <MdLiveTv></MdLiveTv>
                                    <p>Live Preview</p>
                                </div>
                            </a>
                            <a href="https://github.com/HabiburRahman02/A3-rinterio-website" target="_blank">
                                <div className='text-5xl  hover:text-slate-900 cursor-pointer'>
                                    <FaGithub></FaGithub>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </Fade>

        </div>);
};

export default ProjectContainerTwo;