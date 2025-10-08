import { useParams } from "react-router-dom";
import { apartments } from "../data/apartments.js";

function getHebrewCategory(key) {
    const map = {
        general: "כללי",
        units: "ביחידות",
        outdoor: "מתקנים בחוץ",
        suitableFor: "מתאים ל",
        nearby: "בקרבת המקום",
        activities: "פעילויות בסביבה"
    };
    return map[key] || key;
}
function getIconCategory(key) {
    const iconMap = {
        general: "bi bi-info-circle",
        units: "bi bi-tv",
        outdoor: "bi bi-tree",
        suitableFor: "bi bi-people",
        nearby: "bi bi-geo-alt",
        activities: "bi bi-controller"
    };

    return iconMap[key] || key;
}

export default function Apartment() {
    const { id } = useParams();
    const apartment = apartments.find(apt => apt.id === parseInt(id));

    if (!apartment) return <p style={{ textAlign: "center", marginTop: "3rem", fontSize: "1.2rem" }}>Apartment not found</p>;

    return (
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem", fontFamily: "'Helvetica Neue', Arial, sans-serif", color: "#222" }}>

            <div style={{ padding: "2rem", backgroundColor: "#fafafa", borderRadius: "10px", boxShadow: "0 4px 15px rgba(0,0,0,0.06)", marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "3rem", margin: "-2rem" , textAlign:"center" }}>{apartment.name}</h3>
            </div>

            {/* תמונה ראשית מבחוץ */}
            <div style={{ borderRadius: "10px", overflow: "hidden", boxShadow: "0 6px 20px rgba(0,0,0,0.1)", marginBottom: "2rem" }}>
                <img src={apartment.images[0]} alt={`${apartment.name} exterior`} style={{ width: "100%", height: "400px", objectFit: "cover" }} />
            </div>

            {/* פירוט על הדירה */}
            <div style={{ padding: "2rem", backgroundColor: "#fafafa", borderRadius: "10px", boxShadow: "0 4px 15px rgba(0,0,0,0.06)", marginBottom: "2rem" }}>
                <div
                    style={{ fontSize: "1.1rem", lineHeight: "1.7", direction: "rtl" }}
                    dangerouslySetInnerHTML={{ __html: apartment.description }}
                ></div>
            </div>

            {/* גלריית תמונות 12 תמונות */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px", marginBottom: "2rem" }}>
                {apartment.images.slice(0, 13).map((img, i) => (
                    <div key={i} style={{ overflow: "hidden", borderRadius: "10px" }}>
                        <img
                            src={img}
                            alt={`apt ${i + 1}`}
                            style={{ width: "100%", height: "200px", objectFit: "cover", transition: "transform 0.3s" }}
                            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                        />
                    </div>
                ))}
            </div>

            <div style={{ backgroundColor: "#fafafa", borderRadius: "10px", padding: "2rem", boxShadow: "0 4px 15px rgba(0,0,0,0.06)" }}>
                <h2 style={{ textAlign: "right", fontSize: "1.8rem", marginBottom: "1rem" }}>מאפייני הווילה</h2>
                {Object.entries(apartment.features).map(([category, items]) => (
                    <div key={category} style={{ marginBottom: "1.5rem" }}>
                        <h3 style={{
                            fontSize: "1.4rem",
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            gap: "8px",
                            borderBottom: "1px solid #ddd",
                            paddingBottom: "0.5rem"
                        }}>
                            {getHebrewCategory(category)}
                            <i className={getIconCategory(category)}></i>
                        </h3>

                        <ul style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, max-content))",
                            listStyle: "disc",
                            padding: 0,
                            marginRight: "3rem",
                            direction: "rtl"
                            }}>
                            {items.map((item, i) => (
                                <li key={i} style={{ marginBottom: "0.5rem" }}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* מאפייני דירה + מיקום אחד ליד השני */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", marginBottom: "3rem" }}>

                {/* מיקום */}
                <div style={{ flex: "1", minWidth: "280px", borderRadius: "10px", overflow: "hidden", boxShadow: "0 4px 15px rgba(0,0,0,0.06)" }}>
                    <h3 style={{ textAlign: "right" ,fontSize: "1.5rem", margin: "1rem" }}>מיקום</h3>
                    <iframe
                        title="map"
                        src={`https://www.google.com/maps?q=${encodeURIComponent(apartment.location)}&output=embed`}
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                {/* המלצות */}
                <div style={{ flex: "1", minWidth: "280px", padding: "1.5rem", borderRadius: "10px", backgroundColor: "#f5f5f5", boxShadow: "0 4px 15px rgba(0,0,0,0.06)" }}>
                    <h3 style={{ textAlign: "right" ,fontSize: "1.5rem", marginBottom: "1rem" }}>המלצות</h3>
                    <ul style={{ listStyle: "none", padding: 0, fontSize: "1.05rem", lineHeight: "1.6" }}>
                        <li>Capacity: {apartment.capacity} people</li>
                        <li>Services: Wi-Fi, Parking, Air Conditioning</li>
                        <li>Check-in: 3 PM | Check-out: 11 AM</li>
                        <li>Non-smoking | Pets allowed on request</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
