import logo from '../images/krypton.svg'

function Navbar() {
    return (
        <nav className="navbar has-background-krypton">
            <div className="container">
                <div className="navbar-brand">
                    <div className="navbar-start">
                        <a className="navbar-item" href="main.html">
                            <div className="image pr-4">
                                <img src={logo} className='logo' />

                            </div>
                            <p className="title is-4 has-text-white">
                                KRYPTON
                            </p>
                        </a>
                    </div>
                    <div className="links">
                        <div className="navbar-item">
                            <div className="burger-icon">
                                <span className="icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <ul>
                                        <div className="navbar-item">
                                            <li>
                                                <a href="../Token/token.html">
                                                    TOKEN
                                                </a>
                                            </li>
                                        </div>
                                        <div className="navbar-item">
                                            <li>
                                                <a href="../Ico/ico.html">
                                                    ICO
                                                </a>
                                            </li>
                                        </div>
                                        <div className="navbar-item">
                                            <li>
                                                <a href="../Roadmap/roadmap.html">
                                                    RWADMAP
                                                </a>
                                            </li>
                                        </div>
                                        <div className="navbar-item">
                                            <li>
                                                <a href="../Media/media.html">
                                                    MEDIA
                                                </a>
                                            </li>
                                        </div>
                                        <div className="navbar-item">
                                            <li>
                                                <a href="../Media/media.html">
                                                    TELEGRAM
                                                </a>
                                            </li>
                                        </div>
                                        <div className="navbar-item">
                                            <li>
                                                <a href="#">
                                                    <div className="buttons">
                                                        <button className="button has-text-white">
                                                            REGESTIR
                                                        </button>
                                                    </div>
                                                </a>
                                            </li>
                                        </div>
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <ul className="is-flex">
                                <div className="navbar-item">
                                    <li>
                                        <a href="../Token/token.html" className=" has-text-white">
                                            Token
                                        </a>
                                    </li>
                                </div>
                                <div className="navbar-item">
                                    <li>
                                        <a href="../Ico/ico.html" className=" has-text-white">
                                            Ico
                                        </a>
                                    </li>
                                </div>
                                <div className="navbar-item">
                                    <li>
                                        <a href="../Roadmap/roadmap.html" className=" has-text-white">
                                            Roadmap
                                        </a>
                                    </li>
                                </div>
                                <div className="navbar-item">
                                    <li>
                                        <a href="../Media/media.html" className=" has-text-white">
                                            Media
                                        </a>
                                    </li>
                                </div>
                                <div className="navbar-item">
                                    <li>
                                        <a href="../Media/media.html" className=" has-text-white">
                                            Telegram
                                        </a>
                                    </li>
                                </div>
                                <div className="navbar-item">
                                    <li>
                                        <a href="#">
                                            <div className="buttons">
                                                <button className="button has-text-white">
                                                    REGESTIR
                                                </button>
                                            </div>
                                        </a>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar