import { Outlet } from "react-router-dom";
import MainNavBar from "@/components/MainNavBar";
import MainHeader from "@/components/MainHeader";

const MainLayout = () => {
  return (
    <>
      <div className="h-screen grid grid-cols-1 sm:grid-cols-12">
        <div className="hidden sm:block bg-background-100 col-span-2 xl:col-span-3" />
        <div className="col-span-8 xl:col-span-6">
          <MainHeader />
          <MainNavBar />
          <Outlet />
        </div>
        <div className="hidden sm:block bg-background-100 col-span-2 xl:col-span-3" />
      </div>
    </>
  );
};

export default MainLayout;