import data from "../../data.json";
import TourCard from "../TourCard/TourCard";
const ShipTour = () => {
  const shipTour = data.ship;

  const tourList = shipTour.map((tour) => (
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

export default ShipTour;
