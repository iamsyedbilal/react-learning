import { MENU_API } from "../utils/constants";
import { useEffect, useState } from "react";

function useResturantMenu(resId) {
  const [resInfo, setResInfo] = useState(null);

  useEffect(function () {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    setResInfo(json?.data);
  }

  return resInfo;
}

export default useResturantMenu;
