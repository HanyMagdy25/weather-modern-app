import { DateTime } from "luxon";
import React from "react";
// import { iconUrlFromCode } from "../services/weatherService";

function Forecast({ title, items ,timezone}) {
  console.log("items",items);
  const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
  ) => DateTime?.fromSeconds(secs)?.setZone(zone)?.toFormat(format);
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white">
        {items?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm">{`${formatToLocalTime(item?.dt,timezone, "cccc")?.substring(0,3)}`}</p>
            <img
              src={`http://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`}
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">{`${item?.temp?.day?.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;