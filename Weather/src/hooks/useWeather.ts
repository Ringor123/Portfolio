import axios from "axios";
import { useState } from "react";
import { SearchType } from "../types";
import { z } from "zod";
// import * as v from 'valibot'

//Zod

/**
 * Schema definition for weather data validation using Zod.
 * Ensures type safety for the weather data received from the API.
 */
const WeatherSchema = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    temp_max: z.number(),
    temp_min: z.number(),
    humidity: z.number(),
  }),
  weather: z.array(
    z.object({
      main: z.string(),
      icon: z.string(),
      description: z.string(),
    })
  ),
});

/**
 * Initial state for weather data.
 * Used to reset the weather state and provide default values.
 */
const initialState = {
  name: "",
  main: {
    temp: 0,
    temp_min: 0,
    temp_max: 0,
    humidity: 0,
  },
  weather: [
    {
      main: "",
      icon: "",
      description: "",
    },
  ],
};

export type Weather = z.infer<typeof WeatherSchema>;

//Type Guard
//
// const isWeatherResponse = (weather: unknown) : weather is Weather => {
//   return (
//     Boolean(weather) &&
//     typeof weather === 'object' &&
//     typeof (weather as Weather).name === 'string' &&
//     typeof (weather as Weather).main.temp === 'number' &&
//     typeof (weather as Weather).main.temp_max === 'number' &&
//     typeof (weather as Weather).main.temp_min === 'number'
//   )
// }
//

//Valibot
//
// const WeatherSchema = v.object({
//   name: v.string(),
//   main: v.object({
//     temp: v.number(),
//     temp_max: v.number(),
//     temp_min: v.number()
//   })
// })
//
// type Weather = v.InferOutput<typeof WeatherSchema>

/**
 * Custom hook for managing weather data fetching and state.
 * Features:
 * - Fetches weather data using OpenWeatherMap API
 * - Handles loading and error states
 * - Validates API responses using Zod schema
 * - Manages city not found scenarios
 * 
 * @returns {Object} Object containing:
 *  - fetchWeather: Function to fetch weather data
 *  - weather: Current weather data
 *  - loading: Loading state
 *  - notFound: City not found state
 */
export default function useWeather() {

  const [weather, setWeather] = useState<Weather>(initialState);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false)

  const fetchWeather = async (search: SearchType) => {
    const country = search.country;
    const city = search.city;

    const apiKey = import.meta.env.VITE_API_KEY;

    setLoading(true);
    setWeather(initialState);
    setNotFound(false)

    try {
      const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=${apiKey}`;
      const { data: geoResult } = await axios.get(geoUrl);

      if (!geoResult[0]){
        setNotFound(true)
        return
      }
      const lat = geoResult[0].lat;
      const lon = geoResult[0].lon;

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
      console.log(weatherUrl);

      //Cast Type
      //
      // const {data: weatherResult} = await axios.get<Weather>(weatherUrl)
      // console.log(weatherResult.main.temp)
      // console.log(weatherResult.name)

      //Type Guards
      //
      // const {data: weatherResult} = await axios.get(weatherUrl)
      // const result = isWeatherResponse(weatherResult)
      // console.log(result)
      // if (result) {
      //   console.log(weatherResult.name)
      //   console.log(weatherResult.main.temp)
      // }

      // Zod

      const { data: weatherResult } = await axios.get(weatherUrl);
      console.log(weatherResult);
      const result = WeatherSchema.safeParse(weatherResult);
      if (result.success) {
        console.log(result);
        setWeather(result.data);
      } else {
        console.log("Error ");
      }

      //Valibot
      //
      // const {data: weatherResult} = await axios.get(weatherUrl)
      // const result = v.parse(WeatherSchema, weatherResult)
      // if(result) {
      //   console.log(result.name)
      //   console.log(result.main.temp)
      // } else {
      //   console.log('Error...')
      // }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchWeather,
    weather,
    loading,
    notFound
  };
}
