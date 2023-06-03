import { useSelector } from "react-redux";
import AppIcons from "@/components/IconLibrary";
import { useNavigate } from "react-router-dom";

const QuickLink = ({ item }) => {
  const navigate = useNavigate();
  const goTo = (link) => {
    navigate(link);
  };
  return (
    <>
      <div
        className="bg-red grid grid-cols-6 content-cente group"
        onClick={() => goTo(item.url)}
      >
        <div className="col-span-1 flex items-center fill-background group-hover:fill-primary">
          <AppIcons icon={item.icon} />
        </div>
        <div className="col-span-5 p-2 flex items-center text-sm group-hover:text-primary">
          {item.title}
        </div>
      </div>
    </>
  );
};

const Position = ({ item }) => {
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
          <div className="col-span-11 lg:col-span-8  flex items-center">
            <span>{item.position}</span>{" "}
            <span className="pl-2 text-xs font-light">{item.description}</span>
          </div>
        </>
      )}

      {item.hasOwnProperty("company") && (
        <>
          <div className="col-span-1"></div>
          <div className="col-span-11 text-xs italic mb-1">{item.company}</div>
        </>
      )}
    </div>
  );
};

const ResearchPage = () => {
  const selector = useSelector((state) => state.research);

  const arangeItems = (data) => {
    var combinedData = data.reduce((acc, item) => {
      const existingCompany = acc.find((el) => el.company === item.company);
      if (existingCompany) {
        existingCompany.experiences.push({
          start: item.start,
          end: item.end || "Present",
          position: item.position,
          description: item.description,
        });
      } else {
        acc.push({
          company: item.company,
          experiences: [
            {
              start: item.start,
              end: item.end || "Present",
              position: item.position,
              description: item.description,
            },
          ],
        });
      }
      return acc;
    }, []);

    combinedData.forEach((company) => {
      company.experiences = company.experiences.sort(
        (b, a) => new Date(a.start) - new Date(b.start)
      );
    });

    combinedData = combinedData.flatMap((item) => [
      { company: item.company },
      ...item.experiences.map((experience) => ({
        start: experience.start,
        end: experience.end,
        position: experience.position,
        description: experience.description,
      })),
    ]);

    return combinedData;
  };

  const EducationBox = ({item}) => {
    return <div>{item.degree}</div>;
  };

  return (
    <div className="p-5 grid grid-cols-1">
      <div className="text-xs text-secondary mb-2">Current Research Focus</div>
      <div className="tracking-normal text-base antialiased mb-2">
        {selector.focus}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:h-12  my-2 gap-3 cursor-pointer">
        {selector.quickLinks.map((item, index) => (
          <QuickLink item={item} key={index} />
        ))}
      </div>
      <div className="text-xs text-secondary mb-2">Professional Experiance</div>
      <div className="bg-background-50 grid grid-cols-1 gap-2 py-3 my-2">
        {arangeItems(selector.workExp).map((element, index) => (
          <Position key={index} item={element} />
        ))}
      </div>
      <div className="text-xs text-secondary mb-2">Education</div>
      {selector.education.map((item, index) => (
        <EducationBox key={index} item={item} />
      ))}
    </div>
  );
};

export default ResearchPage;
