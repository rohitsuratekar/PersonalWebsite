import { useSelector, useDispatch } from "react-redux";
import { changeCrumbs } from "@/reducers/appReducer";
import { useEffect } from "react";

const PublicationBox = ({ item }) => {
  const parts = item.authors.split(new RegExp(`(Rohit Suratekar)`, "gi"));

  return (
    <>
      <div className="text-sm">
        <span className="text-background">{parts[0]}</span>
        <span className="text-black">{parts[1]}</span>
        <span className="text-background">{parts[2]}</span>
        <span className="text-black ml-1">{item.title}</span>
        <span className="text-link ml-1 italic underline">
          <a href={item.doi} target="_blank" rel="noopener noreferrer">
            {item.journal}
          </a>
        </span>
        <span className="text-background ml-1">{item.rest}</span>
      </div>
    </>
  );
};

const PatentBox = ({ item }) => {
  return (
    <>
      <div className="text-sm">
      <span className="text-background">{item.year}</span>
        <span className="text-black ml-1">{item.title}</span>
        <span className="text-link ml-1 italic underline">
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.application}
          </a>
        </span>
        <span className="text-background ml-1">(Status: {item.status})</span>
      </div>
    </>
  );
};

const PublicationPage = () => {
  const mainSelector = useSelector((state) => state.research);
  const patentList = mainSelector.patents;
  const publicationList = mainSelector.publications;
  const crumbs = mainSelector.crumbs;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeCrumbs(crumbs));
    return () => {
      dispatch(changeCrumbs(null));
    };
  }, []);

  const sortItems = (items) => {
    return items.sort((b, a) => {
      if (a.year === b.year) {
        // If the names are the same, sort by month
        return a.month - b.month;
      }
      // Sort by year
      return a.year < b.year ? -1 : 1;
    });
  };

  const getPapers = () => {
    const papers = publicationList.filter((item) => item.preprint === false);
    var ownPapers = papers.filter(
      (item) => item.authors.startsWith("Rohit Suratekar") === true
    );
    var restPapers = papers.filter(
      (item) => item.authors.startsWith("Rohit Suratekar") === false
    );
    ownPapers = sortItems(ownPapers);
    restPapers = sortItems(restPapers);
    return ownPapers.concat(restPapers);
  };

  const getPriprints = () => {
    const papers = publicationList.filter((item) => item.preprint === true);
    return sortItems(papers);
  };

  return (
    <>
      <div className="p-5 px-8 grid grid-cols-1 gap-3">
        <div className="text-sm text-secondary mb-2">Publications</div>
        {getPapers().map((citation, index) => (
          <PublicationBox item={citation} key={index} />
        ))}
        <div className="text-sm text-secondary my-2">Preprints</div>
        {getPriprints().map((citation, index) => (
          <PublicationBox item={citation} key={index} />
        ))}
        <div className="text-sm text-secondary my-2">Patents</div>
        {patentList.map((citation, index) => (
          <PatentBox item={citation} key={index}/>
        ))}
      </div>
    </>
  );
};

export default PublicationPage;
