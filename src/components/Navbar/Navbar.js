import "./Navbar.scss";
import Sections from "../Sections/Sections";
import { useRef,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas, faBasketShopping ,faXmarkCircle, faBars} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {

  const home = useRef(null);
  const countries = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);

 const[active, setActive] = useState();

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
        <h1>Traveler</h1>
        <div className="navbar__items">
          <ul className="navbar__lists">
            <li className="navbar-item" onClick={()=> scrollToSection(home)}>Home
            </li>
            <li className="navbar-item" onClick={()=> scrollToSection(countries)}>Countries
            </li>
            <li className="navbar-item" onClick={()=> scrollToSection(about)}> About
            </li>
            <li className="navbar-item" onClick={()=> scrollToSection(contact)}>Contact
            </li>
            <button className="basketbtn"><FontAwesomeIcon className="basketicon" icon={faBasketShopping}/></button>
          </ul>
      <div className="closenavbar">
         <FontAwesomeIcon icon={faXmarkCircle}></FontAwesomeIcon>
      </div> 
      <div className="togglenavbar">
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </div>
      </div>
     </header>
     {/*<Sections home={home} about={about} contact={contact} countries={countries}/>*/}
    </div>
  )
}

export default Navbar;