import { CDN_URL } from "../utils/constants";

function ResturantCard(props) {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;

  return (
    <div className="w-64 p-4 bg-white rounded-2xl shadow-md hover:shadow-lg  cursor-pointer transition">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />
      <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
      <h4 className="text-sm text-gray-600 truncate">{cuisines.join(", ")}</h4>
      <h4 className="text-sm text-gray-700">{avgRating} ⭐</h4>
      <h4 className="text-sm text-gray-700">{costForTwo}</h4>
      <h4 className="text-sm text-gray-600">
        Delivery Time:{" "}
        <span className="font-medium text-gray-800">
          {sla.deliveryTime} min
        </span>
      </h4>
    </div>
  );
}

export default ResturantCard;
