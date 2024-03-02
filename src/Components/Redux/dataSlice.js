import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../Assets/TableData/tabledata";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    alldata: data,
    returnData: data,
  },
  reducers: {
    //   Fillter Data
    filterData: function (state, action) {
      state.alldata = state.returnData.filter(
        (item) => item.risk === action.payload.riskLevel
      );

      console.log(state.alldata);
    },

    //   Return Data
    returnDat: function (state) {
      state.alldata = state.returnData;
      console.log(state.alldata);
    },
  },
});

export default dataSlice.reducer;
export const { filterData, returnDat } = dataSlice.actions;
