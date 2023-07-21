import { createSlice } from "@reduxjs/toolkit";
import socialData from "@/assets/socialData.json";

export const socialSlice = createSlice({
  name: "social",
  initialState: {
    profiles: socialData["profiles"],
    facts: socialData["facts"],
  },
});
