import { useSelector } from "react-redux";
import profilePhoto from "@/assets/photography/rohit_suratekar_photo.jpg";

const PhotographyPage = () => {
  const selector = useSelector((state) => state.art);
  return (
    <>
      <div className="p-5 grid grid-cols-1">
        <div className="text-xs text-secondary mb-2">How it all started?</div>
        <div className="flex">
            <div className="w-24"></div>
          <div>{selector.photography.summary}</div>
        </div>
      </div>
    </>
  );
};

export default PhotographyPage;
