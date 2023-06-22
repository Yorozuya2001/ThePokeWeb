import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderBy: {},
  filterBy: {},
  sprite: "home",
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    orderOptions: (state, action) => {
      state.orderBy = action.payload;
    },
    filterOptions: (state, action) => {
      state.filterBy = action.payload;
    },
    spriteOption: (state, action) => {
      state.sprite = action.payload;
    },
  },
});

export const { orderOptions, filterOptions, spriteOption } = orderSlice.actions;
export default orderSlice.reducer;
