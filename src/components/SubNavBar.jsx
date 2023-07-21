import { useNavigate, useLocation } from "react-router-dom";

const NavItem = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const goTo = (url) => {
    navigate(url);
  };

  return (
    <>
      <div className="flex p-1 items-center justify-center ">
        <div
          className={`text-xs cursor-pointer text-background hover:text-primary ${
            location.pathname === item.link && "text-black"
          }`}
          onClick={() => goTo(item.link)}
        >
          {item.name}
        </div>
      </div>
    </>
  );
};

const SubNavBar = ({ itemList }) => {
  return (
    <>
      <div className="flex gap-1 justify-center divide-x-2 flex-wrap">
        {itemList.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default SubNavBar;
