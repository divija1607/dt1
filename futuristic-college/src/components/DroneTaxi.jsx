import { useState } from "react";

export default function DroneTaxi() {

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const items = [
    "Books",
    "Laptop",
    "Food",
    "Medicine",
    "Clothes",
    "Stationery",
    "Gadgets",
    "Project Kit",
    "Snacks",
    "Documents"
  ];

  const handleCheckbox = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleSubmit = () => {
    alert(`🚁 Drone booked!
Pickup: ${pickup}
Drop: ${drop}
Items: ${selectedItems.join(", ")}`);
  };

  return (
    <section style={{
      minHeight: "80vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      color: "white"
    }}>

      <h1 style={{ color: "#d6b3ff", marginBottom: "20px" }}>
        Drone Taxi System
      </h1>

      <input
        placeholder="Pickup Location"
        value={pickup}
        onChange={(e) => setPickup(e.target.value)}
        style={{ margin: "10px", padding: "10px", width: "250px" }}
      />

      <input
        placeholder="Drop Location"
        value={drop}
        onChange={(e) => setDrop(e.target.value)}
        style={{ margin: "10px", padding: "10px", width: "250px" }}
      />

      <h3>Select Items:</h3>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {items.map((item, index) => (
          <label key={index}>
            <input
              type="checkbox"
              onChange={() => handleCheckbox(item)}
            />
            {item}
          </label>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          border: "2px solid #d6b3ff",
          background: "transparent",
          color: "#d6b3ff"
        }}
      >
        Book Drone
      </button>

    </section>
  );
}
