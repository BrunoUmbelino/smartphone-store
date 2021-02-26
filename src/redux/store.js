import { configureStore } from "@reduxjs/toolkit";
import storeReducers from "../redux/storeSlice";

export default configureStore({
  reducer: {
    store: storeReducers,
  },
});
