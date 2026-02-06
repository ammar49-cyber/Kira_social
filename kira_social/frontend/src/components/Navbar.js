import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{
      height: 60,
      background: "#15151C",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      position: "sticky",
      top: 0,
      zIndex: 10
    }}>
      <Link to="/" style={{ color: "white" }}>Home</Link>
      <Link to="/reels" style={{ color: "white" }}>Reels</Link>
      <Link to="/chat" style={{ color: "white" }}>Chat</Link>
      <Link to="/profile/1" style={{ color: "white" }}>Profile</Link>
    </div>
  );
}
