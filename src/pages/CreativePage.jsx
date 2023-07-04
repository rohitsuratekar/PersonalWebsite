import { useSelector } from "react-redux";

const CreativePage = () => {
  const selector = useSelector((state) => state.art);
  return (
    <>
      <div>
        {selector.sections.map((item, index) => (
          <div key={index}>{item.title}</div>
        ))}
      </div>
    </>
  );
};

export default CreativePage;
