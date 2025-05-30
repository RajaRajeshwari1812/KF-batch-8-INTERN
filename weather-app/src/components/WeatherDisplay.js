const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return null;

  const today = weatherData.list[0];
  const hourlyData = weatherData.list.slice(0, 24);
  const dailyData = weatherData.list
    .filter((_, idx) => idx % 8 === 0)
    .slice(0, 7);

  const iconMap = {
    Clear: "/icons/sun.png",
    Rain: "/icons/rain.png",
    Clouds: "/icons/cloudy.png",
    Snow: "/icons/snow.png",
    Thunderstorm: "/icons/thunderstorm.png",
    Mist: "/icons/mist.png",
    Drizzle: "/icons/drizzle.png",
    Haze: "/icons/fog.png",
  };

  return (
    <div className="weather-card">
      <h2 className="city-temp">
        <img
          src={iconMap[weatherData.list[0].weather[0].main]}
          alt={weatherData.list[0].weather[0].description}
          className="weather-img"
        />
        <span className="temp">
          {Math.round(weatherData.list[0].main.temp)}°C
        </span>
        <span className="city-name">
          {weatherData.city.name}, {weatherData.city.country}
        </span>
      </h2>

      <div className="weather-details">
        <p>💧 Humidity: {today.main.humidity}%</p>
        <p>🌬️ Wind Speed: {Math.floor(today.wind.speed)} m/s</p>
        <p>👁️ Visibility: {Math.floor(today.visibility / 1000)} km</p>
        <p>🌡️ Air Pressure: {today.main.pressure} hPa</p>
      </div>

      <h3>Hourly Forecast </h3>
      <div className="hourly-forecast">
        {hourlyData.map((hour, idx) => (
          <div key={idx} className="hour-box">
            <p>
              {new Date(hour.dt * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
              alt={hour.weather[0].description}
              className="weather-icon"
            />
            <p>{Math.floor(hour.main.temp)} °C</p>
            <p>{hour.weather[0].main}</p>
          </div>
        ))}
      </div>

      <h3>Daily Forecast</h3>
      <div className="daily-forecast">
        {dailyData.map((day, idx) => (
          <div key={idx} className="day-box">
            <p>
              {new Date(day.dt * 1000).toLocaleDateString([], {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
              className="weather-icon"
            />
            <p>{Math.floor(day.main.temp)} °C</p>
            <p>{day.weather[0].main}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDisplay;
