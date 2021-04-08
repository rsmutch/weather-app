export const convertUnixTime = (t) => {
  const dateObj = new Date(t * 1000);
  const utcString = dateObj.toLocaleString();
  return utcString.slice(-8, -3);
};

export const convertDate = (d) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const fullDate = new Date(d * 1000);
  const day = days[fullDate.getDay()];
  const date = fullDate.getDate();
  const month = months[fullDate.getMonth()];

  const dateString = `${day}, ${date} ${month}`;
  return dateString;
};

export const convertWeatherData = (data) => {
  const weatherData = {
    date: convertDate(data.dt),
    city: data.name,
    country: data.sys.country,
    temp: data.main.temp.toFixed(1),
    feelsLike: data.main.feels_like.toFixed(1),
    windSpeed: (data.wind.speed * 2.237).toFixed(0),
    sunrise: convertUnixTime(data.sys.sunrise),
    sunset: convertUnixTime(data.sys.sunset),
    icon: data.weather[0].icon,
    description: data.weather[0].description
  };
  return weatherData;
};
