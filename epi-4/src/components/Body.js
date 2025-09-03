import { useState } from "react";
import resturantData from "../utils/mockData";
import ResturantCard from "./ResturantCart";

function Body() {
  const [listOfResturants, setListOfResturants] = useState(resturantData);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={function () {
            const filteredList = resturantData.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfResturants(filteredList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {listOfResturants.map((restaurant) => {
          return (
            <ResturantCard key={restaurant.data.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
}

export default Body;
