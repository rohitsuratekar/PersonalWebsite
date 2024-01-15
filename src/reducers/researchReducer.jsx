import { createSlice } from "@reduxjs/toolkit";
import researchData from "@/assets/researchData.json";
import publicationData from "@/assets/publicationList.json";

export const researchSlice = createSlice({
  name: "research",
  initialState: {
    focus: researchData["focus"],
    quickLinks: researchData["quickLinks"],
    publications: publicationData["publications"],
    patents: publicationData["patents"],
    workExp: researchData["workExp"],
    education: researchData["education"],
    conference: researchData["conference"],
    projects: researchData["projects"],
    skills: researchData["skills"],
    tools: researchData["tools"],
    additionalConference: researchData["additionalConference"],
    crumbs: [
      { name: "Publication List", link: "/publications" },
      { name: "Skills and Work", link: "/projects" },
      { name: "Conferences", link: "/conferences" },
    ],
  },
});
