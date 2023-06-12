import { useSelector } from "react-redux";
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
          <div className="uppercase mb-1">
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
          <div>{item.name}</div>
          <div className="text-sm text-background mb-3">
            <span> Talk Title: </span>{" "}
            <span dangerouslySetInnerHTML={{ __html: item.title }}></span>
          </div>
        </div>
      </div>
    </>
  );
};

const ConferencePage = () => {
  const selector = useSelector((state) => state.research.conference);
  return (
    <div className="p-4 grid grid-cols-1 ">
      <div className="text-xs text-secondary mb-2">Conferences and Talks</div>
      {selector.map((item, index) => (
        <ConfBox key={index} item={item} />
      ))}
    </div>
  );
};

export default ConferencePage;
