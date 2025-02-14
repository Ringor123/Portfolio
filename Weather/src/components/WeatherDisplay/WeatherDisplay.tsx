import { Weather } from "../../hooks/useWeather";
import { parseTemp } from "../../utils";
import styles from "./WeatherDisplay.module.css";

type WeatherDisplayProps = {
  weather: Weather;
  loading: boolean
};
export default function WeatherDisplay({ weather, loading }: WeatherDisplayProps) {
  return (
    <div className={styles.weatherCard}>
      {loading ? (
        <div className={styles.spinner}>
        <div className={styles.bounce1}></div>
        <div className={styles.bounce2}></div>
        <div className={styles.bounce3}></div>
      </div>
      ) : (
        !weather.name ? (
          <h2 className={styles.noWeather}>Complete the form to weather</h2>
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
                <span className={styles.label}>Mínima:</span>
                <span className={styles.value}>
                  {parseTemp(weather.main.temp_min)}°C
                </span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Máxima:</span>
                <span className={styles.value}>
                  {parseTemp(weather.main.temp_max)}°C
                </span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Humedad:</span>
                <span className={styles.value}>{weather.main.humidity}%</span>
              </div>
            </div>{" "}
          </>
        )
      )}
    </div>
  );
}
