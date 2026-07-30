import { useParams, Link } from 'react-router-dom';
import projects from '../helpers/projectList';
import BtnGithub from "../components/btnGithub/BtnGithub";
import "./../style/project.scss";

const Project = () => {
    const { id } = useParams();
    const project = projects[id];

    // Если проект не найден
    if (!project) {
        return (
            <main className="section project-page">
                <div className="container" style={{ textAlign: 'center', padding: '80px 0' }}>
                    <h2 className="title-1">Проект не найден!</h2>
                    <Link to="/projects" className="btn btn--primary" style={{ marginTop: '20px' }}>
                        ← Назад к проектам
                    </Link>
                </div>
            </main>
        );
    }

    // Превращаем строку навыков в массив для рендера бейджей
    const skillsArray = project.skills ? project.skills.split(',').map(s => s.trim()) : [];

    return (
        <main className="section project-page">
            <div className="container">
                {/* Кнопка навигации назад */}
                <div className="project-page__back">
                    <Link to="/projects" className="back-link">
                        ← Вернуться к проектам
                    </Link>
                </div>

                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>

                    {/* Обложка проекта */}
                    <div className="project-details__cover-wrapper" data-aos="fade-up">
                        <img
                            src={project.imgbig || project.img}
                            alt={project.title}
                            className="project-details__cover"
                        />
                    </div>

                    {/* Описание и стек */}
                    <div className="project-details__info" data-aos="fade-up" data-aos-delay="100">
                        {project.description && (
                            <div className="project-details__text">
                                <h3>О проекте</h3>
                                <p>{project.description}</p>
                            </div>
                        )}

                        <div className="project-details__skills">
                            <h3>Используемые технологии</h3>
                            <div className="skills-tags">
                                {skillsArray.map((skill, index) => (
                                    <span key={index} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Кнопки действий (GitHub + Live Demo) */}
                        <div className="project-details__links">
                            {project.githubLink && (
                                <BtnGithub link={project.githubLink} />
                            )}

                            {project.demoLink && (
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn--live"
                                >
                                    🌐 Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Project;