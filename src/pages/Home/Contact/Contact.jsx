import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

import contactImg from '../../../assets/images/contacts/contact.jpg'
import { Fade, Zoom } from "react-awesome-reveal";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Contact = () => {
    return (
        <div className="my-16">
            <SectionTitle title='Contact_'></SectionTitle>
            <div className="max-w-[1300px] mx-auto">
                <div className="md:flex items-center gap-16 m-4">
                    {/* Left Section */}
                    <div className="md:w-2/5 mb-6 rounded-2xl p-4">
                        <Zoom duration={1000} triggerOnce>
                            <img className="rounded-lg h-64 w-full object-cover shadow-lg" src={contactImg} alt="Contact" />
                        </Zoom>
                        <Fade direction="up" duration={1000} tr>
                            <div className="mt-6">
                                <h3 className="text-2xl font-semibold">Habibur Rahman</h3>
                                <p className="text-xl text-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                                    Web Developer
                                </p>
                                <p className="text-lg mt-2">
                                    Are You Looking For Your Business Online Presence? I am here.
                                </p>
                            </div>
                        </ Fade>
                        <div className="mt-6 space-y-2">
                            <Fade direction="up" duration={1000}>
                                <div className="flex items-start gap-4">
                                    <FaPhone className="text-2xl text-blue-500" />
                                    <div>
                                        <p className="text-xl font-semibold">Phone</p>
                                        <p>01779-888454</p>
                                    </div>
                                </div>
                            </Fade>
                            <Fade direction="up" duration={1000}>
                                <div className="flex items-start gap-4">
                                    <FaLocationDot className="text-2xl text-blue-500" />
                                    <div>
                                        <p className="text-xl font-semibold">Address</p>
                                        <p>Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                            </Fade>
                            <Fade direction="up" duration={1000}>
                                <div className="flex items-start gap-4">
                                    <MdEmail className="text-2xl text-blue-500" />
                                    <div>
                                        <p className="text-xl font-semibold">Email</p>
                                        <p>habibur88484@gmail.com</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="md:w-3/5">
                        <form className="card-body dark:text-gray-500 rounded-xl border-2 border-gray-200 shadow-lg hover:shadow-xl duration-500 transition-all">
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="text-xl font-medium text-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                                        Your Name
                                    </span>
                                </label>
                                <Fade direction="up" duration={1000}>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                        required
                                    />
                                </Fade>
                            </div>

                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="text-xl font-medium text-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                                        Your Email
                                    </span>
                                </label>
                                <Fade direction="up" duration={1000}>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                        required
                                    />
                                </Fade>
                            </div>

                            <div className="form-control mb-6">
                                <label className="label">
                                    <span className="text-xl font-medium text-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                                        Your Message
                                    </span>
                                </label>
                                <Fade direction="up" duration={1000}>
                                    <textarea
                                        rows={4}
                                        placeholder="Enter your message"
                                        className="w-full border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                        required
                                    ></textarea>
                                </Fade>
                            </div>

                            <div className="form-control">
                                <Fade direction="up" duration={1000}>
                                    <button
                                        className="w-full duration-500 p-4 text-white rounded-md bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 transition-all"
                                    >
                                        Send Message
                                    </button>
                                </Fade>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default Contact;