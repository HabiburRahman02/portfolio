import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialIcon = () => {
    const phoneNumber = "8801779888454";
    const message = "Hi, I want to discuss about your portfolio!";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="flex gap-6 text-3xl ">
            <Link
                to={'https://portfoliohabib.netlify.app'}
                target="_blank"
                className="text-blue-500"
            >
                <FaTwitter></FaTwitter>
            </Link>
            <a
                href={whatsappLink}
                target="_blank"
                className="text-green-500"
            >
                <FaWhatsapp></FaWhatsapp>
            </a>
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
                to={'https://www.linkedin.com/in/habiburrahmandev'}
                target="_blank"
                className="text-blue-600"
            >
                <FaLinkedin></FaLinkedin>
            </Link>


        </div>
    );
};

export default SocialIcon;