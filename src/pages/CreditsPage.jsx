import { useSelector } from "react-redux";

const CreditsPage = () => {
  const selector = useSelector((state) => state.app.credits);

  return (
    <>
      <div className="p-5 grid grid-cols-1">
        <div className="text-xs text-secondary">
          {selector.LicenseAndCopyright.title}
        </div>
        <div className="text-sm mt-3">
          {selector.LicenseAndCopyright.content}
        </div>
        <ul className="mx-3 mt-4 text-sm" style={{ listStyleType: "square" }}>
          {selector.LicenseAndCopyright.licenses.map((item, index) => (
            <li key={index}>
              {" "}
              <span>{item.type} </span> {item.licenseName && " - "}
              <span className="text-link">
                <a href={item.licenseURL} target="_blank" rel="noreferrer">
                  {item.licenseName}
                </a>
              </span>
            </li>
          ))}
        </ul>
        <div className="text-xs text-secondary mt-4">
          {selector.GeneralCredits.title}
        </div>
        <div className="text-sm mt-3">{selector.GeneralCredits.content}</div>
        <ul className="mx-3 mt-4 text-sm" style={{ listStyleType: "square" }}>
          {selector.GeneralCredits.credits.map((item, index) => (
            <li key={index}>
              {" "}
              <span>{item.type}</span>
              {" - "}
              <span className=" text-background">{item.desc}</span> {"  "}
              <span>
                (
                <a
                  href={item.licenseURL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  {item.licenseName}
                </a>
                )
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CreditsPage;
