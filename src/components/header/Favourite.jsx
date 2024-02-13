import React from "react";
import HeartIcon from '../../assets/heart.svg';

// eslint-disable-next-line react/prop-types
export default function Favourite({setShowFavModal}) {
    return (
        <>
            <div onClick={setShowFavModal} className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
                <img src={HeartIcon} alt="heart" />
                <span>Favourite Locations</span>
            </div>
        </>
    );
}
