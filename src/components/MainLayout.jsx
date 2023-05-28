import { Outlet } from "react-router-dom";
import MainNavBar from "@/components/MainNavBar";
import Header from "@/components/Header";

const MainLayout = () => {
  return (
    <>
      <div className="h-screen grid grid-cols-1 sm:grid-cols-12">
        <div className="hidden sm:block bg-background-100 col-span-2" />
        <div className="col-span-8">
          <Header />
          <MainNavBar />
          <Outlet />
        </div>
        <div className="hidden sm:block bg-background-100 col-span-2" />
      </div>
    </>
  );
};

export default MainLayout;
