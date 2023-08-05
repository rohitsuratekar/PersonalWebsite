import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MainHeader = () => {
  const navigate = useNavigate();
  const mainSelector = useSelector((state) => state.app);
  const title = mainSelector.title;

  const goHome = () => {
    navigate("/");
  };
  return (
    <div className={`flex justify-center items-center h-20 `}>
      <span
        className="font-sans text-2xl antialiased cursor-pointer text-link"
        onClick={goHome}
      >
        {title}
      </span>
    </div>
  );
};

export default MainHeader;
