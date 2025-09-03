import { CDN_URL } from "../utils/constants";

function ResturantCard(props) {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} alt={name} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>
        {deliveryTime} <span>minutes</span>
      </h4>
    </div>
  );
}

export default ResturantCard;
