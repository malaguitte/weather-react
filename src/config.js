const CONFIG = {

    OPEN_WEATHER_API: {
        KEY: "YOUR_API_KEY",
        BASE: "https://api.openweathermap.org/data/2.5/",
        UNIT: "metric"
    },

    getQuery: (query) => `${CONFIG.OPEN_WEATHER_API.BASE}weather?q=${query}&units=${CONFIG.OPEN_WEATHER_API.UNIT}&APPID=${CONFIG.OPEN_WEATHER_API.KEY}`
};


export default CONFIG;