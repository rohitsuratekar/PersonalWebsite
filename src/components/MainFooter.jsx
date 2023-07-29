import { Link } from "react-router-dom";

const MainFooter = () => {
  return (
    <>
      <footer className="bg-background-100 py-4 text-center text-xs text-background-900">
        <p>
          © {new Date().getFullYear()} Rohit Suratekar.
          {" Please refer to the "}
          <Link to={"/credits"} className="text-link">
            Credits
          </Link>
          {" for license information."}
        </p>
      </footer>
    </>
  );
};

export default MainFooter;
