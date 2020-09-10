import React, { useState } from "react";
import Config from "./config";
import { dateBuilder, roundTemperature } from "./utils";

const PLACEHOLDER_TEXT = "Search...";

function App() {

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");

  const search = async (event) => {
    if (event.key === "Enter") {
      const response = await fetch(Config.getQuery(query));
      const result = await response.json();
      setWeather(result);
      setQuery("");
      console.log("weather", result);
    }
  }

  return (
    <div className="app warm">
      <main>
        {/* Search box */}
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder={PLACEHOLDER_TEXT}
            onChange={event => setQuery(event.target.value)}
            value={query}
            onKeyPress={search}
          >
          </input>
        </div>
        {/* Search box */}

        {(weather.main) ? (

        <div>
          {/* Location Box */}
            <div className="location-box">
            <div className="location">
              {weather.name}, {weather.sys.country}
            </div>
            <div className="date">
              {dateBuilder(new Date())}
            </div>
          </div>
          {/* Location Box */}

          {/* Weather Box */}
          <div className="weather-box">
            <div className="temperature">
              {roundTemperature(weather.main.temp)}
            </div>
            <div className="weather">
              Sunny
            </div>
          </div>
          {/* Weather Box */}
        </div>

        ) : ("")}

      </main>
    </div>
  );
}

export default App;
