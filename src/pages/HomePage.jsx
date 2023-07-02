import { Link } from "react-router-dom";

const HomePage = () => {
    const homeLinks = [
        {"title":"Explore Research 📚", url: "research"},
        {"title":"Unleash Technology 💻", url: "technology"},
        {"title":"Ignite Creativity 🎨", url: "creativity"},
        {"title":"Connect Social 🌐", url: "social"}
    ]
  return (
    <>
      <div className="h-screen grid grid-cols-1 sm:grid-cols-12">
        <div className="hidden sm:block  col-span-2 xl:col-span-3" />
        <div className="col-span-8 xl:col-span-6 flex flex-col justify-center p-4">
          <div className="flex">
            <div className=" bg-primary w-3"></div>
            <div className="ml-3">
              <span className="italic ">
                Embracing growth and evolution, my personal website becomes the
                canvas of my journey, celebrating the power of continuous
                learning, progress, and unwavering accountability to showcase
                the very best version of myself and my work.
              </span>{" "}
              {"  "}
              <span className="font-medium font-sans">- Rohit Suratekar</span>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-4">
            {
                
            }
          </div>
        </div>
        <div className="hidden sm:block  col-span-2 xl:col-span-3" />
      </div>
    </>
  );
};

export default HomePage;
