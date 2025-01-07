import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/urls";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  let [btnName, setbtnName] = useState("Login");
  
  const {currentUser} = useContext(UserContext);

  const onlineStatus = useOnlineStatus();
    return (
      <div className="flex bg-pink-200 shadow-lg mb-2">
        <div className="logo-container w-1/12">
          <img className="w-52"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items place-content-center w-11/12 ">
          <ul className="flex m-5 p-5 text-2xl place-self-end">
            <li className="m-2 p-2 font-semibold border-double border-l border-gray-600"> Online Status : {onlineStatus===true ? '✅' : '🔴'}</li>
            <li className="m-2 p-2 font-semibold border-double border-l border-gray-600"><Link to="/">Home</Link></li>
            <li className="m-2 p-2 font-semibold border-double border-l border-gray-600"><Link to="/about">About Us</Link></li>
            <li className="m-2 p-2 font-semibold border-double border-l border-gray-600"><Link to="/contact">Contact Us</Link></li>
            <li className="m-2 p-2 font-semibold border-double border-l border-gray-600"><Link to="/grocery">Grocery</Link></li>
            <li className="m-2 p-2 font-semibold border-double border-l border-gray-600">Cart</li>
            <button className="btn-log font-extrabold m-2 p-2 border border-double border-gray-600" onClick={()=>{
              btnName==="Login" ? setbtnName("Logout") : setbtnName("Login")}
            }>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;