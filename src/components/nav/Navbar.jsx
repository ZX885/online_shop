import { NavLink } from 'react-router-dom';
import './style.scss';

const Navbar = () => {
    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

    return (
        <>
            {/* Верхняя шапка для ПК и логотипа/темной темы на мобилках */}
            <nav className="nav">
                <div className="container">
                    <div className="nav-row">
                        <NavLink to="/" className="logo">
                            <strong>Zarrukh</strong> portfolio
                        </NavLink>


                        {/* Навигация для Десктопа */}
                        <ul className="nav-list desktop-nav">
                            <li className="nav-list__item">
                                <NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-list__item">
                                <NavLink to="/projects" className={({ isActive }) => isActive ? activeLink : normalLink}>
                                    Projects
                                </NavLink>
                            </li>
                            <li className="nav-list__item">
                                <NavLink to="/contacts" className={({ isActive }) => isActive ? activeLink : normalLink}>
                                    Contacts
                                </NavLink>
                            </li>
                            <li className="nav-list__item connect">
                                <a href="https://t.me/AKM_SHOOT" target="_blank" rel="noreferrer" className="nav-list__link">
                                    Telegram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Мобильная нижняя навигация (Floating Bottom Dock) */}
            <nav className="mobile-bottom-nav">
                <NavLink to="/" className={({ isActive }) => isActive ? "mobile-nav__item active" : "mobile-nav__item"}>
                    <svg className="mobile-nav__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span>Home</span>
                </NavLink>

                <NavLink to="/projects" className={({ isActive }) => isActive ? "mobile-nav__item active" : "mobile-nav__item"}>
                    <svg className="mobile-nav__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    <span>Projects</span>
                </NavLink>

                <NavLink to="/contacts" className={({ isActive }) => isActive ? "mobile-nav__item active" : "mobile-nav__item"}>
                    <svg className="mobile-nav__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>Contacts</span>
                </NavLink>

                <a href="https://t.me/AKM_SHOOT" target="_blank" rel="noreferrer" className="mobile-nav__item tg-link">
                    <svg className="mobile-nav__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                    <span>Chat</span>
                </a>
            </nav>
        </>
    );
};

export default Navbar;