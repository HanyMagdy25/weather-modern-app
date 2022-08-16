import React from "react";
import { TbTemperature } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { FiWind, FiSun, FiSunset } from "react-icons/fi";
import { DateTime } from "luxon";

function TemperatureAndDetails({ weather, onecall }) {
  console.log("here :", weather.name);
  const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
  ) => DateTime?.fromSeconds(secs)?.setZone(zone)?.toFormat(format);
  return (
    
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{weather?.weather[0]?.main}</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`} alt="icon" className="w-20" />
        <p className="text-5xl">{`${weather?.main?.temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <TbTemperature size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">{`${weather?.main?.feels_like.toFixed()}°`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <WiHumidity size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${weather?.main?.humidity.toFixed()}%`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <FiWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{`${weather?.wind?.speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <FiSun />
        <p className="font-light">
          Rise:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(weather?.sys?.sunrise, weather[0]?.timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>

        <FiSunset />
        <p className="font-light">
          Set:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(weather?.sys?.sunset, weather[0]?.timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>

        <FiSun />
        <p className="font-light">
          High:{" "}
          <span className="font-medium ml-1">{`${weather?.main?.temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>

        <FiSun />
        <p className="font-light">
          Low:{" "}
          <span className="font-medium ml-1">{`${weather?.main?.temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
