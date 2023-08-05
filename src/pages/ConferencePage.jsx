import { useSelector, useDispatch } from "react-redux";
import { changeCrumbs } from "@/reducers/appReducer";
import { useEffect } from "react";
import getImageURL from "@/components/ImageLoader";

const ConfBox = ({ item }) => {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col">
          <div className="w-6 h-6 rounded-full">
            <img
              src={getImageURL(`flag-${item.country.toLowerCase()}`)}
              alt={`flag-${item.country.toLowerCase()}`}
            />
          </div>
          <div className="flex justify-center flex-1">
            <div className="bg-background-100 w-0.5 h-full"></div>
          </div>
        </div>
        <div className="flex-grow ml-3 grid grid-cols-1">
          <div className="mb-1">
            <span className="text-xs font-light">{item.date}</span>
            {", "}
            <span className="text-sm font-medium">
              {item.place} {", "} {item.country}
            </span>{" "}
            {item.type === "talk" && (
              <span className="lowercase bg-primary text-white px-2 py-1 text-xs ml-2 rounded-lg">
                Talk
              </span>
            )}
          </div>
          <div className="font-medium bg-background-50/50 rounded-md px-2 py-1 text-sm">
            {item.name}
          </div>
          <div className="text-sm text-background mb-3 mt-1">
            <span> Talk Title: </span>{" "}
            <span dangerouslySetInnerHTML={{ __html: item.title }}></span>
          </div>
        </div>
      </div>
    </>
  );
};

const ConferencePage = () => {
  const mainSelector = useSelector((state) => state.research);
  const selector = mainSelector.conference;
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
      <div className="p-4 px-8 grid grid-cols-1">
        <div className="text-sm text-secondary mb-2">Conferences and Talks</div>
        {selector.map((item, index) => (
          <ConfBox key={index} item={item} />
        ))}
        <div className="text-sm text-secondary mb-2 mt-4">
          Additional Conferences
        </div>
        <ul className=" mx-3" style={{ listStyleType: "square" }}>
          {mainSelector.additionalConference.map((item, index) => (
            <li key={index}>
              <span className=" text-sm">{item.title}</span> {"  "}
              <span className=" text-xs text-background">({item.date})</span>
            </li>
          ))}
        </ul>
        <div className="text-sm text-secondary mb-2 mt-4">
          Workshop Organization
        </div>
        <div className="text-sm">
          <a
            href="https://ncbs-students.github.io/Workshop2017/"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Informal Programming Workshop
          </a>{" "}
          , NCBS, Bangalore, India
        </div>
      </div>
    </>
  );
};

export default ConferencePage;
