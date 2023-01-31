import "./TourNavbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase, faPlane, faShip } from "@fortawesome/free-solid-svg-icons";
const TourNavbar = () => {
  return (
    <div className="tour">
      <button className="tour__ship">
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
