export default function Labs() {
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
        Advanced Labs 2050
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "25px",
        maxWidth: "1000px",
        margin: "0 auto"
      }}>

        <div style={cardStyle}>
          <h3>AI Research Lab</h3>
          <p>
            Students develop intelligent systems, machine learning models,
            and advanced AI solutions.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Robotics Lab</h3>
          <p>
            Design and build robots for automation, healthcare,
            and industrial applications.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Virtual Simulation Lab</h3>
          <p>
            Real-world scenarios are simulated using VR for
            immersive practical learning.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Space Tech Lab</h3>
          <p>
            Explore satellite systems, space research,
            and futuristic space missions.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Biotechnology Lab</h3>
          <p>
            Advanced research in genetics, healthcare innovation,
            and bioengineering.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Quantum Computing Lab</h3>
          <p>
            Work with next-generation computing systems solving
            complex real-world problems.
          </p>
        </div>

      </div>

    </div>
  );
}


/* SAME CARD STYLE */

const cardStyle = {
  background: "rgba(0,0,0,0.6)",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 0 15px #d6b3ff",
  transition: "0.3s"
};