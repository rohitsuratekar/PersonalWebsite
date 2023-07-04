import { createSlice } from "@reduxjs/toolkit";
import artData from '@/assets/artData.json';

export const artSlice = createSlice({
  name: "art",
  initialState: {
    sections: artData["sections"],
  },
});
