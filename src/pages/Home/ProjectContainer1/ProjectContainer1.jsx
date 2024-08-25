/* eslint-disable react/no-unescaped-entities */
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";

import travelImg from '../../../assets/images/projects/travel.jpg'
import productStoreImg from '../../../assets/images/projects/product-store2.JPG'
const ProjectContainer1 = () => {
    return (
        <div className="grid md:grid-cols-2 mx-4 gap-16 my-16">
            <div className="p-6 md:p-8 space-y-4 rounded-2xl bg-gray-50 border-2 border-t-gray-700 border-r-8 border-r-gray-700 border-b-8 border-b-gray-700 border-l-gray-700 hover:border-t-indigo-500 hover:border-r-pink-500 hover:border-b-pink-500 hover:border-l-indigo-500 transition-all">
                <a href="https://touristsspot-1f4a5.web.app" target="_blank">
                    <img className='w-full h-[230px] object-cover rounded-md' src={travelImg} alt="" />

                </a>
                <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">Tourists Spots Website</p>
                <p>It’s a tourist spots website with some great features. After entering the website, you'll first see a banner. Then you can view various spots, including their names, locations, and other details. If you want to add a new spot, you’ll need to log in to access all features. If you don't have an account yet, you will need to sign up first. Besides logging in, there are other features you’ll discover as you browse the website.</p>
                <div className='flex items-center justify-between'>
                    <a href="https://touristsspot-1f4a5.web.app" target="_blank">
                        <div className='flex items-center  gap-3 text-2xl hover:underline text-green-600 cursor-pointer'>
                            <MdLiveTv></MdLiveTv>
                            <p>Live Preview</p>
                        </div>
                    </a>
                    <a href="https://github.com/HabiburRahman02/tourist-spots-client" target="_blank">
                        <div className='text-5xl  hover:text-slate-900 cursor-pointer'>
                            <FaGithub></FaGithub>
                        </div>
                    </a>
                </div>
            </div>
            <div className="p-6 md:p-8 space-y-4 rounded-2xl bg-gray-50 border-2 border-t-gray-700 border-r-8 border-r-gray-700 border-b-8 border-b-gray-700 border-l-gray-700 hover:border-t-indigo-500 hover:border-r-pink-500 hover:border-b-pink-500 hover:border-l-indigo-500 transition-all">
                <a href="https://product-store-3197e.web.app" target="_blank">
                    <img className='w-full h-[230px] object-cover rounded-md' src={productStoreImg} alt="" />

                </a>
                <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">Product Store Website</p>
                <p>It’s a product store website with a variety of products available, such as bikes, cars, laptops, tablets, cameras, webcams, and more. Not only can you browse these products, but you can also add new ones if you wish. You can view the products you’ve added by clicking on the cart icon. Additionally, there are various backend features, including login, registration, and other functionalities.</p>
                <div className='flex items-center justify-between'>
                    <a href="https://product-store-3197e.web.app" target="_blank">
                        <div className='flex items-center  gap-3 text-2xl hover:underline text-green-600 cursor-pointer'>
                            <MdLiveTv></MdLiveTv>
                            <p>Live Preview</p>
                        </div>
                    </a>
                    <a href="https://github.com/HabiburRahman02/product-store-client" target="_blank">
                        <div className='text-5xl  hover:text-slate-900 cursor-pointer'>
                            <FaGithub></FaGithub>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectContainer1;