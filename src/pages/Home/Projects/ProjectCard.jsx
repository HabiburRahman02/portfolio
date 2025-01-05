import { Fade } from "react-awesome-reveal";
import { MdLiveTv } from "react-icons/md";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {

    return (
        <div className="  shadow-xl rounded-lg w-full  bg-white dark:text-black">
            <div>
                <img className="w-full h-60 object-cover rounded-t-lg" src={project.image} alt={project.name} />
            </div>
            <div className="px-4 pt-12 pb-8">
                <Fade direction="up" duration={2000}>
                    <h2 className="text-2xl font-semibold">{project.name}</h2>
                </Fade>
                <Fade direction="up" duration={2000}>
                    <div className='sm:flex items-center justify-between mt-6'>
                        <Link to={`/viewDetails/${project.id}`}>
                            <button
                                className="px-6 py-3 duration-300  text-white rounded-sm bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 transition-all ease-in-out"
                            >
                                View Details
                            </button>
                        </Link>

                        <a href={project.live} target="_blank">
                            <div className='flex items-center mt-4 sm:mt-0  gap-3 text-xl sm:text-2xl text-blue-500 group'>
                                <MdLiveTv className="group-hover:text-pink-500 duration-700"></MdLiveTv>
                                <p className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 group-hover:from-pink-500 group-hover:to-indigo-500 transition-all ease-in-out duration-700">Live Preview</p>
                            </div>
                        </a>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default ProjectCard;
