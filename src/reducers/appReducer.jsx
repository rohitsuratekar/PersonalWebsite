import { createSlice } from "@reduxjs/toolkit";
import creditsData from "@/assets/creditsData.json";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    title: "Rohit Suratekar",
    credits: creditsData,
    mainNav: [
      { id: 1, name: "research", url: "/research" },
      { id: 2, name: "technology", url: "/technology" },
      { id: 3, name: "creativity", url: "/creativity" },
      { id: 4, name: "social", url: "/social" },
    ],
    homeLinks: [
      {
        title: "👨‍🔬 Research",
        url: "research",
        details: "Research, publications and projects",
      },
      {
        title: "🧑‍💻 Technology",
        url: "technology",
        details: "Programming, applications and software",
      },
      {
        title: "👨‍🎨 Creativity",
        url: "creativity",
        details: "Photography, sketching and rest",
      },
      {
        title: "🦸‍♂️ Social",
        url: "social",
        details: "Social profiles and miscellaneous",
      },
    ],
  },
});
