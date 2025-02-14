import axios from "axios";
import { useState } from "react";
import { SearchType } from "../types";
import { z } from "zod";
// import * as v from 'valibot'

export default function useWeather() {
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


  //Zod
  
  const WeatherSchema = z.object({
    name: z.string(),
    main: z.object({
      temp: z.number(),
      temp_max: z.number(),
      temp_min: z.number()
    })
  })
  
  type Weather = z.infer<typeof WeatherSchema>


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

  const [weather, setWeather] = useState<Weather>({
    name: '',
    main: {
      temp: 0,
      temp_min: 0,
      temp_max: 0
    }
  })

  const fetchWeather = async (search: SearchType) => {
    const apiKey = import.meta.env.VITE_API_KEY;

    try {
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city}&appid=${apiKey}`;
      const { data: geoResult } = await axios.get(geoUrl);

      const lat = geoResult[0].lat;
      const lon = geoResult[0].lon;

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

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
      
      const {data: weatherResult} = await axios.get(weatherUrl)
      const result = WeatherSchema.safeParse(weatherResult)
      if(result.success) {
        console.log(result)
        setWeather(result.data)
      } else {
        console.log('Error ')
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
    }
  };

  return {
    fetchWeather,
    weather
  };
}
