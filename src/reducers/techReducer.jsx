import { createSlice } from "@reduxjs/toolkit";
import techData from "@/assets/techData.json";

export const techSlice = createSlice({
  name: "tech",
  initialState: {
    focus: techData["focus"],
    languges: techData["languges"],
    langugeSections: techData["langugeSections"],
    quickLinks: techData["quickLinks"],
  },
});
