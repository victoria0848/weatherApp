import { useEffect, useState } from "react";

const Forecast = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=57.05&longitude=9.92&daily=temperature_2m_max&timezone=auto"
    )
      .then(res => res.json())
      .then(data => setDays(data.daily.temperature_2m_max.slice(0, 3)));
  }, []);

  return (
    <section>
      <h1>3 dages prognose</h1>

      <ul>
        {days.map((temp, index) => (
          <li key={index}>
            Dag {index + 1}: {temp} °C
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Forecast;