import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialIcon = () => {
    return (
        <div className="flex gap-6 text-3xl ">
            <Link
                to={'https://www.twitter.com'}
                target="_blank"
                className="text-blue-500"
            >
                <FaTwitter></FaTwitter>
            </Link>
            <Link
                to={'https://www.whatsapp.com'}
                target="_blank"
                className="text-green-500"
            >
                <FaWhatsapp></FaWhatsapp>
            </Link>
            <Link
                to={'https://web.facebook.com/habiburrahman.habib.56027281'}
                target="_blank"
                className="text-blue-500"
            >
                <FaFacebook></FaFacebook>
            </Link>
            <Link
                to={'https://github.com/HabiburRahman02'}
                target="_blank"
                className=""
            >
                <FaGithub></FaGithub>
            </Link>
            <Link
                to={'https://www.linkedin.com'}
                target="_blank"
                className="text-blue-600"
            >
                <FaLinkedin></FaLinkedin>
            </Link>


        </div>
    );
};

export default SocialIcon;