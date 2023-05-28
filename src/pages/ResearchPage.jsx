import { useSelector } from "react-redux";
import AppIcons from "@/components/IconLibrary";
import { useNavigate } from "react-router-dom";

const ResearchPage = () => {
  const selector = useSelector((state) => state.research);
  const navigate = useNavigate()
  const goTo = (link) => {
    navigate(link);
  }

  return (
    <div className="p-5 grid grid-cols-1">
      <div className="text-xs text-secondary mb-2">Current Research Focus</div>
      <div className="tracking-normal text-base antialiased mb-2">
        {selector.focus}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:h-12  my-2 gap-3 cursor-pointer">
        {selector.quickLinks.map((item, index) => (
          <div key={index} className="bg-red grid grid-cols-6 content-cente group" onClick={()=>goTo(item.url)}>
            <div className="col-span-1 flex items-center fill-background group-hover:fill-primary">
              <AppIcons icon={item.icon} />
            </div>
            <div className="col-span-5 p-2 flex items-center text-sm group-hover:text-primary">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ResearchPage;
