import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SocialPage = () => {
  const mainSelector = useSelector((state) => state.social);

  return (
    <>
      <div className="p-5 px-8 grid grid-cols-1">
        <div className="text-sm text-secondary">My Journey and Interests</div>
        <ul className="m-3" style={{ listStyleType: "square" }}>
          {mainSelector.facts.map((item, key) => (
            <li key={key}>
              <span className="text-sm">{item.title}</span> {": "}{" "}
              <span className="text-xs text-background-900">
                {item.description}
              </span>
            </li>
          ))}
          <li>
            <span className="text-sm"> Fun Fact </span>
            {": "}{" "}
            <span className="text-xs text-background-900">
              An interesting tidbit about me is that my{" "}
              <Link to="/erdos" className="text-link">
                Erdős number
              </Link>{" "}
              is 5, reflecting my academic connections.
            </span>
          </li>
        </ul>
        <div>
          {mainSelector.profiles.map((item, index) => (
            <div key={index}>
              <div className="text-sm text-secondary mb-1">{item.title}</div>
              <div className="flex flex-wrap gap-1 mb-2">
                {Object.entries(item.links).map(([key, value]) => (
                  <div key={key} className="">
                   · <a href={value} target="_blank" rel="noreferrer" className="text-link">
                      {key}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SocialPage;
