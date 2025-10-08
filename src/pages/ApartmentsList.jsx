// src/pages/ApartmentsList.jsx
import { Link } from "react-router-dom";
import { apartments } from "../data/apartments.js";

export default function ApartmentsList() {
    return (
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
            <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>All Apartments</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
                {apartments.map((apt) => (
                    <Link
                        key={apt.id}
                        to={`/apartments/${apt.id}`}
                        style={{
                            width: "300px",
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            overflow: "hidden",
                            textDecoration: "none",
                            color: "#111"
                        }}
                    >
                        <img src={apt.images[0]} alt={apt.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                        <div style={{ padding: "1rem" }}>
                            <h3>{apt.name}</h3>
                            <p>{apt.description.substring(0, 70)}...</p>
                            <p><strong>Capacity:</strong> {apt.capacity}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
