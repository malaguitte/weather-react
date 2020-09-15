const OPEN_WEATHER_API = {
    KEY: "YOUR_API_KEY",
    BASE: "https://api.openweathermap.org/data/2.5/",
    UNIT: "metric"
};

const CONFIG = {
    getQuery: (query) => `${OPEN_WEATHER_API.BASE}weather?q=${query}&units=${OPEN_WEATHER_API.UNIT}&APPID=${OPEN_WEATHER_API.KEY}`,
    PLACEHOLDER_TEXT: "Search...",
    TEMPERATURE_THRESHOLD: 16
};

export default CONFIG;