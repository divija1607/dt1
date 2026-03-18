import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-around",
      padding: "20px",
      background: "#000"
    }}>

      <Link to="/">Home</Link>
    
      <Link to="/labs">Labs</Link>
      <Link to="/life">Student Life</Link>
      <Link to="/drone">Drone Taxi</Link>
      <Link to="/pod">Transport Pod</Link>
    </nav>
  );
}