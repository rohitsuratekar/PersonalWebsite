import pcrImg from "@/assets/design/pcr.jpg";
import archiveImg from "@/assets/design/archive.jpg";
import archive_largeImg from "@/assets/design/archive_large.jpg";
import developImg from "@/assets/design/develop.jpg";
import pip2Img from "@/assets/design/pip2_small.png";
import pip2_largeImg from "@/assets/design/pip2.png";
import poster_smallImg from "@/assets/design/poster_small.jpg";
import posterImg from "@/assets/design/poster.jpg";
import malariaImg from "@/assets/design/malaria.jpg";
import iisc_3dImg from "@/assets/design/iisc_3d.jpg";
import flyImg from "@/assets/design/fly.jpg";
import stickImg from "@/assets/design/stick.jpg";
import shreeImg from "@/assets/design/shree.jpg";
import compImg from "@/assets/design/comp.jpg";
import comp_largeImg from "@/assets/design/comp_large.jpg";
import cccpImg from "@/assets/design/cccp.jpg";
import msImg from "@/assets/design/ms.jpg";
import ms_largeImg from "@/assets/design/ms_large.png";
import annual_talkImg from "@/assets/design/annual_talk.jpg";
import colorsImg from "@/assets/design/colors.jpg";
import colors_largeImg from "@/assets/design/colors_large.jpg";
import musicImg from "@/assets/design/music.jpg";
import fishImg from "@/assets/design/fish.jpg";
import oddisiImg from "@/assets/design/oddisi.jpg";
import inforgraphicsImg from "@/assets/design/inforgraphics.jpg";
import conflictImg from "@/assets/design/conflict.jpg";
import sympoteinImg from "@/assets/design/sympotein.jpg";
import brainImg from "@/assets/design/brain.jpg";
import brain_largeImg from "@/assets/design/brain_large.jpg";

const allDigitalArt = [
  {
    t: "PCR Noodles",
    i: pcrImg,
    d: "My imagination of how PCR will look like if it was cooking recipe.",
    k: ["Animation"],
    l: "Check on Youtube",
    h: "https://www.youtube.com/watch?v=vdASAvlreZg",
  },
  {
    t: "Archive Concept Art",
    i: archiveImg,
    d: "Unfinished concept art I made for NCBS archives.",
    k: ["Poster Design", "Illustration"],
    l: "Check It Out",
    h: archive_largeImg,
  },
  {
    t: "Single cell to being us ",
    i: developImg,
    d: "Human embryo development explained with clay stop motion.",
    k: ["Animation"],
    l: "Check on Youtube",
    h: "https://www.youtube.com/watch?v=3WHdpnrcq5I",
  },
  {
    t: "Mathematical Modelling",
    i: pip2Img,
    d: "Poster I made for news and outreach about my paper which deals with mathematical modelling.",
    k: ["Poster Design", "Illustration"],
    l: "Check It Out",
    h: pip2_largeImg,
  },
  {
    t: "Research Poster",
    i: poster_smallImg,
    d: "My PhD research explained in the form of comic strip.",
    k: ["Poster Design", "Illustration"],
    l: "Check It Out",
    h: posterImg,
  },

  {
    t: "The journey of Malarial Parasite",
    i: malariaImg,
    d: "Simple stop motion video explaining how malarial parasite infect human body. ",
    k: ["Animation"],
    l: "Check on Youtube",
    h: "https://www.youtube.com/watch?v=B9-SjKAaHdg",
  },
  {
    t: "IISc building",
    i: iisc_3dImg,
    d: "Trying out newly learned 3D modelling technique with the help of Blender.",
    k: ["3D Modelling"],
    l: "Check It Out",
    h: iisc_3dImg,
  },
  {
    t: "Fly and the Machine",
    i: flyImg,
    d: "Hybrid illustration of Drosophila.",
    k: ["Illustration"],
    l: "Check on Behance",
    h: "https://www.behance.net/gallery/56252027/Fly-and-the-Machine",
  },
  {
    t: "StickMan Project",
    i: stickImg,
    d: "When stick figure enters your computer and tries to read your manuscript.",
    k: ["Animation"],
    l: "Check on Youtube",
    h: "https://www.youtube.com/watch?v=-5cFvNMAvig",
  },
  {
    t: "Shree 420",
    i: shreeImg,
    d: "Recreating very famous bollywood movie poster of Shree 420.",
    k: ["Photoshop"],
    l: "Check on Youtube",
    h: "https://www.youtube.com/watch?v=MsK1QLoFMHA",
  },
  {
    t: "Biology and Computer Science",
    i: compImg,
    d: "Paper art illusion created for Conference poster about Biology and Computer Science.",
    k: ["Poster Design"],
    l: "Check It Out",
    h: comp_largeImg,
  },
  {
    t: "CCCP",
    i: cccpImg,
    d: "Retro poster design for Conference on Conflict and Cooperation in biology.",
    k: ["Poster Design"],
    l: "Check on Behance",
    h: "https://www.behance.net/gallery/38219193/Conference-Poster-(CCCP-2016)",
  },
  {
    t: "M S Subbulakshmi",
    i: msImg,
    d: "Low poly art made for the poster of M S Subbulakshmi Music Concert.",
    k: ["Illustration", "Poster Design"],
    l: "Check It Out",
    h: ms_largeImg,
  },
  {
    t: "Biology Across Scales",
    i: annual_talkImg,
    d: "Promotional animation video made for annual NCBS meeting.",
    k: ["Animation"],
    l: "Check on Youtube",
    h: "https://www.youtube.com/watch?v=yrqNBJ27-oM",
  },
  {
    t: "Colors of India",
    i: colorsImg,
    d: "Poster designed for dance program highlighting diversity in Indian culture.",
    k: ["Poster Design"],
    l: "Check It Out",
    h: colors_largeImg,
  },
  {
    t: "Introducing Music Club",
    i: musicImg,
    d: "Poster made for introduction of Music Club at NCBS",
    k: ["Poster Design"],
    l: "Check on Behance",
    h: "https://www.behance.net/gallery/29339017/Music-Club",
  },
  {
    t: "Fish eat fish",
    i: fishImg,
    d: "Stop motion video made for NCBS student event Sympotein.",
    k: ["Animation"],
    l: "Check on Youtube",
    h: "https://www.youtube.com/watch?v=c56Q-0sq6Jk",
  },
  {
    t: "Illustrator Workflow",
    i: oddisiImg,
    d: "Creating dancer silhouette from scratch. A workflow in Adobe Illustrator.",
    k: ["Illustration"],
    l: "Check on Youtube",
    h: "https://www.youtube.com/watch?v=Ypc7q7BXMmU",
  },
  {
    t: "Science Infographics",
    i: inforgraphicsImg,
    d: "Infographics explaining my PhD model system.",
    k: ["Infographics"],
    l: "Check on Behance",
    h: "https://www.behance.net/gallery/32209123/Science-Infographics",
  },
  {
    t: "Conflict",
    i: conflictImg,
    d: "Illustration from word cloud for student driven event.",
    k: ["Poster Design"],
    l: "Check on Behance",
    h: "https://www.behance.net/gallery/40952607/Event-Poster-Conflict",
  },
  {
    t: "Sympotein",
    i: sympoteinImg,
    d: "My very first stop motion animation.",
    k: ["Animation"],
    l: "Check on Youtube",
    h: "https://www.youtube.com/watch?v=4NT872l8APQ",
  },
  {
    t: "Music and the Brain",
    i: brainImg,
    d: "Poster designed for the scientific symposium on Music and the Brain.",
    k: ["Poster Design", "Photoshop"],
    l: "Check It Out",
    h: brain_largeImg,
  },
];

export default allDigitalArt;
