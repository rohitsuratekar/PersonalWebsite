import AppIcons from "@/components/IconLibrary";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const WorkPosition = ({ item }) => {
  const pcolor = item.end === "Present" ? "bg-primary" : "bg-background";

  return (
    <div className="grid grid-cols-12 px-3 mb-2 lg:mb-0">
      {!item.hasOwnProperty("company") && (
        <>
          <div className="col-span-1 flex justify-end items-center">
            <div className={`${pcolor} h-4 w-4 mr-2`}></div>
          </div>
          <div className="col-span-11 lg:col-span-3 text-sm flex items-center font-light">
            {item.start} - {item.end}
          </div>
          <div className="col-span-1 lg:hidden"></div>
          <div className="col-span-11 lg:col-span-8  block sm:flex items-center ">
            <span>{item.position}</span>{" "}
            <span className="pl-2 text-xs font-light">{item.description}</span>
          </div>
        </>
      )}

      {item.hasOwnProperty("company") && (
        <>
          <div className="col-span-1"></div>
          <div className="col-span-11 text-xs italic mt-3">{item.company}</div>
        </>
      )}
    </div>
  );
};

const QuickLink = ({ item }) => {
  const navigate = useNavigate();
  const goTo = (link, isExternal) => {
    if (typeof isExternal === "undefined") {
      navigate(link);
    } else {
      window.open(isExternal, "_blank");
    }
  };
  return (
    <>
      <div
        className="flex flex-row items-center content-center group"
        onClick={() => goTo(item.url, item.external)}
      >
        <div className="h-6 w-6 fill-link group-hover:fill-primary">
          <AppIcons icon={item.icon} />
        </div>
        <div className=" p-2 text-sm group-hover:text-primary text-link">
          {item.title}
        </div>
      </div>
    </>
  );
};

const EducationBox = ({ item }) => {
  return (
    <div className="grid grid-cols-1 mb-2">
      <div>
        <span>{item.degree}</span>{" "}
        <span className="italic text-background">in {item.topic}</span>
      </div>
      <div className="text-background">
        <span>{item.lab}</span> {item.hasOwnProperty("lab") && <span>,</span>}{" "}
        <span>{item.institute}</span>
      </div>
      <div className="font-light mt-1 text-sm">Thesis Topic: {item.thesis}</div>
    </div>
  );
};

const Chip = ({ text }) => {
  return (
    <>
      <div className="text-xs bg-background px-1 text-white rounded-lg">
        {text}
      </div>
    </>
  );
};

const FullscreenImagePopup = ({ image, onClose }) => {
  // Event listener to handle keydown
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={onClose}
    >
      <img src={image} className="max-h-full max-w-full" />
    </div>
  );
};

export { WorkPosition, QuickLink, EducationBox, Chip, FullscreenImagePopup };
