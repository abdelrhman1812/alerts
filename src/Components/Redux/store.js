import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";

const store = configureStore({
  reducer: {
    allData: dataSlice,
  },
});

export default store;
