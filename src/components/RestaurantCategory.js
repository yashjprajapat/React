import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    
    // const [showList, setShowList] = useState(true);
    
    const handleClick = () => {
        setShowIndex();
        // showList ? setShowList(false) : setShowList(true);
    };
    
    return(
    <div>
        <div className="w-6/12 mx-auto my-4 p-4 bg-gray-100 shadow-lg ">
            <div className="flex justify-between hover:cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>▼</span>
            </div>
            { showItems && <ItemList items={data.itemCards}/> }
        </div>
        
    </div>
    );
}
export default RestaurantCategory;