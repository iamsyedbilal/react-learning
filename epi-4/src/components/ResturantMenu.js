import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MENU_API, CDN_URL } from "../utils/constants";
import ShimmerMenu from "./ShimmerMenu";

function ResturantMenu() {
  const [resInfo, setResInfo] = useState(null);
  const [vegMenu, setVegMenu] = useState(false);

  const { resId } = useParams();

  useEffect(() => {
    fetchApiData();
  }, []);

  async function fetchApiData() {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  }

  if (resInfo === null) return <ShimmerMenu />;

  const { offers } = resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

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
      {/* Restaurant Info */}
      <div className="menu-header">
        <img src={CDN_URL + cloudinaryImageId} alt={name} />
        <div className="menu-details">
          <h1>{name}</h1>
          <p className="cuisines">{cuisines.join(", ")}</p>
          <div className="menu-info">
            <span>⭐ {avgRating}</span>
            <span>{costForTwoMessage}</span>
            <span>Delivery Time {sla?.deliveryTime} Mins</span>
          </div>
        </div>
      </div>

      {/* Offers */}
      {offers?.length > 0 && (
        <div className="offers-section">
          <h2>Offers</h2>
          <div className="offers-container">
            {offers.map((item) => (
              <div key={item?.info?.offerIds} className="offer-card">
                <h4>{item.info.couponCode}</h4>
                <p>{item.info.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Menu */}
      <h2 className="section-title">Recommendations</h2>
      <div className="filter-section">
        <label htmlFor="veg-filter">Veg Only</label>
        <input
          type="checkbox"
          id="veg-filter"
          onChange={(e) => setVegMenu(e.target.checked)}
        />
      </div>

      <div className="items-container">
        {filteredItems.length === 0 ? (
          <h3>No Veg Items Available 🚫</h3>
        ) : (
          filteredItems.map((item) => (
            <div key={item?.card?.info?.id} className="item-card">
              <div className="item-text">
                <h3>
                  {item?.card?.info?.name}{" "}
                  {item?.card?.info?.isVeg ? (
                    <span className="veg-dot">●</span>
                  ) : (
                    <span className="nonveg-dot">●</span>
                  )}
                </h3>
                <p className="price">
                  ₹
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </p>
                <p className="description">{item?.card?.info?.description}</p>
              </div>
              <img
                className="item-img"
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
