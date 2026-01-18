// import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);

  return (
    <div className="body">
      <div className="search">
        <button
          onClick={() => {
            setRestaurantList(
              restaurantList.filter((res) => res.card.card.info.avgRating >= 4),
            );
          }}
        >
          TopRatedRestaurant
        </button>
      </div>

      <div className="rest-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
