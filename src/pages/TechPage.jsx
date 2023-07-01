import { useSelector } from "react-redux";

const BarComp = ({ item }) => {
  const getSpan = (val) => {
    const baseClass = "bg-background py-1 pl-2";
    return baseClass + " col-span-" + val;
  };
  return (
    <>
      <div className="grid grid-cols-10 bg-background-100 text-white text-xs font-mono">
        <div className={getSpan(item.level)}>{item.name}</div>
      </div>
    </>
  );
};

const TechPage = () => {
  const selector = useSelector((state) => state.tech);

  return (
    <>
      <div className="p-5 grid grid-cols-1">
        <div className="text-xs text-secondary mb-3">
          Programing Language Proficiency
        </div>
        <div>
          {selector.languges.map((element, index) => (
            <BarComp key={index} item={element} />
          ))}
        </div>
        <div className="grid grid-cols-10 mt-2 text-background">
          <div className="col-span-3 text-xs">Beginner</div>
          <div className="col-span-4 text-xs text-center">Proficient</div>
          <div className="col-span-3 text-xs text-end">Expert</div>
        </div>
        <div className="mt-4"></div>
        {selector.langugeSections.map((element, index) => (
          <div key={index}>
            <div>{element.header}</div>
            <div>{element.text}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TechPage;
