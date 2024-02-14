/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { FavouriteContext, LocationContext } from "../../context";

export default function FavouriteListModal({setShowFavModal}) {
    const {favourite} = useContext(FavouriteContext);
    const { selectedLocation, setSelectedLocation } = useContext(LocationContext);
    const handleSelectLocation = (locationObj) => {
        setSelectedLocation(locationObj);
        setShowFavModal();
    }

    return (
        <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute -right-6 top-11 text-black shadow-lg ">
            <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
            <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
                {
                    favourite?.length > 0 ? favourite.map((fav, index) => (
                        <li key={index} className="hover:bg-gray-200">
                            <button onClick={()=> handleSelectLocation(fav)}>{fav.location}</button>
                        </li>
                    )) : <li className="hover:bg-gray-200">No Favourite Locations</li>
                }
            </ul>
        </div>
    );
}
