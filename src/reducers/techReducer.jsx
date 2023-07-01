import { createSlice } from "@reduxjs/toolkit";
import techData from "@/assets/techData.json";

export const techSlice = createSlice({
  name: "tech",
  initialState: {
    languges: techData["languges"],
    langugeSections: techData["langugeSections"]
  },
});
