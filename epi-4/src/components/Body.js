import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCart";
import Shimmer from "./Shimmer";

function Body() {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(function () {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    const restaurants =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setListOfResturants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search For Food.."
          className="search-input"
        />
        <button
          onClick={() => {
            const searchedFilteredResturant = listOfResturants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(searchedFilteredResturant);
          }}
          className="search-btn"
        >
          Submit
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={function () {
            const filteredList = listOfResturants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.length === 0 ? (
          <h2>No restaurants found 🚫</h2>
        ) : (
          filteredRestaurant.map((restaurant) => {
            return (
              <ResturantCard
                key={restaurant.info.id}
                resData={restaurant.info}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default Body;
