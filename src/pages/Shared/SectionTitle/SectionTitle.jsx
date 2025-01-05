import { Fade } from "react-awesome-reveal";

const SectionTitle = ({ title }) => {
    return (
        <Fade direction="down" duration={2000}>
            <h1 className="text-4xl sm:text-5xl dark:text-white font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 text-center">{title}</h1>
        </Fade>
    );
};

export default SectionTitle;