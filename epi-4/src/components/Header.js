import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

function Header() {
  const [btnstate, BtnState] = useState("Login");

  function btnClick(params) {
    btnstate === "Login" ? BtnState("Logout") : BtnState("Login");
  }

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
          <button className="login-btn" onClick={btnClick}>
            {btnstate}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
