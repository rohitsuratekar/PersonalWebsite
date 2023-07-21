import { createSlice } from "@reduxjs/toolkit";
import artData from "@/assets/artData.json";

export const artSlice = createSlice({
  name: "art",
  initialState: {
    background: artData["background"],
    sections: artData["sections"],
    photography: artData["photography"],
    drawing: artData["drawing"],
    digital: artData["digital"],
    writing: artData["writing"],
    cinematography: artData["cinematography"],
    comics: artData["comics"],
    crumbs: [
      { name: "Photography", link: "/photography" },
      { name: "Sketching", link: "/draw" },
      { name: "Digital", link: "/design" },
      { name: "Writing", link: "/write" },
      { name: "Cinematography", link: "/cinematography" },
      { name: "Comics", link: "/comics" },
    ],
  },
});
