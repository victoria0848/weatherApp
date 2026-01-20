import { useEffect, useState } from "react";

const Home = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=57.05&longitude=9.92&current_weather=true"
    )
      .then(res => res.json())
      .then(data => setWeather(data.current_weather));
  }, []);

  return (
    <section>
      <h1>Aktuelt vejr i Nordjylland</h1>

      {weather && (
        <article>
          <p>Temperatur: {weather.temperature} °C</p>
          <p>Vind: {weather.windspeed} m/s</p>
        </article>
      )}
    </section>
  );
};

export default Home;