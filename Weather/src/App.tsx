import styles from "./App.module.css"
import Form from "./components/Form/Form"
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay"
import useWeather from "./hooks/useWeather"


function App() {

  const {fetchWeather, weather, loading} = useWeather()

  return (
    <>
      <h1 className={styles.title}>Weather Finder</h1>
      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />
        <WeatherDisplay weather={weather} loading={loading}/>
      </div>
    </>
  )
}

export default App
