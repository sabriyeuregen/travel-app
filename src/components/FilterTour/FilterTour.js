import data from "../../data.json";
import TourCard from "../TourCard/TourCard";
import { useSelector } from "react-redux";
import "./FilterTour.scss";

const FilterTour = () => {
  const dataType = useSelector((state) => state.type.type);

  const filterTour = data.filter((newData) => newData.type === dataType.type);

  const tourList = filterTour.map((tour) => (
    <TourCard
      id={tour.id}
      image={
        <img
          style={{ objectFit: "contain" }}
          alt="tourimg"
          src={tour.img}
          width="300"
          height="300"
        />
      }
      name={tour.name}
      price={tour.price}
    />
  ));

  return <div className="filter-tour">
     {tourList}
    </div>;
};

export default FilterTour;
