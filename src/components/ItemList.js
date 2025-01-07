import { CDN_URL } from "../utils/urls";

const ItemList = ({ items }) => {
  return (
    <div className="">
      {items.map((item) => (
        <div className="m-4 p-2 border-gray-300 border-b-2 flex justify-between" key={item.card.info.id}>
          <div className="w-9/12 text-left">
          <div className="py-2">
            <span className="font-semibold">{item?.card?.info?.name} - ₹</span>
            <span className="text-xl">{item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</span>
          </div>
          <p className="text-xs text-gray-500 italic">{item?.card?.info?.description}</p>
        </div>
        <div className="w-3/12 p-4">
        <div className="absolute">
          <button className="p-2 rounded-md bg-white text-green-700 font-bold text-lg shadow-lg">Add +</button>
          </div>
          <img className="w-full rounded-md mr-4 mb-4" src={CDN_URL + item.card.info.imageId} alt="" srcset="" />
        </div>
    </div>
      ))}
    </div>
  );
};
export default ItemList;
