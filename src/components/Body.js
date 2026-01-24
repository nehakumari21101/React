// import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import mockdata from "../utils/mockdata";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const [searchText, setSearchText] = useState("");

  
  // console.log("res before ", restaurantList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {

      const data = await fetch(
        "https://www.swiggy.com/mapi/restaurants/list/v5?lat=28.4640087729816&lng=77.02618695368315",
      );

      const json = await data.json();
      console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

      setRestaurantList(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants 
      );
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  
  // console.log("res after ", restaurantList);

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">

        <div>

          <input type="text" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
          }}/>

          <button onClick={()=>{

            const filteredRestaurant = restaurantList.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))

            setRestaurantList(filteredRestaurant);
          }}>search</button>

        </div>

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
        {restaurantList.map((rest) => (
          <RestaurantCard resData={rest.info} key={rest.info.id}/>
          // console.log(rest.info)
        ))}
      </div>
    </div>
  );
};

export default Body;
