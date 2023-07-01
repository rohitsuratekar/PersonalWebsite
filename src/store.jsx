import { configureStore } from "@reduxjs/toolkit";
import { researchSlice } from "@/reducers/researchReducer";
import { appSlice } from "@/reducers/appReducer";
import { techSlice } from "@/reducers/techReducer";

const appStore = configureStore({
  reducer: {
    app: appSlice.reducer,
    research: researchSlice.reducer,
    tech: techSlice.reducer,
  },
});
export default appStore;
