/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import SearchIcon from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/location.data";
import { useDebounce } from "../../hooks";

export default function Search() {
    const { selectedLocation, setSelectedLocation } = useContext(LocationContext);
    const [searchTerm, setSearchTerm] = useState("");
    const doSearch = useDebounce((term) => {
        const fetchedLocation = getLocationByName(term);
        setSelectedLocation({ ...fetchedLocation });
    },5000);

    const handleSubmit = (e) => {
        e.preventDefault();
        const fetchedLocation = getLocationByName(searchTerm);
        setSelectedLocation({ ...fetchedLocation });
    }
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        doSearch(e.target.value);
    }
   
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <input
                    value={searchTerm}
                    onChange={handleChange}
                    className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search"
                    placeholder="Search Location"
                    required
                />
                <button type="submit">
                    <img src={SearchIcon} alt="Search" />
                </button>
            </div>
        </form>
    );
}
