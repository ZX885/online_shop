import foto from "../img/img/f.png"
import "../style/contact.css"

const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Контакты</h1>

                <div className="contact">
                    <div className="con-div1">
                        <img data-aos="fade-right" src={foto} ></img>
                    </div>

                    <div className="con-div2">
                        <ul className="content-list">
                            <li className="content-list__item">
                                <h2 className="title-2">Ф.И.О</h2>
                                <p>Закиров Заррух</p>
                            </li>
                            <li className="content-list__item">
                                <h2 className="title-2">Локация</h2>
                                <p>Самарканд, Узбекистан</p>
                            </li>
                            <li className="content-list__item">
                                <h2 className="title-2">Telegram / WhatsApp</h2>
                                <p><a href="tel:+998992609264">+998 (99) 260-92-64</a></p>
                            </li>
                            <li className="content-list__item">
                                <h2 className="title-2">Эл. почта</h2>
                                <p><a href="mailto:zarruhzakirov@gmail.com">zarruhzakirov@gmail.com</a></p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Contacts;