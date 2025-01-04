import { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import ProjectCard from './ProjectCard';
import { Fade } from 'react-awesome-reveal';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    console.log(projects);
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProjects(data)
            })
    }, [])

    return (
        <div className="my-16 lg:my-24 max-w-[1300px] mx-auto">
            <SectionTitle title='Projects_'></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8 mx-6 md:mx-0'>
                {
                    projects.map(project => <Fade
                        key={project.id}
                        duration={1000}
                        triggerOnce
                        direction='up'>
                        <ProjectCard
                            project={project}
                        ></ProjectCard>
                    </Fade>)
                }
            </div>
        </div>
    );
};

export default Projects;