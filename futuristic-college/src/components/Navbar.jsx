import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="nav-box">Home</Link>
        <Link to="/labs" className="nav-box">Labs</Link>
        <Link to="/life" className="nav-box">Student Life</Link>
        <Link to="/drone" className="nav-box">Drone Taxi</Link>
        <Link to="/pod" className="nav-box">Transport Pod</Link>

      </div>
    </nav>
  );
}