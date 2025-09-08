import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MENU_API, CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

function ResturantMenu(params) {
  const [resInfo, setResInfo] = useState(null);
  const [vegMenu, setVegMenu] = useState(false);

  const { resId } = useParams();

  useEffect(function (params) {
    fetchApiData();
  }, []);

  async function fetchApiData(params) {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  }

  if (resInfo === null) return <Shimmer />;

  const { offers } = resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle;

  //   console.log(offers);

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  //   console.log(itemCards);

  const filteredItems = vegMenu
    ? itemCards.filter((item) => item?.card?.info?.isVeg)
    : itemCards;

  const {
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    sla,
    costForTwoMessage,
  } = resInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h1>{name}</h1>
        <h6>{cuisines.join(", ")}</h6>
        <img src={CDN_URL + cloudinaryImageId} alt={name} />
        <div className="menu-info">
          <h6>⭐ {avgRating}</h6>
          <p>{costForTwoMessage}</p>
          <h6>{sla?.deliveryTime} Mins</h6>
        </div>
      </div>
      <h2>Offers</h2>
      <div>
        {offers.map((item) => (
          <div key={item?.info?.offerIds}>
            <h1>{item.info.couponCode}</h1>
          </div>
        ))}
      </div>
      <h2>Recommendations</h2>
      <div className="filter-section">
        <label htmlFor="veg-filter">For Veg</label>
        <input
          type="checkbox"
          id="veg-filter"
          onChange={(e) => setVegMenu(e.target.checked)}
        />
      </div>
      <div className="items-container">
        {filteredItems.length === 0 ? (
          <h1>No Veg Items Available</h1>
        ) : (
          filteredItems.map((item) => (
            <div key={item?.card?.info?.id} className="item-card">
              <div>
                <h2>
                  {item?.card?.info?.name}
                  {item?.card?.info?.isVeg ? (
                    <span style={{ color: "green" }}>●</span>
                  ) : (
                    <span style={{ color: "red" }}>●</span>
                  )}
                </h2>
                <h3>
                  ₹
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </h3>
                <p>{item?.card?.info?.description}</p>
              </div>
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                alt={item?.card?.info?.name}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ResturantMenu;
