import { configureStore } from "@reduxjs/toolkit";
import { researchSlice } from "@/reducers/researchReducer";
import { appSlice } from "@/reducers/appReducer";
import { techSlice } from "@/reducers/techReducer";
import { artSlice } from "@/reducers/artReducer";

const appStore = configureStore({
  reducer: {
    app: appSlice.reducer,
    research: researchSlice.reducer,
    tech: techSlice.reducer,
    art: artSlice.reducer
  },
});
export default appStore;
