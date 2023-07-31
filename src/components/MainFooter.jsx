import { Link } from "react-router-dom";

const MainFooter = () => {
  return (
    <>
      <footer className="bg-background-100 py-4 text-center text-xs text-background-900">
        <span>© {new Date().getFullYear()} Rohit Suratekar.</span>
        <span className="visible sm:hidden"><br/></span>
        <span>
          {" Please refer to the "}
          <Link to={"/credits"} className="text-link">
            Credits
          </Link>
          {" for license information."}
        </span>
      </footer>
    </>
  );
};

export default MainFooter;
