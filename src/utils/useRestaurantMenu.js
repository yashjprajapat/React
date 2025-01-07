import { useState, useEffect } from "react";
import { MENU_API } from "./urls";

const useRestaurantMenu = (resId) =>{
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        const fetchData = async()=>{
            const data = await fetch(MENU_API+resId);
            const json = await data.json();
            setResInfo(json.data);
        };
        fetchData();
        },[]);
return resInfo;
};

export default useRestaurantMenu;