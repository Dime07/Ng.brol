import Nlogo from '../Images/N.png';
import Chaticon from '../Images/Chat.png'
import Contacticon from '../Images/contact.png'
import Exiticon from '../Images/exit.png'
import { Link } from "react-router-dom";

export default function Sidebar() {
    return(
        <div className="sidebar flex flex-col justify-between h-screen py-5 px-4 bg-grey-color w-max rounded-r-3xl sticky z-10">
            <div className="top">
                <img className="w-2/4 mx-auto" src={Nlogo} alt="logo N"/>
            </div>
            <div className="center">
                <Link to="/chat">
                    <img className="mb-7 hover:opacity-50" src={Chaticon} alt="logo N"/>
                </Link>
                <Link to="/contact">
                    <img className="hover:opacity-50" src={Contacticon} alt="logo N"/>
                </Link>
                
                
            </div>
            <div className="bottom">
                <img className="w-3/4 hover:opacity-50" src={Exiticon} alt="logo N"/>
            </div>
        </div>
    )
}