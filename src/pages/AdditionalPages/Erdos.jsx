import erdosImg from "@/assets/img/erdos.png";

const ErdosPage = () => {
  return (
    <>
      <div className="p-5 px-8 grid grid-cols-1">
        <div className="text-xs text-secondary mb-3">Erdős number</div>
        <div>
          As per{" "}
          <a
            href="https://en.wikipedia.org/wiki/Erd%C5%91s_number"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Wikipedia
          </a>
          , the Erdős number describes the collaborative distance between
          mathematician Paul Erdős and another person, as measured by authorship
          of mathematical papers. Here&#39;s my connection to Erdős
        </div>
        <div className="mt-4">
          <img src={erdosImg} alt="Erdos Number" />
        </div>
      </div>
    </>
  );
};

export default ErdosPage;
