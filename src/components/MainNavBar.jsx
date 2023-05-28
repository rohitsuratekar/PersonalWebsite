import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const MainNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navList = useSelector(state=> state.app.mainNav);
  
  const addClass = (element) => {
    var baseClass =
      " h-full text-center cursor-pointer hover:text-primary py-1";
    if (location.pathname == element.url) {
      baseClass += " text-black border-b-4 tracking-tight";
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
      <nav className="grid grid-cols-4 border-y-2 content-center">
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