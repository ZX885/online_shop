import { Link } from 'react-router-dom';
import gitHub from './../../img/icons/gitHub.svg';
import instagram from './../../img/icons/instagram.svg';
import telegram from './../../img/icons/telegram.svg';
import './style.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    {/* Колонка 1: Навигация */}
                    <div className="footer__col">
                        <h4 className="footer__title">Navigation</h4>
                        <ul className="footer__list">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contacts">Contacts</Link></li>
                        </ul>
                    </div>

                    {/* Колонка 2: Контакты */}
                    <div className="footer__col">
                        <h4 className="footer__title">Contacts</h4>
                        <ul className="footer__list">
                            <li>
                                <a href="https://t.me/AKM_SHOOT" target="_blank" rel="noreferrer">
                                    Telegram
                                </a>
                            </li>
                            <li>
                                <a href="tel:+998992609264">+998 (99) 260-92-64</a>
                            </li>
                            <li>
                                <a href="mailto:zarruhzakirov@gmail.com">Email</a>
                            </li>
                        </ul>
                    </div>

                    {/* Колонка 3: Специализация */}
                    <div className="footer__col">
                        <h4 className="footer__title">Services</h4>
                        <ul className="footer__list footer__list--static">
                            <li>E-commerce</li>
                            <li>Landing page</li>
                            <li>Web Apps</li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    {/* Социальные сети */}
                    <ul className="social">
                        <li className="social__item">
                            <a href="https://www.instagram.com/cyber_ac_of_zx?utm_source=qr&igsh=eWxlZGtqejRsNzYy" target="_blank" rel="noreferrer" aria-label="Instagram">
                                <img src={instagram} alt="Instagram" />
                            </a>
                        </li>
                        <li className="social__item tg">
                            <a href="https://t.me/AKM_SHOOT" target="_blank" rel="noreferrer" aria-label="Telegram">
                                <img src={telegram} alt="Telegram" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://github.com/ZX885" target="_blank" rel="noreferrer" aria-label="GitHub">
                                <img src={gitHub} alt="GitHub" />
                            </a>
                        </li>
                    </ul>

                    {/* Копирайт */}
                    <div className="copyright">
                        <p>© {new Date().getFullYear()} Zarrukh Zakirov. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;