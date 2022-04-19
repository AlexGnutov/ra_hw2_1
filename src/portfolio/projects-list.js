import ProjectCard from "./project-card";

function ProjectsList(props) {
    const { projects } = props;
    return (
        <>
            {projects.map(project =>
                <ProjectCard img={project.img} category={project.category}/>
            )}
        </>
    )
}

export default ProjectsList;