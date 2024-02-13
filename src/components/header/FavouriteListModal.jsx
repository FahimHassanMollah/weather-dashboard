import React, { useContext } from "react";
import { FavouriteContext } from "../../context";

export default function FavouriteListModal() {
    const {favourite} = useContext(FavouriteContext);

    return (
        <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute -right-6 top-11 text-black shadow-lg ">
            <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
            <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
                {
                    favourite?.length > 0 ? favourite.map((fav, index) => (
                        <li key={index} className="hover:bg-gray-200">{fav.location}</li>
                    )) : <li className="hover:bg-gray-200">No Favourite Locations</li>
                }
                {/* <li className="hover:bg-gray-200">Dhaka</li>
                <li className="hover:bg-gray-200">Rangpur</li>
                <li className="hover:bg-gray-200">Europe</li> */}
            </ul>
        </div>
    );
}
