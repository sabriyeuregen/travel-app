import "./Navbar.scss";
import { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmericas,
  faBasketShopping,
  faXmarkCircle,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <div className="logo-container">
        <FontAwesomeIcon size="20px" icon={faEarthAmericas}></FontAwesomeIcon>
        <span>Traveller</span>
      </div>
      <nav className={showNav ? "mobile-show" : ""}>
        <div className="navbar-item">
          <ul>
            <li><Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>Anasayfa</Link></li>
            <li><Link activeClass="active" to="tours" spy={true} smooth={true} offset={50} duration={500}>Turlar</Link></li>
            <li><Link activeClass="active" to="aboutus" spy={true} smooth={true} offset={50} duration={500}>Hakkımızda</Link></li>
            <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>İletişim</Link></li>
            <button className="basketbtn">
              <FontAwesomeIcon className="basketicon" icon={faBasketShopping} />
            </button>
          </ul>
        </div>
        <FontAwesomeIcon
          className="close-icon"
          icon={faXmarkCircle}
          onClick={() => setShowNav(false)}
        ></FontAwesomeIcon>
      </nav>
      <FontAwesomeIcon
        className="hamburger-icon"
        icon={faBars}
        onClick={() => setShowNav(true)}
      ></FontAwesomeIcon>
    </div>
  );
};

export default Navbar;
