export const dateBuilder = (givenDate) => {
    const months = [
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
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const day = days[givenDate.getDay()];
    const date = givenDate.getDate();
    const month = months[givenDate.getMonth()];
    const year = givenDate.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}