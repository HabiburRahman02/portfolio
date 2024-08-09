import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" px-4 bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-12">
            <div className="md:flex items-center justify-between space-y-5 text-center max-w-6xl mx-auto">
                <p className="text-xl">&copy;Copyright 2024 - 2025</p>
                <div>
                    <div className="flex justify-center gap-6 text-3xl  mb-5">
                        <Link
                            to={'https://www.twitter.com'}
                            target="_blank"
                        >
                            <FaTwitter></FaTwitter>
                        </Link>
                        <Link
                            to={'https://www.whatsapp.com'}
                            target="_blank"
                        >
                            <FaWhatsapp></FaWhatsapp>
                        </Link>
                        <Link
                            to={'https://web.facebook.com/habiburrahman.habib.56027281'}
                            target="_blank"
                        >
                            <FaFacebook></FaFacebook>
                        </Link>
                        <Link
                            to={'https://github.com/HabiburRahman02'}
                            target="_blank"
                        >
                            <FaGithub></FaGithub>
                        </Link>
                        <Link
                            to={'https://www.linkedin.com'}
                            target="_blank"
                        >
                            <FaLinkedin></FaLinkedin>
                        </Link>


                    </div>
                </div>
                <Link
                    to={'https://www.whatsapp.com'}
                    target="_blank"
                >
                    <p className="text-xl underline">Say Hello</p>
                </Link>
            </div>
        </div>
    );
};

export default Footer;