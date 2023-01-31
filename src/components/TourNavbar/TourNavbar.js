import "./TourNavbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase, faPlane, faShip } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const TourNavbar = () => {

  //burası için redux yada context api lazım
  const [showCategory, setShowCategory] = useState(false);

  const buttonClickHandler = () => {
       setShowCategory(true)
  }

  return (
    <div className="tour">
      <button className="tour__ship" onClick={buttonClickHandler}>
        <FontAwesomeIcon icon={faShip}></FontAwesomeIcon>
        <span>Gemi</span>
      </button>
      <button className="tour__abroad">
        <FontAwesomeIcon icon={faPlane}></FontAwesomeIcon>
       <span>Yurtdışı</span>
      </button>

      <button className="tour__culture">
        <FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>
       <span>Kültür</span>
      </button>
    </div>
  );
};

export default TourNavbar;
