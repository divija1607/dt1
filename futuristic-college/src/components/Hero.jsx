export default function Hero() {
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

      <h1
        style={{
          fontSize: "64px",
          color: "#d6b3ff",
          marginBottom: "20px",
          textShadow: "0 0 10px #d6b3ff, 0 0 20px #d6b3ff"
        }}
      >
        Futuristic College 2050
      </h1>

      <p
        style={{
          fontSize: "20px",
          maxWidth: "700px",
          marginBottom: "30px"
        }}
      >
        Experience the future of education with AI, smart campuses and immersive learning.
      </p>

      <button
        style={{
          padding: "12px 25px",
          border: "2px solid #d6b3ff",
          background: "transparent",
          color: "#d6b3ff",
          cursor: "pointer"
        }}
      >
        Explore Campus
      </button>

    </section>
  );
}