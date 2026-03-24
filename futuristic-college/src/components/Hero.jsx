import { useState } from "react";

export default function Hero() {
  const [showCourses, setShowCourses] = useState(false);

  return (
    <section
      style={{
        height: "90vh",
        backgroundImage: "url('/campus.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      {/* DARK OVERLAY */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.5)"
        }}
      ></div>

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          color: "white",
        }}
      >
        <h1 className="hero-title animate">
          NovaTech University
        </h1>

        <p className="hero-subtitle">
          Experience the future of education with AI and smart technology
        </p>

        <button
          className="hero-button"
          onClick={() => setShowCourses(true)}
        >
          Explore Future
        </button>
      </div>

      {/* POPUP */}
      {showCourses && (
        <div className="modal-overlay">
          <div className="modal-box">

            <h2>Courses in 2050 🚀</h2>

            <ul>
              <li>AI Engineering</li>
              <li>Robotics & Automation</li>
              <li>Space Technology</li>
              <li>Cyber Security</li>
              <li>Quantum Computing</li>
              <li>Virtual Reality Design</li>
            </ul>

            <button
              className="close-btn"
              onClick={() => setShowCourses(false)}
            >
              Close
            </button>

          </div>
        </div>
      )}

    </section>
  );
}