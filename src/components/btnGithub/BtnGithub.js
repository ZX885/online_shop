import githubIcon from '../../img/icons/gitHub.svg';
import './style.scss';

const BtnGithub = ({ link }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline btn-github">
            <img src={githubIcon} alt="" className="btn-github__icon" />
            GitHub repo
        </a>
    );
};

export default BtnGithub;
