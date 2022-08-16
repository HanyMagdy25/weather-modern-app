import { useEffect, useState } from "react";
import "./App.css";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import getFormattedWeatherData from "./services/weatherService";
// api
const API_KEY = "7f22e0094f5aff55119058db85682a95";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

function App() {
  const [weather, setWeather] = useState(null);
  const [q, setQ] = useState("cairo");
  const [lat, setLat] = useState("30.0626");
  const [lon, setLon] = useState("31.2497");
  const [units, setUnits] = useState("standard");
  const [onecall, setOnecall] = useState(null);

  // const fetchWeather = async () => {
  //   const data = await getFormattedWeatherData("weather", { q: "cairo" });
  //   console.log("33", data);
  // };
  // fetchWeather();

  //

  useEffect(() => {
    fetch(`${BASE_URL}/weather?q=${q}&appid=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        setLat(data.coord.lat);
        setLon(data.coord.lon);
        console.log("W data", data);
      });
  }, [q]);

  useEffect(() => {
    fetch(
      `${BASE_URL}/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${API_KEY}&units=${units}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOnecall(data);
        console.log("onecall", data);
      });
  }, [lat, lon, units]);

  return (
    <div
      className={`mx-auto max-w-screen-md my-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 from-cyan-700 to-blue-700`}
    >
      <TopButtons setQ={setQ} q={q} />
      <Inputs setQ={setQ} q={q} setUnits={setUnits} />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} onecall={onecall} />
          <Forecast title="daily forecast" items={onecall?.daily} timezone={onecall.timezone_offset} />
          {/* <Forecast title="monthly " /> */}
        </>
      )}
    </div>
  );
}

export default App;
