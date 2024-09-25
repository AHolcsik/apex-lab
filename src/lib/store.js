import { configureStore } from "@reduxjs/toolkit";
import streamDataReducer from "./features/streamData/streamDataSlice";

export const store = () => {
  return configureStore({
    reducer: {
      streamData: streamDataReducer,
    },
  });
};
