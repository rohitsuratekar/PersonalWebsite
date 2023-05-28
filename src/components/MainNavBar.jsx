import { useNavigate, useLocation } from "react-router-dom";

const MainNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navList = [
    { id: 1, name: "research", url: "/" },
    { id: 2, name: "technology", url: "/technology" },
    { id: 3, name: "creativity", url: "/creativity" },
    { id: 4, name: "social", url: "/social" },
  ];
  const addClass = (element) => {
    var baseClass =
      " h-full text-center cursor-pointer hover:text-primary";
    if (location.pathname == element.url) {
      baseClass += " text-black border-b-4";
    } else {
      baseClass += " text-background";
    }
    return baseClass;
  };
  const changeNav = (itemClicked) => {
    navigate(itemClicked.url);
  };
  return (
    <>
      <nav className="grid grid-cols-4 border-y-2">
        {navList.map((element) => (
          <div
            key={element.id}
            className={addClass(element)}
            onClick={() => changeNav(element)}
          >
            {element.name}
          </div>
        ))}
      </nav>
    </>
  );
};

export default MainNavBar;
