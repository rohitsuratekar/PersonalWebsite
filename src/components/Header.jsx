import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
    const goHome = () => {
        navigate("/");
    }
    return (
        <div className="flex justify-center items-center h-20">
           <span className="font-sans text-2xl antialiased cursor-pointer" onClick={goHome}>Rohit Suratekar</span>
        </div>
    )
}

export default Header;