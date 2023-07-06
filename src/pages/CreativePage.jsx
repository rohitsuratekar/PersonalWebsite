import { useSelector } from "react-redux";
import AppIcons from "@/components/IconLibrary";
import { Link } from "react-router-dom";

const ArtLink = ({ item }) => {
  return (
    <>
    <Link to={item.link}>
    <div className=" hover:bg-background p-3 shadow-sm h-full relative overflow-hidden group bg-background-50">
        <div className="flex flex-col">
          <div className=" group-hover:text-white text-link">{item.title}</div>
          <div className="text-sm text-background-900 group-hover:text-background-50">{item.description}</div>
        </div>
        <div className="absolute bottom-0 right-0 h-5 w-5 fill-background-100 group-hover:fill-background">
          <AppIcons icon={item.icon}/>
        </div>
      </div>
    </Link>
    </>
  );
};

const CreativePage = () => {
  const selector = useSelector((state) => state.art);
  return (
    <>
      <div className="p-5 grid grid-cols-1">
        <div className="text-xs text-secondary mb-2">Artistic Journey</div>
        <div className="mb-4">{selector.background}</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xl:grid-cols-3">
        {selector.sections.map((item, index) => (
          <ArtLink key={index} item={item} />
        ))}
        </div>
   
      </div>
    </>
  );
};

export default CreativePage;
