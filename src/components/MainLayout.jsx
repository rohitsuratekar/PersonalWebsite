import { Outlet } from "react-router-dom";
import MainNavBar from "@/components/MainNavBar";
import MainHeader from "@/components/MainHeader";
import { useLocation } from "react-router-dom";
import MainFooter from "@/components/MainFooter";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SubNavBar from "@/components/SubNavBar";

const MainLayout = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const selector = useSelector((state) => state.app);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {location.pathname !== "/" && (
        <div className="h-screen grid grid-cols-1 sm:grid-cols-12">
          <div className="hidden sm:block bg-background-100 col-span-2 xl:col-span-3" />
          <div className="col-span-8 xl:col-span-6 flex flex-col bg-white">
            <div
              className={`${
                isSticky ? "sticky top-0 bg-white shadow-lg" : "relative"
              } z-10`}
            >
              <MainHeader />
              <MainNavBar />
              {selector.currentCrumbs && (
                <SubNavBar itemList={selector.currentCrumbs} />
              )}
            </div>
            <Outlet />
            <div className="flex-grow"></div>
            <MainFooter />
          </div>
          <div className="hidden sm:block bg-background-100 col-span-2 xl:col-span-3" />
        </div>
      )}
      {location.pathname === "/" && (
        <div className="bg-white">
          <Outlet />
        </div>
      )}
    </>
  );
};

export default MainLayout;
