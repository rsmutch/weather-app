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

export const convertWeatherData = (data, isForecast) => {
  let weatherData = {
    date: convertDate(data.dt),
    icon: data.weather[0].icon,
    description: data.weather[0].description
  };
  if (!isForecast) {
    weatherData = {
      ...weatherData,
      country: data.sys.country,
      temp: data.main.temp.toFixed(1),
      sunrise: convertUnixTime(data.sys.sunrise),
      sunset: convertUnixTime(data.sys.sunset),
      feelsLike: data.main.feels_like.toFixed(1),
      windSpeed: (data.wind.speed * 2.237).toFixed(0),
      city: data.name
    };
  } else {
    weatherData = {
      ...weatherData,
      sunrise: convertUnixTime(data.sunrise),
      sunset: convertUnixTime(data.sunset),
      feelsLike: data.feels_like.day.toFixed(1),
      temp: data.temp.day.toFixed(1),
      windSpeed: (data.wind_speed * 2.237).toFixed(0)
    };
  }
  return weatherData;
};
