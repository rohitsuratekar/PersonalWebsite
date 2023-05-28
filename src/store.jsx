import { configureStore } from "@reduxjs/toolkit";
import { researchSlice } from "@/reducers/researchReducer";
import { appSlice } from "@/reducers/appReducer";

const appStore = configureStore({
  reducer: {
    app: appSlice.reducer,
    research: researchSlice.reducer,
  },
});
export default appStore;
