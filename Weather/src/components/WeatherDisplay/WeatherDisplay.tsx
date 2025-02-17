/**
 * Component responsible for displaying weather information.
 * Handles different states: loading, not found, and weather display.
 * Shows temperature, weather description, and additional weather details.
 */

import { Weather } from "../../hooks/useWeather";
import { parseTemp } from "../../utils";
import Spinner from "../Spinner/Spinner";
import styles from "./WeatherDisplay.module.css";

/**
 * Props for the WeatherDisplay component
 * @property {Weather} weather - Weather data object containing temperature, description, etc.
 * @property {boolean} loading - Indicates if weather data is being fetched
 * @property {boolean} notFound - Indicates if the requested city was not found
 */
type WeatherDisplayProps = {
  weather: Weather;
  loading: boolean;
  notFound: boolean
};
export default function WeatherDisplay({ weather, loading, notFound }: WeatherDisplayProps) {
  return (
    <div className={styles.weatherCard}>
      {loading ? (
        <div className={styles.spinnerContainer}>
          <Spinner />
        </div>
      ) : notFound ? (
        <h2 className={styles.noWeather}>City not found</h2>
      ) : !weather.name ? (
        <h2 className={styles.noWeather}>Complete the form to see the weather</h2>
      ) : (
        <>
          <h2 className={styles.cityName}>{weather.name}</h2>
          <div className={styles.mainInfo}>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt={weather.weather[0].description}
              className={styles.weatherIcon}
            />
            <p className={styles.temperature}>
              {parseTemp(weather.main.temp)}°C
            </p>
            <p className={styles.description}>
              {weather.weather[0].description}
            </p>
          </div>
          <div className={styles.details}>
            <div className={styles.detailItem}>
              <span className={styles.label}>Min:</span>
              <span className={styles.value}>
                {parseTemp(weather.main.temp_min)}°C
              </span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Max:</span>
              <span className={styles.value}>
                {parseTemp(weather.main.temp_max)}°C
              </span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Humidity:</span>
              <span className={styles.value}>{weather.main.humidity}%</span>
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
}
