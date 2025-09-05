import { CDN_URL } from "../utils/constants";

function ResturantCard(props) {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;

  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} alt={name} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>
        Delivery Time <span>{sla.deliveryTime} minutes</span>
      </h4>
    </div>
  );
}

export default ResturantCard;
