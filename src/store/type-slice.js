import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";
import TourCard from "../components/TourCard/TourCard";

const typeSlice = createSlice({
  name: "type",
  initialState: {
    isTourType: null,
  },
  reducers: {
    filterData(state, action) {
      state.isTourType = action.payload.type;

      data.isTourType.map((tour) => (
        <TourCard
          id={tour.id}
          image={
            <img
              style={{ objectFit: "contain" }}
              alt="tourimg"
              src={tour.img}
            />
          }
          name={tour.name}
          price={tour.price}
        />
      ));
    },
  },
});
export const typeActions = typeSlice.actions;
export default typeSlice;
