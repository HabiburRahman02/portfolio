import { MdLiveTv } from "react-icons/md";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {

    return (
        <div className=" rounded shadow-xl w-full  bg-white">
            <div>
                <img className="w-full h-60 object-cover" src={project.image} alt={project.name} />
            </div>
            <div className="px-4 py-8">
                <h2 className="text-2xl font-semibold">{project.name}</h2>
                {/* <p className="text-gray-700 mt-2">{project.description.substring(0, 100)}...</p> */}

                <div className='flex items-center justify-between mt-6'>
                    <Link to={`/viewDetails/${project.id}`}>
                        <button
                            className="px-6 py-3 bg-blue-500 text-white hover:bg-blue-600 duration-500"
                        >
                            View Details
                        </button>
                    </Link>

                    <a href="https://touristsspot-1f4a5.web.app" target="_blank">
                        <div className='flex items-center  gap-3 text-2xl hover:underline text-blue-500 cursor-pointer'>
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
