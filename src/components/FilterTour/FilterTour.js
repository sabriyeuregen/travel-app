import data from "../../data.json";
import TourCard from "../TourCard/TourCard";
import { useSelector} from "react-redux";

const FilterTour = () => {

  const dataType = useSelector((state) => state.type.type);

 console.log(dataType.type)

 const filterTour  = data.filter((newData) => newData.type === dataType.type)
  console.log(filterTour)
  const tourList = filterTour.map((tour) => (
    <TourCard
      id={tour.id}
      image={
        <img style={{ objectFit: "contain" }} alt="tourimg" src={tour.img} />
      }
      name={tour.name}
      price={tour.price}
    />
  ));

  
  return <div>
    {tourList}
  </div>;
};

export default FilterTour;
