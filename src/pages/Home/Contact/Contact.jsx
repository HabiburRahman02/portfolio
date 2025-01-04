import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

import contactImg from '../../../assets/images/contacts/contact.jpg'
import { Fade, Zoom } from "react-awesome-reveal";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import ContactForm from "./ContactForm";

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
                        <ContactForm></ContactForm>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default Contact;