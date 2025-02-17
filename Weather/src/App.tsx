/**
 * Main application component for the Weather Finder app.
 * Serves as the root component that orchestrates the weather search functionality.
 * Integrates the Form component for user input and WeatherDisplay for showing weather data.
 */
import styles from "./App.module.css"
import Form from "./components/Form/Form"
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay"
import useWeather from "./hooks/useWeather"


function App() {

  const {fetchWeather, weather, loading, notFound} = useWeather()

  return (
    <>
      <h1 className={styles.title}>Weather Finder</h1>
      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />
        <WeatherDisplay weather={weather} loading={loading} notFound={notFound}/>
      </div>
    </>
  )
}

export default App
