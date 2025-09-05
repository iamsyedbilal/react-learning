import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

function Header() {
  const [btnstate, BtnState] = useState("Login");

  function btnClick(params) {
    btnstate === "Login" ? BtnState("Logout") : BtnState("Login");
  }

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Conatct</li>
          <li>Cart</li>
          <button className="login-btn" onClick={btnClick}>
            {btnstate}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
