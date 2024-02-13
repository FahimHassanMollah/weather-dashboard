import { useContext, useEffect, useState } from 'react';
import HeartIcon from '../../assets/heart.svg';
import RedHeartIcon from '../../assets/heart-red.svg';
import { FavouriteContext, WeatherContext } from '../../context';

export default function AddToFavourite() {
    const { weatherData } = useContext(WeatherContext);
    const {favourite,addToFavourites,removeFromFavourites} = useContext(FavouriteContext);
    const [isFavourite, setIsFavourite] = useState(false);
   
    const {longitude,latitude,location} = weatherData;
    const handleAddToFavourite = () => {
        const favouriteFound = favourite.find((favourite)=>favourite.location===location);
        if(!favouriteFound){
           addToFavourites(latitude,longitude,location);
        }
        setIsFavourite(!isFavourite);
    }
    useEffect(() => {
        const favouriteFound = favourite.find((favourite)=>favourite.location===location);
        if(favouriteFound){
            setIsFavourite(true);
        }
    }, [favourite,location])
    
    return (
        <div className="md:col-span-2">
            <div className="flex items-center justify-end space-x-6">
                <button onClick={handleAddToFavourite} className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
                    <span>Add to Favourite</span>
                    <img src={isFavourite ? RedHeartIcon : HeartIcon} alt="heart" />
                </button>
            </div>
        </div>
    );
}
