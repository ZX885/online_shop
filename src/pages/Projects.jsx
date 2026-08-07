import { useState } from 'react';
import ProjectCard from "../components/projects/Projects";
import projects from "../helpers/projectList.js";
import "./../style/projects.scss";

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Python', 'React', 'Frontend', 'Backend', 'Fullstack'];

    const filteredProjects = projects.filter((project) => {
        if (filter === 'All') return true;

        const category = project.category || '';
        const skills = project.skills || '';
        const term = filter.toLowerCase();

        if (category.toLowerCase() === term) return true;
        return skills.toLowerCase().includes(term);
    });

    return (
        <main className="section projects-page">
            <div className="container">
                <h1 className="title-1" data-aos="fade-down">
                    My <span>Projects</span>
                </h1>

                <div className="projects__filters" data-aos="fade-up">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            type="button"
                            className={`filter-btn ${filter === cat ? 'filter-btn--active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <ul className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            img={project.img}
                            skills={project.skills}
                            index={index}
                        />
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default Projects;
