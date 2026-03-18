import { useState } from "react";

export default function TransportationPod() {

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [podType, setPodType] = useState("");

  const handleBook = () => {
    alert(`🚗 Pod Booked!
Pickup: ${pickup}
Drop: ${drop}
Pod Type: ${podType}`);
  };

  return (
    <div style={{
      minHeight: "80vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>

      <div style={{
        background: "rgba(0,0,0,0.7)",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0 0 20px #d6b3ff",
        width: "300px",
        textAlign: "center"
      }}>

        <h2 style={{ color: "#d6b3ff", marginBottom: "20px" }}>
          Transportation Pod
        </h2>

        <input
          placeholder="Pickup Location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          style={{ width: "100%", margin: "10px 0", padding: "10px" }}
        />

        <input
          placeholder="Drop Location"
          value={drop}
          onChange={(e) => setDrop(e.target.value)}
          style={{ width: "100%", margin: "10px 0", padding: "10px" }}
        />

        <select
          value={podType}
          onChange={(e) => setPodType(e.target.value)}
          style={{ width: "100%", margin: "10px 0", padding: "10px" }}
        >
          <option value="">Select Pod Type</option>
          <option>Standard Pod</option>
          <option>Luxury Pod</option>
          <option>AI Smart Pod</option>
        </select>

        <button
          onClick={handleBook}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            border: "2px solid #d6b3ff",
            background: "transparent",
            color: "#d6b3ff",
            cursor: "pointer"
          }}
        >
          Book Ride
        </button>

      </div>
    </div>
  );
}
