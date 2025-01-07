import { useState, useEffect } from "react";
import RestaurantCard, { withDiscountLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_API } from "../utils/urls";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [RestaurantList, setRestaurantList] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);

  const [searchTxt, setSearchTxt] = useState("");

  const RestaurantCardDisct = withDiscountLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);
    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === "false")
    return (
      <h1>
        You're not connected to the Internet! Please check your Internet
        Connection.
      </h1>
    );

  return RestaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className=" p-2 m-2 border-2 rounded-xl border-black w-60"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        ></input>
        <button
          className="search-btn p-2 m-2 shadow-xl bg-green-200 rounded-lg border-solid border-2 border-black"
          onClick={() => {
            const filteredResList = RestaurantList.filter((res) =>
              res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
            );
            setFilteredRes(filteredResList);
          }}
        >
          Search
        </button>
        <button
          className="top-res-btn bg-white to-blue-400 border-x border-y border-blue-800 m-2 p-2"
          onClick={() => {
            const topResList = RestaurantList.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredRes(topResList);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap flex-row justify-center">
        {filteredRes.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            {res.info.aggregatedDiscountInfoV3  ? (
              <RestaurantCardDisct resData={res}/>
            ) : (
              <RestaurantCard resData={res}/>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
