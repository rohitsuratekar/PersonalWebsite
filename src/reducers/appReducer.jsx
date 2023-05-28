import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    title: "Rohit Suratekar",
    mainNav: [
      { id: 1, name: "research", url: "/" },
      { id: 2, name: "technology", url: "/technology" },
      { id: 3, name: "creativity", url: "/creativity" },
      { id: 4, name: "social", url: "/social" },
    ],
  },
});
