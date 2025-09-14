import { useEffect, useState } from "react";
import { RESTURANT_URL } from "../utils/constants";
import ResturantCard from "./ResturantCart";
import useUserOnlineStatus from "../hooks/useUserOnlineStatus";
import { Link } from "react-router";
import Shimmer from "./Shimmer";

function Body() {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(function () {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTURANT_URL);

    const jsonData = await data.json();

    const restaurants =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setListOfResturants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  const onlineStatus = useUserOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
        ⚠️ Looks like you are not connected to the internet
      </h1>
    );
  }

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
              <Link
                key={restaurant.info.id}
                to={"/resturant/" + restaurant?.info?.id}
              >
                <ResturantCard resData={restaurant.info} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Body;
