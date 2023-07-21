import AppIcons from "@/components/IconLibrary";
import { useNavigate } from "react-router-dom";

const CrumbItem = ({ item, index, count }) => {
  const navigate = useNavigate();
  const goTo = (url) => {
    navigate(url);
  };

  return (
    <>
      <div className="flex p-1 items-center">
        <div
          className="text-sm mr-2 cursor-pointer text-background"
          onClick={() => goTo(item.link)}
        >
          {item.name}
        </div>
        {index !== count - 1 && (
          <div className="w-2 fill-background">
            <AppIcons icon="chevron-right" className="w-full " />
          </div>
        )}
      </div>
    </>
  );
};

const BreadCrumbs = ({ itemList }) => {
  return (
    <>
      <div className="flex gap-1 mb-3 ">
        {itemList.map((item, index) => (
          <CrumbItem
            key={index}
            item={item}
            index={index}
            count={itemList.length}
          />
        ))}
      </div>
    </>
  );
};

export default BreadCrumbs;
