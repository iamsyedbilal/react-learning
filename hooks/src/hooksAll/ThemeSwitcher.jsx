import { useContext } from "react";
import ThemeContext from "../theme-context";

function ThemeSwitcher() {
  const { isDarkMode, toggle } = useContext(ThemeContext);
  return (
    <button onClick={toggle}>Switch to {isDarkMode ? "Light" : "Dark"}</button>
  );
}

export default ThemeSwitcher;
