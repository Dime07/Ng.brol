
import Logo from "../Images/logo.png"
import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <div className="Navbar bg-main-color py-3.5 px-10 flex justify-between">
            <img className="w-100 h-50" src={Logo} alt="logo ng.brol"/>
            <div className="text-white flex justify-center">
                <Link to="/" className="p-2 mr-10">
                    Home
                </Link>
                <Link to="/messages" className="p-2 mr-10">
                    Messages
                </Link>
                <button>Login</button>
            </div>
        </div>  
    )
}