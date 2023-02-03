import "./TourNavbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase, faPlane, faShip } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { typeActions } from "../../store/type-slice";
const TourNavbar = () => {
  const dispatch = useDispatch();

  const shipBtnClickHandler = () => {
    dispatch(
      typeActions.filterData({
        type:"ship"
      })
    );
  };
 
  const abroadBtnClickHandler = () => {
    dispatch(
      typeActions.filterData({
        type:"abroad"
      })
    );
    
  };

  const cultureBtnClickHandler = () => {
    dispatch(
      typeActions.filterData({
        type:"culture"
      })
    );

  };

  return (
    <div className="tour-container" id="tours">
      <div className="tour-navbar">
        <button className="tour-navbar__ship" onClick={shipBtnClickHandler}>
          <FontAwesomeIcon icon={faShip}></FontAwesomeIcon>
          <span>Gemi</span>
        </button>
        <button className="tour-navbar__abroad" onClick={abroadBtnClickHandler}>
          <FontAwesomeIcon icon={faPlane}></FontAwesomeIcon>
          <span>Yurtdışı</span>
        </button>

        <button className="tour-navbar__culture" onClick={cultureBtnClickHandler}>
          <FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>
          <span>Kültür</span>
        </button>
      </div>
    </div>
  );
};

export default TourNavbar;
