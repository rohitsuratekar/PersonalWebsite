import { useSelector, useDispatch } from "react-redux";
import { changeCrumbs } from "@/reducers/appReducer";
import { useEffect } from "react";

const VideoTypeItem = ({ item }) => {
  return (
    <>
      <div className="text-sm text-secondary">{item.title}</div>
      <ul className="m-3" style={{ listStyleType: "square" }}>
        {item.projects.map((item, key) => (
          <li key={key}>
            <span className="text-sm">
              {item.link !== "#" && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className=" text-link"
                >
                  {item.title}
                </a>
              )}{" "}
              {item.link === "#" && item.title}
            </span>{" "}
            {item.description.length !== 0 && ": "}{" "}
            <span className="text-xs text-background-900">
              {item.description}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

const CinematographyPage = () => {
  const mainSelector = useSelector((state) => state.art);
  const selector = mainSelector.cinematography;
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
        <div className="text-sm text-secondary mb-2">
          Capturing Moments in Motion
        </div>
        <div>{selector.summary}</div>
        <div className="mt-3">
          {selector.types.map((item, index) => (
            <VideoTypeItem key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CinematographyPage;
