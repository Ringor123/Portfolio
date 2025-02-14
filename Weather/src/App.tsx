import styles from "./App.module.css"
import Form from "./components/Form/Form"
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay"
import useWeather from "./hooks/useWeather"


function App() {

  const {fetchWeather, weather} = useWeather()

  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>
      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />
        <WeatherDisplay weather={weather} />
      </div>
    </>
  )
}

export default App
