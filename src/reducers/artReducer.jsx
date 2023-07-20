import { createSlice } from "@reduxjs/toolkit";
import artData from '@/assets/artData.json';

export const artSlice = createSlice({
  name: "art",
  initialState: {
    background: artData["background"],
    sections: artData["sections"],
    photography: artData["photography"],
    drawing: artData["drawing"],
    digital: artData["digital"],
    writing: artData["writing"],
    cinematography: artData["cinematography"]
  },
});
