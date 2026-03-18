export default function StudentLife() {
  return (
    <div style={{
      minHeight: "100vh",
      padding: "40px",
      textAlign: "center",
      color: "white"
    }}>

      <h1 style={{
        color: "#d6b3ff",
        marginBottom: "40px"
      }}>
        Student Life 2050
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        justifyContent: "center",
        maxWidth: "1000px",
        margin: "0 auto",
        gap: "20px"
      }}>

        {/* Card 1 */}
        <div style={cardStyle}>
          <h3>Mental Health Pods</h3>
          <p>
            AI-powered wellness pods help students relax, reduce stress,
            and maintain mental well-being.
          </p>
        </div>

        {/* Card 2 */}
        <div style={cardStyle}>
          <h3>Smart Food System</h3>
          <p>
            AI suggests meals based on health data, while robotic kitchens
            prepare food instantly.
          </p>
        </div>

        {/* Card 3 */}
        <div style={cardStyle}>
          <h3>VR Gaming & Recreation</h3>
          <p>
            Students enjoy immersive virtual games and sports through
            advanced VR technology.
          </p>
        </div>

        {/* Card 4 */}
        <div style={cardStyle}>
          <h3>Global Virtual Clubs</h3>
          <p>
            Students connect and collaborate with peers worldwide through
            virtual clubs and events.
          </p>
        </div>

        {/* Card 5 */}
        <div style={cardStyle}>
          <h3>Holographic Libraries</h3>
          <p>
            Books and knowledge appear as interactive holograms for a
            futuristic learning experience.
          </p>
        </div>

        {/* Card 6 */}
        <div style={cardStyle}>
          <h3>Smart Dormitories</h3>
          <p>
            AI-enabled dorms adjust lighting, temperature, and environment
            based on student preferences.
          </p>
        </div>

      </div>

    </div>
  );
}


/* CARD STYLE */

const cardStyle = {
  background: "rgba(0,0,0,0.6)",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 0 15px #d6b3ff",
  transition: "0.3s"
};
