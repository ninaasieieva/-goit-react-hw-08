import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  query: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter(state, { payload }) {
      state.query = payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
