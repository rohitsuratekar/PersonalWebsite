import { useSelector } from "react-redux";
import profilePhoto from "@/assets/photography/rohit_suratekar_photo.jpg";
import { QuickLink } from "@/components/CommonComponents";
import flyPhoto from "@/assets/photography/fly.jpg";
import cameraPhoto from "@/assets/photography/camera.jpg";

const GearBox = ({ item, title }) => {
  return (
    <>
      <div className="text-sm mt-2 ml-2 text-primary">{title}</div>
      <div className="m-3">
        {item.map((val, key) => (
          <ul key={key} className="list-disc">
            <li>
              <span className="text-sm">{val.item} : </span>{" "}
              <span className="text-xs text-background">{val.desc}</span>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

const PhotographyPage = () => {
  const selector = useSelector((state) => state.art);
  return (
    <>
      <div className="p-5 grid grid-cols-1">
        <div className="text-xs text-secondary mb-2">How it all started?</div>
        <div>
          <div className="md:w-1/2 xxl:w-1/4 float-left mb-4 sm:mb-0 mr-4">
            <img src={profilePhoto} className="w-full" alt="Rohit Photo" />
          </div>
          <p>{selector.photography.summary}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:h-12  my-3 gap-3 cursor-pointer">
          {selector.photography.galleryLinks.map((item, index) => (
            <QuickLink item={item} key={index} />
          ))}
        </div>
        <div className="text-xs text-secondary mb-2 mt-3">What do I have ?</div>
        <div>{selector.photography.gearsDetails}</div>
        <div>
          {Object.entries(selector.photography.gears).map(([key, value]) => (
            <GearBox key={key} title={key} item={value} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xxl:grid-cols-4 mt-3">
          <div className="relative">
            <img src={cameraPhoto} alt="Camera Photo"></img>
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white">
              <p className="text-white text-xs text-center">
                Oldest love, where my journey began 📷❤️
              </p>
            </div>
          </div>
          <div className="relative">
            <img src={flyPhoto} alt="Fly Macro"></img>
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white">
              <p className="text-white text-xs text-center">
                Exploring advanced lens magic 🐞🔍
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotographyPage;
