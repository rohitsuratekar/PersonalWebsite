import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import allSketches from "@/components/DrawingExporter";

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

const SketchingPage = () => {
  const selector = useSelector((state) => state.art.drawing);
  const [isOpen, setIsOpen] = useState(false);
  const [clickedImage, setClickedImage] = useState(null);

  const openPopup = (image) => {
    setClickedImage(image);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setClickedImage(null);
  };

  const groupedPhotos = (photosData) => {
    const newData = photosData.reduce((result, photo, index) => {
      if (index % 3 === 0) result.push([]);
      result[result.length - 1].push(photo);
      return result;
    }, []);
    return newData;
  };

  return (
    <>
      <div className="p-5 grid grid-cols-1">
        <div className="text-xs text-secondary mb-2">
          From Scribbles to Sketches
        </div>
        <div>{selector.summary}</div>
        <div className="grid grid-cols-3 mt-5 gap-3">
          {groupedPhotos(allSketches).map((imgGroup, mainIndex) => (
            <div key={mainIndex} className="flex flex-col">
              {imgGroup.map((img, index) => (
                <div
                  key={index}
                  className="mt-3 cursor-pointer hover:shadow-lg"
                >
                  <img src={img} onClick={() => openPopup(img)}></img>
                </div>
              ))}
            </div>
          ))}
          {isOpen && clickedImage && (
            <FullscreenImagePopup image={clickedImage} onClose={closePopup} />
          )}
        </div>
      </div>
    </>
  );
};

export default SketchingPage;