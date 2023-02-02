import { configureStore } from "@reduxjs/toolkit";
import typeSlice from "./type-slice";
import categorySlice from "./category-slice";

const store = configureStore ({
    reducer : {category: categorySlice.reducer, type: typeSlice.reducer}
})
export default store;