import { useSelector } from "react-redux";
import allDigitalArt from "@/components/DigitalArtExporter";
import { useState } from "react";
import { FullscreenImagePopup } from "@/components/CommonComponents";
import SubNavBar from "@/components/SubNavBar";

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

const ProjectItem = ({ item, openPopup }) => {
  const takeAction = (vals) => {
    if (vals.h.startsWith("http")) {
      window.open(vals.h, "_blank");
    } else {
      openPopup(vals.h);
    }
  };
  return (
    <>
      <div className="flex flex-col">
        <div>
          {" "}
          <img src={item.i} />{" "}
        </div>
        <div className=" bg-background-50 p-2 font-medium text-sm shadow-sm">
          {item.t}
        </div>
        <div className=" text-xs bg-background-100 p-2">{item.d}</div>
        <div>
          <div
            className="text-xs bg-background-50 text-center text-link py-1 cursor-pointer"
            onClick={() => takeAction(item)}
          >
            {item.l}
          </div>
        </div>
      </div>
    </>
  );
};

const DigitalPage = () => {
  const mainSelector = useSelector((state) => state.art);
  const selector = mainSelector.digital;
  const crumbs = mainSelector.crumbs;

  const [selectedTags, setSelectedTags] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [clickedImage, setClickedImage] = useState(null);

  const openPopup = (image) => {
    setClickedImage(image);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setClickedImage(null);
  };

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
      <SubNavBar itemList={crumbs} />
      <div className="p-5 px-8 grid grid-cols-1">
        <div className="text-sm text-secondary mb-2">Digital Art Fusion</div>
        <div>{selector.summary}</div>
        <div className="text-sm text-secondary mt-3">Tools and Techniques</div>
        <ul className="m-3" style={{ listStyleType: "square" }}>
          {selector.skills.map((item, key) => (
            <li key={key}>
              <span className="text-sm">{item.title}</span> {": "}{" "}
              <span className="text-xs text-background-900">{item.desc}</span>
            </li>
          ))}
        </ul>
        <div className="text-sm text-secondary">Gallery of Curated Work</div>
        <div className="flex flex-wrap gap-2 mt-4 mb-3">
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
        <div className="mb-2 text-xs text-background">
          [ Showing {filteredProjects.length} out of {allDigitalArt.length}{" "}
          projects. Refine your view by selecting specific Tags.]
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xxl:grid-cols-4 gap-3">
          {filteredProjects.map((project, index) => (
            <ProjectItem key={index} item={project} openPopup={openPopup} />
          ))}
        </div>
        {isOpen && clickedImage && (
          <FullscreenImagePopup image={clickedImage} onClose={closePopup} />
        )}
      </div>
    </>
  );
};

export default DigitalPage;
