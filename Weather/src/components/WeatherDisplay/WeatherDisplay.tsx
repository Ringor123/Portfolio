import { Weather } from "../../types"
import { parseTemp } from "../../utils"

type WeatherDisplayProps = {
  weather: Weather
}
export default function WeatherDisplay({weather}: WeatherDisplayProps) {
  
  
  return (
    <div>
    <p>{weather.name}</p>
    <p>{parseTemp(weather.main.temp)} ºC</p>
    <p>{parseTemp(weather.main.temp_min)} ºC</p>
    <p>{parseTemp(weather.main.temp_max)} ºC</p>
    </div>
  )
}
