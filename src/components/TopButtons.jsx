import React from "react";

function TopButtons({setQuery}) {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Toronto",
    },
    {
      id: 3,
      title: "Lagos",
    },
    {
      id: 4,
      title: "Berlin",
    },
    {
      id: 5,
      title: "Cairo",
    },
  ];

  return (
    <div className="hidden md:flex md:items-center md:justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className=" text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
