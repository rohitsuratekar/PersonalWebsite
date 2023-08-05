import { useSelector } from "react-redux";
import { useState } from "react";
import allSketches from "@/components/DrawingExporter";
import { FullscreenImagePopup } from "@/components/CommonComponents";
import SubNavBar from "@/components/SubNavBar";

const SketchingPage = () => {
  const mainSelector = useSelector((state) => state.art);
  const selector = mainSelector.drawing;
  const crumbs = mainSelector.crumbs;

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
      <SubNavBar itemList={crumbs} />
      <div className="p-5 px-8 grid grid-cols-1">
        <div className="text-sm text-secondary mb-2">
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
