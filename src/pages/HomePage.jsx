import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HomeCard = () => {
  return (
    <div className=" flex flex-col items-center md:flex-row md:space-x-4 bg-background-50 md:bg-white">
      <div className="relative w-24 h-24 md:w-32 md:h-32 overflow-hidden flex-shrink-0 rounded-full mt-3 md:mt-0">
        <img
          className="object-cover w-full h-full absolute top-0 left-1/2 transform -translate-x-1/2 "
          src="./rohit.jpg"
          alt="Profile"
        />
      </div>
      <div className="md:flex-grow">
        <div className="flex bg-background-50">
          <div className=" bg-primary w-3 hidden md:block"></div>
          <div className="ml-3 py-3 pr-3">
            <h2 className="text-xl font-semibold text-center md:text-left">
              Rohit Suratekar
            </h2>
            <p className="mt-2 text-gray-600 italic text-center md:text-left">
              My website is a vibrant canvas of growth, learning, and
              creativity. It&rsquo;s a joyful journey where I embrace evolution,
              share my passions, and celebrate progress 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const homeLinks = useSelector((state) => state.app.homeLinks);
  return (
    <>
      <div className="h-screen grid grid-cols-1 sm:grid-cols-12">
        <div className="hidden sm:block  col-span-2 xl:col-span-3 bg-background-100" />
        <div className="col-span-8 xl:col-span-6 flex flex-col justify-center p-4">
          <HomeCard />

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
