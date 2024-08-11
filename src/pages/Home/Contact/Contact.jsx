import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import contactImg from '../../../assets/images/contacts/contact.jpg'
import { Fade } from "react-awesome-reveal";

const Contact = () => {
    return (
        <Fade direction="up">
            <div className="max-w-6xl mx-auto my-32">
                <div className="md:flex items-center gap-16 m-4">
                    <div className="md:w-2/5 border-2 border-black transition-all rounded-2xl p-4">
                        <img className='rounded-lg' src={contactImg} alt="" />
                        <div>
                            <div className='my-6'>
                                <h3 className="text-2xl">Habibur Rahman</h3>
                                <p className='text-xl text-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500'>Web Developer</p>
                                <p className='text-lg'>Are You Looking For Your Business
                                    Online Presence? I am here.
                                </p>

                            </div>
                            <div className="space-y-3">
                                <div className="flex gap-4">
                                    <FaLocationDot className="text-2xl text-blue-500"></FaLocationDot>
                                    <div>
                                        <p className='text-xl font-semibold'>Address</p>
                                        <p>Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <MdEmail className="text-2xl text-blue-500"></MdEmail>
                                    <div>
                                        <p className='text-xl font-semibold'>Email</p>
                                        <p>habibur88484@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-3/5">
                        <form className="card-body rounded-2xl border-2 border-t-gray-700 border-r-8 border-r-gray-700 border-b-8 border-b-gray-700 border-l-gray-700 hover:border-t-indigo-500 hover:border-r-pink-500 hover:border-b-pink-500 hover:border-l-indigo-500 transition-all">
                            <div className="form-control">
                                <label className="label">
                                    <p className=' text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500'>Your Name</p>
                                </label>
                                <input type="text" placeholder="Enter your name"
                                    className='border border-black p-4 rounded-sm'
                                    required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <p className=' text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500'>Your Email</p>
                                </label>
                                <input type="email" placeholder="Enter your email"
                                    className='border border-black p-4 rounded-sm'
                                    required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <p className=' text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500'>Your Message</p>
                                </label>
                                <textarea
                                    rows={3}
                                    placeholder="Enter your message"
                                    className='border border-black p-4 rounded-sm '
                                    required  ></textarea>
                            </div>


                            <div className="form-control mt-6">
                                <button className=" p-6 text-white rounded-sm bg-gradient-to-r from-indigo-500 to-pink-500">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </Fade>
    );
};

export default Contact;