const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export const dateBuilder = (givenDate) => {
    const day = DAYS[givenDate.getDay()];
    const date = givenDate.getDate();
    const month = MONTHS[givenDate.getMonth()];
    const year = givenDate.getFullYear();
    
    return `${day} ${date} ${month} ${year}`;
}

/**
 * Rounds the given "temperature", and includes the "º C" in front of it.
 * For instance, when the given "temperature" is 23.32, this method returns "23º C"
 * @param {*} temperature: The temperature to be rounded.
 */
export const roundTemperature = (temperature) => `${Math.round(temperature)}º C`;