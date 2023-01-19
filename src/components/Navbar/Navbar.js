import "./Navbar.scss";
import Sections from "../Sections/Sections";
import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {

  const home = useRef(null);
  const countries = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="navbar">
      <header className="header">
        <div className="logo"><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon></div>
        <nav>
          <ul className="nav__links">
            <li onClick={()=> scrollToSection(home)}>Home
            </li>
            <li onClick={()=> scrollToSection(countries)}>Countries
            </li>
            <li onClick={()=> scrollToSection(about)}> About
            </li>
            <li onClick={()=> scrollToSection(contact)}>Contact
            </li>
          </ul>
        </nav>
     </header>
     <Sections home={home} about={about} contact={contact} countries={countries}/>
    </div>
  )
}

export default Navbar;