import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

import MainLayout from "@/components/MainLayout";
import ResearchPage from "@/pages/ResearchPage";
import HomePage from "@/pages/HomePage";
import TechPage from "@/pages/TechPage";
import CreativePage from "@/pages/CreativePage";
import SocialPage from "@/pages/SocialPage";
import PublicationPage from "@/pages/PublicationPage";
import ConferencePage from "@/pages/ConferencePage";
import ResearchProjectPage from "@/pages/ResearchProjectPage";
import TechProjectPage from "@/pages/TechProjectPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="research" element={<ResearchPage />} />
          <Route path="publications" element={<PublicationPage />} />
          <Route path="conferences" element={<ConferencePage />} />
          <Route path="projects" element={<ResearchProjectPage />} />
          <Route path="technology" element={<TechPage />} />
          <Route
            exact
            path="developer"
            element={<Navigate to="/technology" replace />}
          />
          <Route path="techprojects" element={<TechProjectPage />} />
          <Route path="creativity" element={<CreativePage />} />
          <Route path="social" element={<SocialPage />} />
          <Route exact path="researech" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
