import { useSelector } from "react-redux";
import allDigitalArt from "@/components/DigitalArtExporter";
import { useState } from "react";

const Tag = ({ tag, count, isSelected, onTagClick }) => {
  return (
    <>
      <div
        className={`flex items-center cursor-pointer bg-background-50 rounded-sm text-xs ${
          isSelected ? "bg-primary text-white" : ""
        }`}
        onClick={() => onTagClick(tag)}
      >
        <div
          className={`bg-background px-2 text-white ${
            isSelected ? " bg-secondary" : ""
          }`}
        >
          {count}
        </div>
        <div className="px-2">{tag} </div>
      </div>
    </>
  );
};

const ProjectItem = ({ item }) => {
  return (
    <>
      <div className="flex flex-col">
        <div>
          {" "}
          <img src={item.i} />{" "}
        </div>
        <div className=" bg-background-100 px-2 font-medium text-sm shadow-sm">
        {item.t}
        </div>
        
      </div>
    </>
  );
};

const DigitalPage = () => {
  const selector = useSelector((state) => state.art.digital);
  const [selectedTags, setSelectedTags] = useState([]);

  const allTags = Array.from(
    new Set(allDigitalArt.flatMap((project) => project.k))
  );

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleShowAll = () => {
    setSelectedTags([]);
  };

  // Filtering projects based on selected tags
  const filteredProjects = allDigitalArt.filter((project) =>
    selectedTags.length === 0
      ? true
      : project.k.some((tag) => selectedTags.includes(tag))
  );

  const tagCount = allDigitalArt.reduce((count, project) => {
    project.k.forEach((tag) => {
      count[tag] = (count[tag] || 0) + 1;
    });
    return count;
  }, {});

  return (
    <>
      <div className="p-5 grid grid-cols-1">
        <div className="text-xs text-secondary mb-2">Digital Art Fusion</div>
        <div>{selector.summary}</div>
        <div className="text-xs text-secondary mt-3">Tools and Techniques</div>
        <ul className="m-3" style={{ listStyleType: "square" }}>
          {selector.skills.map((item, key) => (
            <li key={key}>
              <span className="text-sm">{item.title}</span> {": "}{" "}
              <span className="text-xs text-background-900">{item.desc}</span>
            </li>
          ))}
        </ul>
        <div className="text-xs text-secondary">E-Canvas Gallery</div>
        <div className="flex flex-wrap gap-2 mt-4">
          {
            <div
              className={`flex cursor-pointer bg-background-50 rounded-sm text-xs ${
                selectedTags.length === 0 ? "bg-primary text-white" : ""
              }`}
              onClick={handleShowAll}
            >
              <div
                className={`bg-background px-2 text-white ${
                  selectedTags.length === 0 ? " bg-secondary" : ""
                }`}
              >
                {allDigitalArt.length}
              </div>
              <div className="px-2">Show All</div>
            </div>
          }
          {allTags.map((tag) => (
            <Tag
              key={tag}
              tag={tag}
              count={tagCount[tag]}
              isSelected={selectedTags.includes(tag)}
              onTagClick={handleTagClick}
            />
          ))}
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {filteredProjects.map((project, index) => (
            <ProjectItem key={index} item={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DigitalPage;
