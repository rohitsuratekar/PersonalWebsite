import { useSelector } from "react-redux";
import { Chip } from "@/components/CommonComponents";
import AppIcons from "@/components/IconLibrary";

const ProjectItem = ({ item }) => {
  const gotoURL = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="px-8 bg-background-50 p-3 shadow-sm flex flex-col">
        <div className="flex flex-row align-middle  items-center">
          <div className="h-6 w-6 fill-background group-hover:fill-primary">
            <AppIcons icon={item.platform} />
          </div>
          <div className="mt-1 ml-2">{item.title}</div>
        </div>

        <div className="flex flex-row space-x-2 my-2">
          {item.languages.map((elm, index) => (
            <Chip text={elm} key={index} />
          ))}
        </div>
        <div className="text-xs text-background-900 mb-2">{item.desc}</div>
        <div className="grow  grid grid-cols-3 ">
          <div className=" col-start-3 flex  items-end group">
            <div
              className="text-xs bg-background-100 w-full p-1 cursor-pointer group-hover:bg-background flex flex-row items-center"
              onClick={() => gotoURL(item.link)}
            >
              <div className="h-4 w-4 fill-link group-hover:fill-background-50">
                <AppIcons icon="linkout" />
              </div>
              <div className="ml-2 group-hover:text-background-50 text-link">
                {item.button}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TechProjectPage = () => {
  const selector = useSelector((state) => state.tech);
  return (
    <>
      <div className="p-5 grid grid-cols-1">
        <div className="text-xs text-secondary mb-2">
          Selected Developed Project
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {selector.projects.map((item, index) => (
            <ProjectItem key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TechProjectPage;
