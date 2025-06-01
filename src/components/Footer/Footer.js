import './style.css'
// import './style.scss'

// import vk from './../../img/icons/vk.svg'
import gitHub from './../../img/icons/gitHub.svg'
import instagram from './../../img/icons/instagram.svg'
import telegram from './../../img/icons/telegram.svg'
// import twitter from './../../img/icons/twitter.svg'
// import linkedIn from './../../img/icons/linkedIn.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className='footer-link'>
          <ul className='links'>
            {/* <li className='links-item'>
              <h1>Pages</h1>
                <ul>
                  <a href='/'>Page 1</a>
                </ul>
                <ul>
                  <a href='/'>Page 1</a>
                </ul>
                <ul>
                  <a href='/'>Page 1</a>
                </ul>
            </li> */}
            <li className='links-item'>
              <h1>Страницы</h1>
                <ul>
                  <a href='/'>Главная</a>
                </ul>
                <ul>
                  <a href='/projects'>Проекты</a>
                </ul>
                <ul>
                  <a href='/contacts'>Контакты</a>
                </ul>
            </li>
            <li className='links-item'>
              <h1>Связь</h1>
                <ul>
                  <a href='https://t.me/AKM_SHOOT'>Связаться</a>
                </ul>
                <ul>
                  <a href='tel:+998992609264'>Tel</a>
                </ul>
                <ul>
                  <a href='mailto:zarruhzakirov@gmail.com'>Email</a>
                </ul>
            </li>
            <li className='links-item'>
              <h1>Создание</h1>
                <ul>
                  E-commerce
                </ul>
                <ul>
                  Landing page
                </ul>
                <ul>
                  Blog
                </ul>
            </li>
          </ul>
        </div>
        <div className="footer__wrapper">
          <ul className="social">
            {/* <li className="social__item"><a href="#!"><img src={vk} alt="Link" /></a></li> */}
            <li className="social__item">
              <a href="https://www.instagram.com/cyber_ac_of_zx?utm_source=qr&igsh=eWxlZGtqejRsNzYy">
                <img src={instagram} alt="Link" />
              </a>
            </li>
            {/* <li className="social__item"><a href="#!"><img src={twitter} alt="Link" /></a></li> */}
            <li className="social__item tg">
              <a href="https://t.me/AKM_SHOOT">
                <img src={telegram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/ZX885">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            {/* <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link" /></a></li> */}
          </ul>
          <div className="copyright">
            <p>© 2024 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;