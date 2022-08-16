import React from "react";

function TopButtons({ setQ }) {
  const cities = [
    {
      title: "London",
    },
    {
      title: "Sydney",
    },
    {
      title: "Tokyo",
    },
    {
      title: "Cairo",
    },
    {
      title: "Paris",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city, index) => (
        <button
          key={index}
          name={city.title}
          className="text-white text-lg font-medium"
          onClick={(e) => setQ(e.currentTarget.name)}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
