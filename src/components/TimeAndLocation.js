import { DateTime } from "luxon";
import React from "react";
// import { formatToLocalTime } from "../services/weatherService";

function TimeAndLocation({ weather }) {
  console.log("weather", weather);
  const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
  ) => DateTime?.fromSeconds(secs)?.setZone(zone)?.toFormat(format);
    
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {formatToLocalTime(weather?.dt, weather?.timezone)}
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">{`${weather?.name}, ${weather?.sys?.country}`}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
