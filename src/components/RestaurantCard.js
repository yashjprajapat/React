import { useContext } from "react";
import { CDN_URL } from "../utils/urls";


 
const RestaurantCard = (props) => {
    const { resData } = props;
    let link = resData.info;
    return (
      <div className="res-card m-2 p-2 w-56 bg-gray-300 hover:bg-gray-400 hover:scale-105 duration-300">
        <img
          className="w-56 h-56"
          alt="res-logo"
          src={ CDN_URL + link.cloudinaryImageId }></img>
        <h3 className="font-bold"> {link.name} </h3>
        <h4 className="font-semibold">{link.locality}</h4>
        <h5 className="font-mono break-all ">{link.cuisines+ ' '}</h5>
        <h5>{link.avgRating + " stars"}</h5>
        <h5>{link.sla.deliveryTime + " minutes"}</h5>
        
      </div>
    );
  };

export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    const disc = props.resData.info.aggregatedDiscountInfoV3.header+" "+props.resData.info.aggregatedDiscountInfoV3.subHeader ;
    return(     
      <div>
        <label className="absolute bg-black text-white text-sm m-2 p-2 rounded-lg">{disc}</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
};

export default RestaurantCard;