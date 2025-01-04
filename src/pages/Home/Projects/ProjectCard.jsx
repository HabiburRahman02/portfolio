import { MdLiveTv } from "react-icons/md";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {

    return (
        <div className="  shadow-xl rounded-lg w-full  bg-white dark:text-black">
            <div>
                <img className="w-full h-60 object-cover rounded-t-lg" src={project.image} alt={project.name} />
            </div>
            <div className="px-4 py-12">
                <h2 className="text-2xl font-semibold">{project.name}</h2>
                {/* <p className="text-gray-700 mt-2">{project.description.substring(0, 100)}...</p> */}

                <div className='sm:flex items-center justify-between mt-6'>
                    <Link to={`/viewDetails/${project.id}`}>
                        <button
                            className="px-6 py-3 rounded-sm bg-blue-500 text-white hover:bg-blue-600 duration-500"
                        >
                            View Details
                        </button>
                    </Link>

                    <a href={project.live} target="_blank">
                        <div className='flex items-center mt-4 sm:mt-0  gap-3 text-2xl hover:underline text-blue-500 cursor-pointer'>
                            <MdLiveTv></MdLiveTv>
                            <p>Live Preview</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
