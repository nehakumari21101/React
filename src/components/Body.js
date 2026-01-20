// import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?lat=28.4640087729816&lng=77.02618695368315&restaurantId=",);

      const json = await data.json();

      console.log

      setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [],);

    } 
    catch (error) {
      console.error("Fetch error:", error);
    }

  };

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <button
          onClick={() => {
            setRestaurantList(
              restaurantList.filter((res) => res.info.avgRating >= 4),
            );
          }}
        >
          TopRatedRestaurant
        </button>
      </div>

      <div className="rest-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
