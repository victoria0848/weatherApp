const About = () => {
  return (
    <section>
      <h1>Om appen</h1>

      <p>Denne app er bygget med:</p>

      <ul>
        <li>React (JSX)</li>
        <li>React Router</li>
        <li>Open-Meteo API</li>
        <li>Fetch API</li>
      </ul>

      <p>Links:</p>
      <ul>
        <li>
          <a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer">
            Open-Meteo API
          </a>
        </li>
        <li>
          <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
            React
          </a>
        </li>
      </ul>
    </section>
  );
};

export default About;