import "./TourNavbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase, faPlane, faShip } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { categoryActions } from "../../store/category-slice";
import { typeActions } from "../../store/type-slice";
const TourNavbar = () => {
  const dispatch = useDispatch();

  const [type, setType] = useState("");

  const shipBtnClickHandler = () => {
    dispatch(categoryActions.selected());
    dispatch(
      typeActions.filterData({
        type,
      })
    );
    setType("ship");
  };

  const abroadBtnClickHandler = () => {
    dispatch(categoryActions.selected());
    dispatch(
      typeActions.filterData({
        type,
      })
    );
    setType("abroad");
  };

  const cultureBtnClickHandler = () => {
    dispatch(categoryActions.selected());
    dispatch(
      typeActions.filterData({
        type,
      })
    );
    setType("culture");
  };

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
    </div>
  );
};

export default TourNavbar;
