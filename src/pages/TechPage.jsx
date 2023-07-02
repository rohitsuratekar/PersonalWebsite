import { useSelector } from "react-redux";
import { QuickLink } from "@/components/ResearchComponents";

const BarComp = ({ item }) => {
  const getSpan = (val, add_border, add_color) => {
    var baseClass = "py-1 pl-2";
    if (add_color) {
      baseClass += " bg-background";
    }
    if (add_border) {
      baseClass += " border-background-900 border-dashed border-r-2";
    }
    return baseClass + " col-span-" + val;
  };

  return (
    <>
      <div className="grid grid-cols-10 bg-background-100 text-white text-xs font-mono">
        {item.level > 5 && (
          <>
            <div className={getSpan(5, true, true)}>{item.name}</div>
            <div className={getSpan(item.level - 5, false, true)}></div>
          </>
        )}
        {item.level == 5 && (
          <>
            <div className={getSpan(item.level, true, true)}>{item.name}</div>
          </>
        )}
        {item.level < 5 && (
          <>
            <div className={getSpan(item.level, false, true)}>{item.name}</div>
            <div className={getSpan(5 - item.level, true, false)}></div>
          </>
        )}
      </div>
    </>
  );
};

const TechPage = () => {
  const selector = useSelector((state) => state.tech);

  return (
    <>
      <div className="p-5 grid grid-cols-1">
        <div className="text-xs text-secondary mb-2">
          Developer Background
        </div>
        <div className="tracking-normal text-base antialiased ">
          {selector.focus}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:h-12  my-3 gap-3 cursor-pointer">
          {selector.quickLinks.map((item, index) => (
            <QuickLink item={item} key={index} />
          ))}
        </div>
        <div className="text-xs text-secondary mb-3">
          Programing Language Proficiency
        </div>
        <div className="divide-y divide-background-50 border-l-2 border-background-900 border-dashed border-r-2">
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
            <div className="text-xs text-secondary mb-2">{element.header}</div>
            <div className="mb-4">{element.text}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TechPage;
