import { useEffect, useState } from "react";
import { Bounce, Zoom } from "react-awesome-reveal";
import { Link, useParams } from "react-router-dom";

const ViewDetails = () => {
    const [projects, setProjects] = useState([]);
    const { id } = useParams();

    const data = projects.find(project => project.id === parseInt(id));
    const { name, client_repo, server_repo, features, image, live, technologies } = data || {}
    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProjects(data)
            })
    }, [])
    return (
        <div className="max-w-4xl rounded-lg mx-auto p-6 my-12 pb-12 bg-white shadow-xl">
            {/* Project Title */}
            <div className="text-center mb-6">
                <h1 className="text-4xl text-gray-600 text-center">{name}</h1>
            </div>

            {/* Project Image */}
            <div className="mb-6 overflow-hidden rounded-lg shadow-lg">
                <Bounce duration={9000}>
                    <img src={image} alt={name} className="w-full h-60 md:h-96 object-cover transform hover:scale-105 transition duration-500" />
                </Bounce>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center">
                <div className="md:flex gap-4">
                    <a href={live} target="_blank">
                        <button
                            className="px-8 w-full py-4 bg-blue-500 text-white hover:bg-blue-700 duration-500"
                        >
                            Live Site Link
                        </button>
                    </a>
                    <a href={client_repo} target="_blank">
                        <button
                            className="px-8 py-4 my-4 md:my-0 w-full bg-blue-500 text-white hover:bg-blue-700 duration-500"
                        >
                            Client Side Repo
                        </button>
                    </a>
                    <a href={server_repo} target="_blank">
                        <button
                            className="px-8 py-4 w-full bg-blue-500 text-white hover:bg-blue-700 duration-500"
                        >
                            Server Side Repo
                        </button>
                    </a>

                </div>
            </div>


            {/* Technologies */}
            <div className="my-6 text-center">
                <h3 className="text-xl font-medium text-gray-600">Technologies Used:</h3>
                <div className="flex justify-center flex-wrap mt-2">
                    {technologies?.map((tech, i) => (
                        <span
                            key={i}
                            className="mr-4 mb-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Features */}
            <Zoom duration={1000} triggerOnce>
                <div className="my-8">
                    <h3 className="text-xl font-semibold text-gray-600 text-center mb-4">Features:</h3>
                    <ul className="list-inside space-y-4">
                        {features?.map((feature, i) => (
                            <li
                                key={i}
                                className="text-lg text-gray-600 leading-relaxed"
                            >
                                <span className="font-semibold">- </span>{feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </Zoom>

            <div className="flex justify-center">
                <Link to='/'>
                    <button
                        className="px-8 py-4 bg-blue-500 text-white hover:bg-blue-700 duration-500"
                    >
                        Back Home Page
                    </button>
                </Link>
            </div>
        </div>

    );
};

export default ViewDetails;

