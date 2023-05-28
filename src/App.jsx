import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import MainLayout from "@/components/MainLayout";
import ResearchPage from "@/pages/ResearchPage";
import TechPage from "@/pages/TechPage";
import CreativePage from "@/pages/CreativePage";
import SocialPage from "@/pages/SocialPage";
import researchStore from "@/stores/ResearchStore";
import { Provider } from "mobx-react";

function App() {
  return (
    <>
    <Provider researchStore={researchStore}>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<ResearchPage/>}/>
        <Route path="technology" element={<TechPage/>}/>
        <Route exact path="developer" element={<Navigate to="/technology" replace/>}/>
        <Route path="creativity" element={<CreativePage/>}/>
        <Route path="social" element={<SocialPage/>}/>
        <Route exact path="researech" element={<Navigate to="/" replace/>}/>
        <Route path="*" element={<Navigate to="/" replace/>} />
      </Route>
     </Routes>
    </Provider>
    </>
  );
}

export default App;
