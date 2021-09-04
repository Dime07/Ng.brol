import Logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function Navbar() {
  return (
    <div className="Navbar bg-main-color py-3.5 px-10 flex justify-between">
      <img className="w-100 h-50" src={Logo} alt="logo ng.brol" />
      <div className="text-white md:flex hidden justify-center">
        <Link to="/" className="p-2 mr-10">
          Home
        </Link>
        <Link to="/messages" className="p-2 mr-10">
          Messages
        </Link>
        <Button>Login</Button>
      </div>
    </div>
  );
}
