import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "category",
    initialState: {
      isSelectedCategory: false // ilk olarak category seçilmedi
    },
    reducers: {//buraya fonksiyonlar gelir
        selected(state) {
             state.isSelectedCategory = true;
      },
       notselected(state) {
        state.isSelectedCategory = false;
       }
    }
})

export const categoryActions = categorySlice.actions;
export default categorySlice;