import foto from "../img/img/f.png";
import "../style/contact.scss"; // Используем .scss для совпадения со всем проектом

const Contacts = () => {
    return (
        <main className="section contacts-section">
            <div className="container">
                <h1 className="title-1" data-aos="fade-down">My <span>Contacts</span></h1>

                <div className="contact__wrapper">
                    {/* Левый блок: Ваше фото / Аватар */}
                    <div className="contact__image-box" data-aos="fade-right">
                        <img src={foto} alt="Zarrukh Zakirov" className="contact__img" />
                        <div className="contact__image-glow"></div>
                    </div>

                    {/* Правый блок: Информационные карточки */}
                    <div className="contact__info">
                        <ul className="content-list">
                            <li className="content-list__item" data-aos="fade-up" data-aos-delay="100">
                                <span className="content-list__icon">👤</span>
                                <div className="content-list__text">
                                    <h2 className="title-2">Full Name</h2>
                                    <p>Zakirov Zarrukh</p>
                                </div>
                            </li>

                            <li className="content-list__item" data-aos="fade-up" data-aos-delay="200">
                                <span className="content-list__icon">📍</span>
                                <div className="content-list__text">
                                    <h2 className="title-2">Location</h2>
                                    <p>Samarkand, Uzbekistan</p>
                                </div>
                            </li>

                            <li className="content-list__item" data-aos="fade-up" data-aos-delay="300">
                                <span className="content-list__icon">📱</span>
                                <div className="content-list__text">
                                    <h2 className="title-2">Telegram / Phone</h2>
                                    <p>
                                        <a href="https://t.me/AKM_SHOOT" target="_blank" rel="noreferrer">
                                            @AKM_SHOOT
                                        </a>
                                        {" • "}
                                        <a href="tel:+998992609264">+998 (99) 260-92-64</a>
                                    </p>
                                </div>
                            </li>

                            <li className="content-list__item" data-aos="fade-up" data-aos-delay="400">
                                <span className="content-list__icon">✉️</span>
                                <div className="content-list__text">
                                    <h2 className="title-2">Email Address</h2>
                                    <p>
                                        <a href="mailto:zarruhzakirov@gmail.com">
                                            zarruhzakirov@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contacts;