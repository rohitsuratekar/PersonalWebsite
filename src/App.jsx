import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import MainLayout from "@/components/MainLayout";
import HomePage from "@/pages/HomePage";
import TechPage from "@/pages/TechPage";
import CreativePage from "@/pages/CreativePage";
import SocialPage from "@/pages/SocialPage";

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="technology" element={<TechPage/>}/>
        <Route path="creativity" element={<CreativePage/>}/>
        <Route path="social" element={<SocialPage/>}/>
        <Route exact path="researech" element={<Navigate to="/" replace/>}/>
        <Route path="*" element={<Navigate to="/" replace/>} />
      </Route>
     </Routes>
    </>
  );
}

export default App;
