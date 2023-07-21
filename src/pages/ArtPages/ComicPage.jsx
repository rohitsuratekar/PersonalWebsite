import { useSelector } from "react-redux";
import comicsAssets from "@/components/ComicsExporter";
import { useState } from "react";
import SubNavBar from "@/components/SubNavBar";

const ProjectThumbnail = ({ project, isSelected, onClick }) => {
  const getClass = () => {
    if (isSelected === null) {
      return "grayscale-0";
    }
    if (isSelected === project) {
      return "grayscale-0";
    }
    return "grayscale";
  };
  return (
    <div
      onClick={() => onClick(project)}
      className={` cursor-pointer ${getClass()}`}
    >
      <img src={comicsAssets[project.thumb]} alt={project.header} />
    </div>
  );
};

const ComicPanel = ({ item }) => {
  return (
    <>
      <div className="mt-4">
        <div className=" font-bold mt-2 mb-2 text-lg">{item.header}</div>
        <div className="text-xs text-secondary mb-2">Download Comic PDF</div>
        <div className="mb-3">
          Download the comic{" "}
          <a href={comicsAssets[item.pdf]} className="text-link">
            here
          </a>{" "}
          ({item.size})
        </div>
        <div className="text-xs text-secondary mb-2">Background</div>
        <div
          className="text-sm mt-2"
          dangerouslySetInnerHTML={{ __html: item.desc }}
        ></div>
      </div>
    </>
  );
};

const ComicPage = () => {
  const mainSelector = useSelector((state) => state.art);
  const selector = mainSelector.comics;
  const crumbs = mainSelector.crumbs;

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    if (selectedProject === project) {
      setSelectedProject(null);
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <>
      <SubNavBar itemList={crumbs} />
      <div className="p-5 grid grid-cols-1">
        <div className="text-xs text-secondary mb-2">
          The World of Comic Creation
        </div>
        <div>{selector.summary}</div>
        <div className="text-xs text-secondary my-2">Comic Showcase</div>
        {selectedProject === null && (
          <div className="text-sm text-background">
            [Click on a thumbnail to explore more details.]
          </div>
        )}
        {selectedProject !== null && (
          <div className="text-sm text-background">
            Current Selection: {selectedProject.header}
          </div>
        )}

        <div className="grid grid-cols-3 gap-3 mt-3 xxl:grid-cols-5">
          {selector.projects.map((item, index) => (
            <ProjectThumbnail
              key={index}
              project={item}
              isSelected={selectedProject}
              onClick={handleProjectClick}
            />
          ))}
        </div>
        {selectedProject && <ComicPanel item={selectedProject} />}
      </div>
    </>
  );
};
export default ComicPage;
