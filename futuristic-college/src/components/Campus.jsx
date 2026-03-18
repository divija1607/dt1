export default function Campus() {
  return (
    <section
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px"
      }}
    >
      <h1 style={{ color: "#d6b3ff", fontSize: "50px", marginBottom: "20px" }}>
        Smart Campus
      </h1>

      <p style={{ maxWidth: "700px", fontSize: "20px" }}>
        Our campus uses AI powered systems, self driving buses and IoT enabled buildings for energy efficiency.
      </p>
    </section>
  );
}
