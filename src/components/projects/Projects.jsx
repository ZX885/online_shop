// import { NavLink } from "react-router-dom";
// import "./style.scss";

// const ProjectCard = ({ title, img, index }) => {
//     return (
//         <li data-aos="flip-left" className="project">
//             <NavLink to={`/project/${index}`} className="project__link">
//                 <div  className="project__img-wrapper">
//                     <img src={img} alt={title} className="project__img" />
//                 </div>
//                 <h3 className="project__title">{title}</h3>
//             </NavLink>
//         </li>
//     );
// };

// export default ProjectCard;

import { Link } from 'react-router-dom';
import './style.scss';

const ProjectCard = ({ title, img, skills, index }) => {
    return (
        <li className="project-card" data-aos="fade-up" data-aos-delay={index * 100}>
            <Link to={`/project/${index}`} className="project-card__link">
                <div className="project-card__img-wrapper">
                    <img src={img} alt={title} className="project-card__img" />
                    <div className="project-card__overlay">
                        <span>Смотреть кейс →</span>
                    </div>
                </div>

                <div className="project-card__info">
                    <h3 className="project-card__title">{title}</h3>
                    {skills && <p className="project-card__skills">{skills}</p>}
                </div>
            </Link>
        </li>
    );
};

export default ProjectCard;