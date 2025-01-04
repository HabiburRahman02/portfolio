import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { animateScroll as scroll } from 'react-scroll';
import { useEffect, useState } from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";


const Footer = () => {
    const [scrollButtonVisible, setScrollButtonVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setScrollButtonVisible(true);
            } else {
                setScrollButtonVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div className=" px-4 bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-12">
            <div className="md:flex items-center justify-between space-y-5 text-center max-w-[1300px] mx-auto">
                <p className="text-xl">&copy;Copyright 2024 - 2025</p>
                <div>
                    <div className="flex justify-center gap-6 text-3xl  mb-5">
                        <Link
                            to={'https://portfoliohabib.netlify.app'}
                            target="_blank"
                        >
                            <FaTwitter></FaTwitter>
                        </Link>
                        <Link
                            to={'https://portfoliohabib.netlify.app'}
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
                            to={'https://www.linkedin.com/in/habiburrahmandev'}
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

                {scrollButtonVisible &&
                    <button
                        className="fixed bottom-5 right-5 px-3 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                        onClick={scrollToTop}
                    >
                        <FaRegArrowAltCircleUp className="text-xl"></FaRegArrowAltCircleUp>
                    </button>
                }
            </div>
        </div>
    );
};

export default Footer;