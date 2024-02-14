import { useContext, useEffect } from "react";
import { useState } from "react";
import { LocationContext } from "../context";

const useWeather = () => {

    const [weatherData, setWeatherData] = useState({
        location: "",
        climate: "",
        temperature: "",
        maxTemperature: "",
        minTemperature: "",
        humidity: "",
        cloudPercentage: "",
        wind: "",
        time: "",
        longitude: "",
        latitude: "",
    });

    const [loading, setLoading] = useState({
        state: false,
        message: "",
    });
    const [error, setError] = useState(null);
    const {selectedLocation} = useContext(LocationContext);
    const {latitude, longitude} = selectedLocation;  
   
    useEffect(() => {
        const fetchWeatherData = async (latitude, longitude) => {
            setLoading({ state: true, message: "Finding Location" });
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch weather data : ${response.status}`);
                }
                const data = await response.json();
                setWeatherData((currentWeatherData) => {
                    return {
                        ...currentWeatherData,
                        location: data?.name,
                        climate: data?.weather[0]?.main,
                        temperature: data?.main?.temp,
                        maxTemperature: data?.main?.temp_max,
                        minTemperature: data?.main?.temp_min,
                        humidity: data?.main?.humidity,
                        cloudPercentage: data?.clouds?.all,
                        wind: data?.wind?.speed,
                        time: data?.dt,
                        longitude: longitude,
                        latitude: latitude,
                    }
                });
            } catch (error) {
                setError(error);
            } finally {
                setLoading({ state: false, message: "" });
            }
        }
        setLoading({ state: true, message: "Fetching location" });
        if (latitude && longitude) {
            fetchWeatherData(latitude, longitude);
            return;           
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                fetchWeatherData(position.coords.latitude, position.coords.longitude);
            });
        }

       

        return () => {

        }
    }, [latitude, longitude])

    return { weatherData, loading, error };

};

export default useWeather;
