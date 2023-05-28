import { createSlice } from "@reduxjs/toolkit";

export const researchSlice = createSlice({
  name: "research",
  initialState: {
    focus:
      "Currently, I am spearheading the development of artificial intelligence models" +
      " for early disease detection using Electronic Health Records, with a primary emphasis" +
      " on rare cardiovascular diseases",
    quickLinks: [
      { icon: "book", title: "Publication List", url: "/" },
      { icon: "microscope", title: "Selected Projects", url: "/creativity" },
      { icon: "globe", title: "Conferences and Talks", url: "/social" },
    ],
  },
});
