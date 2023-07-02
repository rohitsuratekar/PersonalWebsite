import { Outlet } from "react-router-dom";
import MainNavBar from "@/components/MainNavBar";
import MainHeader from "@/components/MainHeader";
import { useNavigate, useLocation } from "react-router-dom";

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && (
        <div className="h-screen grid grid-cols-1 sm:grid-cols-12">
          <div className="hidden sm:block bg-background-100 col-span-2 xl:col-span-3" />
          <div className="col-span-8 xl:col-span-6">
            <MainHeader />
            <MainNavBar />
            <Outlet />
          </div>
          <div className="hidden sm:block bg-background-100 col-span-2 xl:col-span-3" />
        </div>
      )}
      {location.pathname === "/" && <Outlet />}
    </>
  );
};

export default MainLayout;
