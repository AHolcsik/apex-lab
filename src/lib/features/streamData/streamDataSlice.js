import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const streamDataSlice = createSlice({
  name: "streamData",
  initialState: {},
  reducers: {
    addStreamData: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { addStreamData } = streamDataSlice.actions;

export default streamDataSlice.reducer;
