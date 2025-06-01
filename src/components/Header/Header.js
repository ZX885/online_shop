import "./style.css"

const Header = () => {
    return (
        <>
            <header className="header">
            {/* <div className="boxes">
                <spline-viewer className="boxes" url="https://prod.spline.design/mkWsCRi7AycfuTU6/scene.splinecode">
                </spline-viewer>
            </div> */}
                <div className="header__wrapper">
                    <h1 className="header__title">
                        <strong>Hello world, меня завут <em>Заррух</em></strong><br />
                        Fullstack разработчик
                    </h1>

                    {/* <div className="header__text">
                        <p>со страстью учиться и творить.</p>
                    </div> */}

                    {/* <a href="#!" className="btn">Download CV</a> */}
                </div>
            </header>
            
        </>
    );
}

export default Header;