import { useSelector } from "react-redux";
import allDigitalArt from "@/components/DigitalArtExporter";
import { useState } from "react";

const Tag = ({ tag, isSelected, onTagClick }) => {
  return (
    <button
      className={`tag-button ${isSelected ? "tag-selected" : ""}`}
      onClick={() => onTagClick(tag)}
    >
      {tag}
    </button>
  );
};

const ProjectItem = ({ item }) => {
  return <div>{item.t}</div>;
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
        <div>
          {selectedTags.length > 0 && (
            <button onClick={handleShowAll}>Show All</button>
          )}
        </div>
        <div>
          {allTags.map((tag) => (
            <Tag
              key={tag}
              tag={tag}
              isSelected={selectedTags.includes(tag)}
              onTagClick={handleTagClick}
            />
          ))}
        </div>
        <div>
          {filteredProjects.map((project, index) => (
            <ProjectItem key={index} item={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DigitalPage;
