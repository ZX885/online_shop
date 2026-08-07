import { Link } from 'react-router-dom';
import './style.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__blur-shape shape-1"></div>
            <div className="header__blur-shape shape-2"></div>
            <div className="header__blur-shape shape-3"></div>

            <div data-aos="zoom-out-down" className="container">
                <div className="header__wrapper">
                    <h1 className="header__title">
                        Hi, I'm <em>Zarrukh</em>
                        <span className="header__subtitle">Fullstack Developer & Web Architect</span>
                    </h1>

                    <div className="header__text">
                        <p>Создаю высокопроизводительные веб-приложения с современным UI и надежным бэкендом.</p>
                    </div>

                    <div className="header__btns">
                        <Link to="/projects" className="btn btn--primary">
                            Смотреть проекты
                        </Link>
                        <a href="https://t.me/AKM_SHOOT" target="_blank" rel="noreferrer" className="btn btn--outline">
                            Связаться
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
