import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useUserOnlineStatus from "../hooks/useUserOnlineStatus";

function Header() {
  const [btnstate, BtnState] = useState("Login");

  function btnClick(params) {
    btnstate === "Login" ? BtnState("Logout") : BtnState("Login");
  }

  const onlineStatus = useUserOnlineStatus();

  return (
    <div className="header">
      <div className="logo">
        <Link to={"/"}>
          <img src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Conatct</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <button className="login-btn" onClick={btnClick}>
            {btnstate}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
