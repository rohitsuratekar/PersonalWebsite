import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {
  const homeLinks = useSelector((state) => state.app.homeLinks);
  return (
    <>
      <div className="h-screen grid grid-cols-1 sm:grid-cols-12">
        <div className="hidden sm:block  col-span-2 xl:col-span-3 bg-background-100" />
        <div className="col-span-8 xl:col-span-6 flex flex-col justify-center p-4">
          <div className="mt-5 text-xs text-background">Why this website?</div>
          <div className="flex bg-background-50 mt-5">
            <div className=" bg-primary w-3"></div>
            <div className="ml-3 py-3 pr-3">
              <span className="italic">
                Embracing growth and evolution, my personal website is the
                canvas of my journey, celebrating the power of continuous
                learning, progress, and unwavering accountability to showcase
                the very best version of myself and my work.
              </span>
            </div>
          </div>
          <div className="mt-5 text-xs text-background">
            Explore my work in following sections
          </div>
          <div className="mt-3 grid grid-cols-1 xl:grid-cols-2">
            {homeLinks.map((item, index) => (
              <Link to={item.url} key={index}>
                <span className=" text-link cursor-pointer text-center whitespace-normal md:whitespace-pre-line lg:whitespace-normal">
                  {item.title}
                </span>
                {"  "}
                <span className=" text-sm text-background-900">
                  - {item.details}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden sm:block  col-span-2 xl:col-span-3 bg-background-100" />
      </div>
    </>
  );
};

export default HomePage;
