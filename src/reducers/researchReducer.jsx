import { createSlice } from "@reduxjs/toolkit";
import researchData from '@/assets/researchData.json';
import publicationData from '@/assets/publicationList.json'

export const researchSlice = createSlice({
  name: "research",
  initialState: {
    focus: researchData["focus"],
    quickLinks: researchData["quickLinks"],
    publications: publicationData["publications"],
    workExp: researchData["workExp"],
    education: researchData["education"]
  },
});
