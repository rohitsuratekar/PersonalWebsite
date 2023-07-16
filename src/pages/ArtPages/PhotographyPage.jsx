import { useSelector } from "react-redux";
import profilePhoto from "@/assets/photography/rohit_suratekar_photo.jpg";

const GearBox = ({ item, title }) => {
  return (
    <>
      <div>{title}</div>
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
            <img src={profilePhoto} className="w-full" />
          </div>
          <p className="">{selector.photography.summary}</p>
        </div>
        <div className="text-xs text-secondary mb-2 mt-3">What do I have ?</div>
        <div>{selector.photography.gearsDetails}</div>
        <div>
          {Object.entries(selector.photography.gears).map(([key, value]) => (
            <GearBox key={key} title={key} item={value} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PhotographyPage;
