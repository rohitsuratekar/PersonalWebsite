import { useSelector, useDispatch } from "react-redux";
import { changeCrumbs } from "@/reducers/appReducer";
import { useEffect } from "react";

const WritingPage = () => {
  const mainSelector = useSelector((state) => state.art);
  const selector = mainSelector.writing;
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
        <div className="text-sm text-secondary mb-2">Journey Through Words</div>
        <div className="mb-3">{selector.summary}</div>
        <div className="text-sm text-secondary mb-3">
          A Glimpse of My Past Poems
        </div>
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
          {selector.poems.map((item, index) => (
            <div key={index} className=" bg-background-50">
              <div className={`font-bold mb-2 p-2 bg-background-100`}>
                {item.title}
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: item.text }}
                className="p-3"
              ></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WritingPage;
