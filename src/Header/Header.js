import './Header.scss';
import logo from "../assets/images/logo.png";
import toggleImg from "../svg/toggle-menu.svg";

const Header = () => {

    return (
        <>
            {/* <!-- header starts here --> */}
            <div className='bg-white'>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg navbar-insta">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                                aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"><img src={toggleImg} /></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                                <a className="navbar-brand" href="#">
                                    <img src={logo} />
                                </a>
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Discover</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Search</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Try Instaread</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Login
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="#">Option1</a></li>
                                            <li><a className="dropdown-item" href="#">Option2</a></li>
                                            <li><a className="dropdown-item" href="#">Option3</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            {/* <!-- header ends here --> */}
        </>
    )
}
export default Header