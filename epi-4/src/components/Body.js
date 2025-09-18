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

  useEffect(() => {
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
      <h1 className="text-center mt-8 text-red-600 text-lg font-medium">
        ⚠️ Looks like you are not connected to the internet
      </h1>
    );
  }

  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Search Section */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for food..."
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => {
            const searchedFilteredResturant = listOfResturants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(searchedFilteredResturant);
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </div>

      {/* Filter Button */}
      <div className="mb-6">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          onClick={() => {
            const filteredList = listOfResturants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          ⭐ Top Rated Restaurants
        </button>
      </div>

      {/* Restaurants Grid */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {filteredRestaurant.length === 0 ? (
          <h2 className="col-span-full text-center text-gray-600">
            No restaurants found 🚫
          </h2>
        ) : (
          filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/resturant/" + restaurant?.info?.id}
            >
              <ResturantCard resData={restaurant.info} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default Body;
