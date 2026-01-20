import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Forecast from "./pages/Forecast";
import About from "./pages/About";

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <footer>
        <p>Vejr App – Open-Meteo</p>
      </footer>
    </>
  );
}

export default App;