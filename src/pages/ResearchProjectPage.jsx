import { useSelector, useDispatch } from "react-redux";
import { changeCrumbs } from "@/reducers/appReducer";
import { useEffect } from "react";
import AppIcons from "@/components/IconLibrary";
import { Chip } from "@/components/CommonComponents";

const KeyHolder = ({ items }) => {
  return (
    <>
      <div className="mr-2 flex flex-row items-center gap-1">
        {items.map((item, index) => (
          <Chip key={index} text={item} />
        ))}
      </div>
    </>
  );
};

const ProjectBox = ({ item }) => {
  const getColor = (status) =>
    status === "on-going" ? "bg-primary" : "bg-background";

  const getDarkColor = (status) =>
    status === "on-going" ? "bg-secondary" : "bg-background-900";

  return (
    <>
      <div className="flex flex-row">
        <div
          className={`text-sm px-2 py-0.5 text-white ${getColor(
            item.status
          )} w-fit`}
        >
          {item.status}
        </div>
        <div className={`w-2 ${getDarkColor(item.status)}`}></div>
      </div>

      <div className="bg-background-50 p-2 mb-5 drop-shadow">
        <div>{item.title}</div>
        <div className="flex flex-row items-center">
          <div className="w-4 fill-background">
            <AppIcons icon="building" />
          </div>
          <div className="font-light italic mx-2 ">{item.institute}</div>
          <div className="hidden sm:block ">
            <KeyHolder items={item.keywords} />
          </div>
        </div>
        <div className="block sm:hidden mt-1">
          <KeyHolder items={item.keywords} />
        </div>
        <div className="text-sm mt-1 font-medium text-background-900">
          {item.details}
        </div>
        {item.hasOwnProperty("milestone") && (
          <div className="flex flex-row items-center mt-3">
            <div className=" fill-secondary h-3 w-3">
              <AppIcons icon="star" />
            </div>
            <div className="text-xs ml-2 text-link italic">
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.milestone}
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const ResearchProjectPage = () => {
  const mainSelector = useSelector((state) => state.research);
  const selector = mainSelector.projects;
  const skillSelector = mainSelector.skills;
  const toolSelector = mainSelector.tools;
  const crumbs = mainSelector.crumbs;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeCrumbs(crumbs));
    return () => {
      dispatch(changeCrumbs(null));
    };
  }, []);

  return (
    <>
      <div className="p-5 px-8 grid grid-cols-1">
        {skillSelector.map((item, key) => (
          <div key={key}>
            <div className="text-sm text-secondary">{item.topic}</div>
            <div className="mb-4">{item.details}</div>
          </div>
        ))}
        <div className="text-sm text-secondary">Tools and Techniques</div>
        <ul className="m-3" style={{ listStyleType: "square" }}>
          {toolSelector.map((item, key) => (
            <li key={key}>
              <span className="text-sm">{item.type}</span> {": "}{" "}
              <span className="text-xs text-background-900">
                {item.details}
              </span>
            </li>
          ))}
        </ul>
        <div className="mb-3"></div>
        <div className="text-sm text-secondary">Data Science Blog</div>
        <div className="mb-3">
          Explore the fascinating world of data science and visualization on my
          blog, where I delved into the art of extracting insights from data.
          Check it out at{" "}
          <a
            className="text-link"
            href="https://weirddata.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            WeirdData Blog
          </a>
          .
        </div>
        <div className="text-sm text-secondary mb-3">
          Selected Research Projects
        </div>
        {selector.map((element, index) => (
          <ProjectBox key={index} item={element}></ProjectBox>
        ))}
      </div>
    </>
  );
};

export default ResearchProjectPage;
