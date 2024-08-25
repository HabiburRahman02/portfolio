/* eslint-disable react/no-unescaped-entities */
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";


const ProjectContainerTwo = () => {
    return (
        <div className='grid grid-cols-1 gap-8'>
            <div className="p-6 md:p-8 md:flex items-center gap-16 mx-4 space-y-2 rounded-2xl bg-gray-50 border-2 border-t-gray-700 border-r-8 border-r-gray-700 border-b-8 border-b-gray-700 border-l-gray-700 hover:border-t-indigo-500 hover:border-r-pink-500 hover:border-b-pink-500 hover:border-l-indigo-500 transition-all">
                <div className='md:w-1/2'>
                    <a href="https://touristsspot-1f4a5.web.app" target="_blank">
                        <img className='w-full h-[230px] object-cover rounded-md' src={''} alt="" />
                    </a>
                </div>
                <div className="md:w-1/2 space-y-4">
                    <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">Product Store</p>
                    <p>It’s a tourist spots website with some great features. After entering the website, you'll first see a banner. Then you can view various spots, including their names, locations, and other details. If you want to add a new spot, you’ll need to log in to access all features. If you don't have an account yet, you will need to sign up first. Besides logging in, there are other features you’ll discover as you browse the website.</p>

                    <div className='flex items-center justify-between'>
                        <div className='text-5xl hover:text-slate-900 cursor-pointer'>
                            <FaGithub></FaGithub>
                        </div>
                        <div className='flex items-center  gap-3 text-2xl hover:underline text-green-600 cursor-pointer'>
                            <MdLiveTv></MdLiveTv>
                            <p>Live Preview</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="p-6 md:p-12 md:flex items-center gap-16 m-4 space-y-2 rounded-2xl bg-gray-50 border-2 border-t-gray-700 border-r-8 border-r-gray-700 border-b-8 border-b-gray-700 border-l-gray-700 hover:border-t-indigo-500 hover:border-r-pink-500 hover:border-b-pink-500 hover:border-l-indigo-500 transition-all">
                <div className='md:w-1/2'>
                    <img className='border-y border-y-slate-900 rounded-lg p-2' src={''} alt="" />
                </div>
                <div className="md:w-1/2 space-y-2">
                    <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">Product Store</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut sequi veritatis laboriosam velit fugiat eligendi temporibus, molestiae sit commodi non?</p>
                    <div className='flex items-center justify-between'>
                        <div className='text-5xl hover:text-slate-900 cursor-pointer'>
                            <FaGithub></FaGithub>
                        </div>
                        <div className='flex items-center  gap-3 text-2xl hover:underline text-green-600 cursor-pointer'>
                            <MdLiveTv></MdLiveTv>
                            <p>Live Preview</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>);
};

export default ProjectContainerTwo;