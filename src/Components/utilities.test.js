const {
  convertUnixTime,
  convertDate,
  convertWeatherData
} = require('./utilities');

describe('convertUnixTime', () => {
  it('should return time formatted in 24hour clock', () => {
    const input = 1617908333;
    const expectedOutput = '19:58';
    const actualOutput = convertUnixTime(input);
    expect(actualOutput).toEqual(expectedOutput);
  });
});

describe('convertDate', () => {
  it('should return date formatted as Day, Date Month', () => {
    const input = 1617915102;
    const expectedOutput = 'Thursday, 8 April';
    const actualOutput = convertDate(input);
    expect(actualOutput).toEqual(expectedOutput);
  });
});

describe('convertWeatherData()', () => {
  it('should return object correctly formatted', () => {
    const input = {
      coord: {
        lon: -2.9779,
        lat: 53.4106
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      base: 'stations',
      main: {
        temp: 8.57,
        feels_like: 4.62,
        temp_min: 7.78,
        temp_max: 10,
        pressure: 1012,
        humidity: 71
      },
      visibility: 10000,
      wind: {
        speed: 8.75,
        deg: 240
      },
      clouds: {
        all: 100
      },
      dt: 1617915102,
      sys: {
        type: 1,
        id: 1399,
        country: 'GB',
        sunrise: 1617859689,
        sunset: 1617908333
      },
      timezone: 3600,
      id: 2644210,
      name: 'Liverpool',
      cod: 200
    };
    const expectedOutput = {
      city: 'Liverpool',
      country: 'GB',
      date: 'Thursday, 8 April',
      description: 'overcast clouds',
      feelsLike: '4.6',
      icon: '04n',
      sunrise: '06:28',
      sunset: '19:58',
      temp: '8.6',
      windSpeed: '20'
    };
    const actualOutput = convertWeatherData(input);
    expect(actualOutput).toEqual(expectedOutput);
  });
});
