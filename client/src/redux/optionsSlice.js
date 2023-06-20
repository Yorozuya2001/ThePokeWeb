import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderBy: {},
  filterBy: {},
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
  },
});

export const { orderOptions, filterOptions } = orderSlice.actions;
export default orderSlice.reducer;
