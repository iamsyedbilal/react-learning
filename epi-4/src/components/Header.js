import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useUserOnlineStatus from "../hooks/useUserOnlineStatus";

function Header() {
  const [btnstate, BtnState] = useState("Login");

  function btnClick() {
    btnstate === "Login" ? BtnState("Logout") : BtnState("Login");
  }

  const onlineStatus = useUserOnlineStatus();

  return (
    <div className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="w-24">
        <Link to={"/"}>
          <img src={LOGO_URL} alt="Logo" className="w-full h-auto" />
        </Link>
      </div>

      {/* Navigation */}
      <div>
        <ul className="flex items-center space-x-6 text-gray-700 font-medium">
          <li>
            <Link to={"/"} className="hover:text-blue-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="hover:text-blue-500 transition">
              About Us
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="hover:text-blue-500 transition">
              Contact
            </Link>
          </li>
          <li>
            <Link to={"/cart"} className="hover:text-blue-500 transition">
              Cart
            </Link>
          </li>
          <li>
            <Link to={"/grocery"} className="hover:text-blue-500 transition">
              Grocery
            </Link>
          </li>
          <li className="flex items-center">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li>
            <button
              className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
              onClick={btnClick}
            >
              {btnstate}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
