import React from "react";
import Config from "./config";
import { dateBuilder } from "./utils";

const PLACEHOLDER_TEXT = "Search...";

function App() {
  return (
    <div className="app warm">
      <main>
        {/* Search box */}
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder={PLACEHOLDER_TEXT}
          >
          </input>
        </div>
        {/* Search box */}

        {/* Location Box */}
        <div className="location-box">
          <div className="location">
            New York City, US
          </div>
          <div className="date">
            {dateBuilder(new Date())}
          </div>
        </div>
        {/* Location Box */}

        {/* Weather Box */}
        <div className="weather-box">
          <div className="temperature">
            15º C
          </div>
          <div className="weather">
            Sunny
          </div>
        </div>
        {/* Weather Box */}
      </main>
    </div>
  );
}

export default App;
