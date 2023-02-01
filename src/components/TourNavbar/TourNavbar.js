import "./TourNavbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase, faPlane, faShip } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { categoryActions } from "../../store/category-slice";
import ShipTour from "../ShipTour/ShipTour";
import AbroadTour from "../AbroadTour/AbroadTour";
import CultureTour from "../CultureTour/CultureTour";
const TourNavbar = () => {

   const dispatch = useDispatch();

  const [shipCategory, setShipCategory] = useState(false);
  const [abroadCategory, setAbroadCategory] = useState(false);
  const [cultureCategory, setCultureCategory] = useState(false);

  const shipBtnClickHandler = () => {
       dispatch(categoryActions.selected());
       setShipCategory(true)

  }

  const abroadBtnClickHandler = () => {
    dispatch(categoryActions.selected());
    setAbroadCategory(true)

   }

   const cultureBtnClickHandler = () => {
  dispatch(categoryActions.selected());
  setCultureCategory(true)

  }


  return (
    <div className="tour-container"> 
    <div className="tour-navbar">
      <button className="tour-navbar__ship" onClick={shipBtnClickHandler}>
        <FontAwesomeIcon icon={faShip}></FontAwesomeIcon>
        <span>Gemi</span>
      </button>
      <button className="tour-navbar__abroad" onClick={abroadBtnClickHandler}>
        <FontAwesomeIcon icon={faPlane}></FontAwesomeIcon>
       <span>Yurtdışı</span>
      </button>

      <button className="tour__culture" onClick={cultureBtnClickHandler}>
        <FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>
       <span>Kültür</span>
      </button>
    </div>
    {shipCategory && <ShipTour/> }
    {abroadCategory && <AbroadTour/> }
    {cultureCategory && <CultureTour/> }
    </div>
  );
};

export default TourNavbar;
