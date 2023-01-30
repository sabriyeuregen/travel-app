import "./Tours.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSuitcase, faPlane, faShip} from "@fortawesome/free-solid-svg-icons";
const Tours = () => {
  return (
    <div className="tour">
      <div className="tour__container">
        <div className="tour__container-ship">
            <FontAwesomeIcon icon={faShip}></FontAwesomeIcon>
        </div>
        <div className="tour__container-abroad">
            <FontAwesomeIcon icon={faPlane}></FontAwesomeIcon>
        </div>
        <div className="tour__container-culture">
            <FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  )
}

export default Tours;