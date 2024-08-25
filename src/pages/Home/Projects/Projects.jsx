import { FaGithub } from 'react-icons/fa';
import doctorCenter from '../../../assets/images/projects/doctor-center.JPG'
import pandaCommerce from '../../../assets/images/projects/panda-commerce.jpg'

import { MdLiveTv } from "react-icons/md";
import { Fade } from 'react-awesome-reveal';
import ProjectContainer1 from '../ProjectContainer1/ProjectContainer1';
import ProjectContainerTwo from '../Home/ProjectContainerTwo/ProjectContainerTwo';

const Projects = () => {
    return (
        <Fade>
            <div className="max-w-6xl mx-auto mt-32">
                <h1 className="mt-16 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 text-center">Projects_ </h1>

                {/* first card container start */}
                <ProjectContainer1></ProjectContainer1>
                {/* first card container end */}


                {/* second card container start */}
                <ProjectContainerTwo></ProjectContainerTwo>
                {/* second card container end */}


                {/* third card container start */}
                <div className="grid md:grid-cols-2 mx-4 gap-16 my-16">
                    <div className="p-6 md:p-12 space-y-2 rounded-2xl bg-gray-50 border-2 border-t-gray-700 border-r-8 border-r-gray-700 border-b-8 border-b-gray-700 border-l-gray-700 hover:border-t-indigo-500 hover:border-r-pink-500 hover:border-b-pink-500 hover:border-l-indigo-500 transition-all">
                        <img className='border-y border-y-slate-900 rounded-lg p-2' src={pandaCommerce} alt="" />
                        <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">Product Store</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut sequi veritatis laboriosam velit fugiat eligendi temporibus, molestiae sit commodi non?</p>
                        <div className='flex items-center justify-between '>
                            <div className='flex items-center  gap-3 text-2xl hover:underline text-green-600 cursor-pointer'>
                                <MdLiveTv></MdLiveTv>
                                <p>Live Preview</p>
                            </div>
                            <div className='text-5xl hover:text-slate-900 cursor-pointer'>
                                <FaGithub></FaGithub>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 md:p-12 space-y-2 rounded-2xl bg-gray-50 border-2 border-t-gray-700 border-r-8 border-r-gray-700 border-b-8 border-b-gray-700 border-l-gray-700 hover:border-t-indigo-500 hover:border-r-pink-500 hover:border-b-pink-500 hover:border-l-indigo-500 transition-all">
                        <img className='border-y border-y-slate-900 rounded-lg p-2' src={doctorCenter} alt="" />
                        <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">Product Store</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut sequi veritatis laboriosam velit fugiat eligendi temporibus, molestiae sit commodi non?</p>
                        <div className='flex items-center justify-between '>
                            <div className='flex items-center  gap-3 text-2xl hover:underline text-green-600 cursor-pointer'>
                                <MdLiveTv></MdLiveTv>
                                <p>Live Preview</p>
                            </div>
                            <div className='text-5xl hover:text-slate-900 cursor-pointer'>
                                <FaGithub></FaGithub>
                            </div>
                        </div>
                    </div>
                </div>
                {/* third card container end */}


            </div>
        </Fade>
    );
};

export default Projects;