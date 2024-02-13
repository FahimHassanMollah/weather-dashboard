/* eslint-disable react/prop-types */
import { FavouriteContext } from "../context";
import { useLocalStorage } from "../hooks";

const FavouriteProvider = ({ children }) => {

   const [favourite, setFavourite] = useLocalStorage("favourites", []);

   const addToFavourites = (latitude,longitude,location) => {
     setFavourite((oldFavourites)=>[...oldFavourites,{latitude,longitude,location}]);
   }
   const removeFromFavourites = (location) => {
    setFavourite((oldFavourites) => oldFavourites.filter((favourite)=>favourite.location!==location));
   }
   
    return (
        <FavouriteContext.Provider value={{favourite,addToFavourites,removeFromFavourites}}>
            {children}
        </FavouriteContext.Provider>
    )
}
export default FavouriteProvider;