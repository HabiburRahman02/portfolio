import { Fade } from 'react-awesome-reveal';
import ProjectContainer1 from '../ProjectContainer1/ProjectContainer1';
import ProjectContainerTwo from '../Home/ProjectContainerTwo/ProjectContainerTwo';

const Projects = () => {

    return (
        <Fade>
            <div className="my-16 max-w-[1300px] mx-auto">
                <h1 className="text-5xl dark:text-white font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 text-center">Projects_ </h1>

                {/* first card container start */}
                <ProjectContainer1></ProjectContainer1>
                {/* first card container end */}


                {/* second card container start */}
                <ProjectContainerTwo></ProjectContainerTwo>
                {/* second card container end */}


            </div>
        </Fade>
    );
};

export default Projects;