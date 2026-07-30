import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
import "./../style/home.scss";

const Home = () => {
    // Данные для стека
    const skills = [
        {
            category: "Frontend",
            icon: "💻",
            items: ["JavaScript (ES6+)", "React.js", "Redux Toolkit", "HTML5 / SCSS", "Bootstrap / Tailwind", "REST API Integration"]
        },
        {
            category: "Backend & DB",
            icon: "⚙️",
            items: ["Python", "Django", "Django REST Framework", "Node.js", "PostgreSQL", "RESTful APIs"]
        },
        {
            category: "Cloud & Infrastructure",
            icon: "☁️",
            items: ["AWS (EC2, S3, IAM, VPC, EBS)", "Git / GitHub", "Docker", "Linux Administration"]
        }
    ];

    return (
        <>
            <Header />

            <main className="section home-page">
                <div className="container">
                    
                    {/* СЕКЦИЯ 1: МОЙ СТЕК ТЕХНОЛОГИЙ */}
                    <section className="skills-section">
                        <h2 className="section-title" data-aos="fade-up">
                            Tech <span>Skills</span>
                        </h2>

                        <div className="skills-grid">
                            {skills.map((skillGroup, index) => (
                                <div 
                                    className="skill-card" 
                                    key={skillGroup.category} 
                                    data-aos="fade-up" 
                                    data-aos-delay={index * 150}
                                >
                                    <div className="skill-card__header">
                                        <span className="skill-card__icon">{skillGroup.icon}</span>
                                        <h3 className="skill-card__title">{skillGroup.category}</h3>
                                    </div>
                                    <ul className="skill-card__list">
                                        {skillGroup.items.map((item) => (
                                            <li key={item} className="skill-badge">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* СЕКЦИЯ 2: ИЗБРАННЫЕ ПРОЕКТЫ (ПРОМО-БЛОК) */}
                    <section className="featured-section" data-aos="fade-up">
                        <div className="featured-card">
                            <div className="featured-card__content">
                                <span className="featured-card__badge">Fullstack Showcase</span>
                                <h2>Готов посмотреть мои проекты?</h2>
                                <p>Изучи созданные мной маркетплейсы, сервисы и веб-приложения с интерактивным 3D интерфейсом и надежным бэкендом.</p>
                                <Link to="/projects" className="btn btn--primary">
                                    Перейти к проектам →
                                </Link>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
        </>
    );
};

export default Home;