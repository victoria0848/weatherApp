import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Hjem</Link>
      <Link to="/forecast">Prognose</Link>
      <Link to="/about">Om</Link>
    </nav>
  );
};

export default Navigation;