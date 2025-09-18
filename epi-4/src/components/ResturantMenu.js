import { useParams } from "react-router";
import { CDN_URL } from "../utils/constants";
import ShimmerMenu from "./ShimmerMenu";
import useResturantMenu from "../hooks/useResturantMenu";
import useVegMenu from "../hooks/useVegMenu";

function ResturantMenu() {
  const { resId } = useParams();

  const resInfo = useResturantMenu(resId);

  const { vegMenu, setVegMenu, filteredItems } = useVegMenu(resInfo);

  if (resInfo === null) return <ShimmerMenu />;

  const { offers } = resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle;

  const {
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    sla,
    costForTwoMessage,
  } = resInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Restaurant Info */}
      <div className="flex  items-center gap-6 border-b pb-6">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          className="w-32 h-32 object-cover rounded-lg shadow-md"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
          <p className="text-gray-600">{cuisines.join(", ")}</p>
          <div className="flex gap-4 text-sm text-gray-700 mt-2">
            <span>⭐ {avgRating}</span>
            <span>{costForTwoMessage}</span>
            <span>🚴 {sla?.deliveryTime} mins</span>
          </div>
        </div>
      </div>

      {/* Offers */}
      {offers?.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Offers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {offers.map((item) => (
              <div
                key={item?.info?.offerIds}
                className="p-4 border rounded-lg shadow-sm bg-gray-50"
              >
                <h4 className="font-bold text-blue-600">
                  {item.info.couponCode}
                </h4>
                <p className="text-gray-600 text-sm">{item.info.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Menu */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Recommendations</h2>
      <div className="flex items-center gap-2 mb-6">
        <input
          type="checkbox"
          id="veg-filter"
          className="w-4 h-4 accent-green-600"
          checked={vegMenu}
          onChange={(e) => setVegMenu(e.target.checked)}
        />
        <label htmlFor="veg-filter" className="text-gray-700">
          Veg Only
        </label>
      </div>

      <div className="grid gap-6">
        {filteredItems.length === 0 ? (
          <h3 className="text-center text-red-500 font-medium">
            No Veg Items Available 🚫
          </h3>
        ) : (
          filteredItems.map((item) => (
            <div
              key={item?.card?.info?.id}
              className="flex justify-between items-start gap-4 border-b pb-4"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                  {item?.card?.info?.name}
                  {item?.card?.info?.isVeg ? (
                    <span className="text-green-600">●</span>
                  ) : (
                    <span className="text-red-600">●</span>
                  )}
                </h3>
                <p className="text-sm font-medium text-gray-700 mt-1">
                  ₹
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {item?.card?.info?.description}
                </p>
              </div>
              {item?.card?.info?.imageId && (
                <img
                  className="w-28 h-24 object-cover rounded-lg shadow-sm"
                  src={CDN_URL + item?.card?.info?.imageId}
                  alt={item?.card?.info?.name}
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ResturantMenu;
