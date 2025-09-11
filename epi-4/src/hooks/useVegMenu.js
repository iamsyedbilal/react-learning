import { useMemo, useState } from "react";

function useVegMenu(resInfo) {
  const [vegMenu, setVegMenu] = useState(false);

  const { itemCards = [] } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card || {};

  const filteredItems = useMemo(() => {
    return vegMenu
      ? itemCards.filter((item) => item?.card?.info?.isVeg)
      : itemCards;
  }, [vegMenu, itemCards]);

  return { vegMenu, setVegMenu, filteredItems };
}

export default useVegMenu;
