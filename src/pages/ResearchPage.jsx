import { useSelector } from "react-redux";
import {
  WorkPosition,
  QuickLink,
  EducationBox,
} from "@/components/CommonComponents";

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

  return (
    <>
      <div className="p-5 px-8 grid grid-cols-1">
        <div className="text-sm text-secondary mb-2">
          Current Research Focus
        </div>
        <div className="tracking-normal text-base antialiased ">
          {selector.focus}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:h-12  my-3 gap-3 cursor-pointer">
          {selector.quickLinks.map((item, index) => (
            <QuickLink item={item} key={index} />
          ))}
        </div>
        <div className="text-sm text-secondary mb-2">
          Professional Experiance
        </div>
        <div className="bg-background-50 grid grid-cols-1 py-3 my-2 drop-shadow">
          {arangeItems(selector.workExp).map((element, index) => (
            <WorkPosition key={index} item={element} index={index} />
          ))}
          <div className="mb-3"></div>
        </div>
        <div className="text-sm text-secondary mb-2 mt-3">Education</div>
        {selector.education.map((item, index) => (
          <EducationBox key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default ResearchPage;
