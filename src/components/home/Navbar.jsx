import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [aptHover, setAptHover] = useState(false);

    const links = [
        { to: "/contact", label: "יצירת קשר" },
        { to: "/about", label: "קצת עלינו" },
        { to: "/apartments", label: "דירות" },
        { to: "/", label: "דף הבית" },
        { to: "/personal", label: "איזור אישי" }
    ];

    const apartments = [
        { id: 1, name: "Aqua Vista" },
        { id: 2, name: "Aqua Sol" },
        { id: 3, name: "פנינת הנוף" },
        { id: 4, name: "כליל הים" },
        { id: 5, name: "קסם המפרץ" }
    ];

    return (
        <header style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 32px",
            borderBottom: "1px solid #ccc",
            position: "relative"
        }}>
            {/* לוגו באמצע */}
            <div style={{
                fontWeight: "bold",
                fontSize: "2rem",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)"
            }}>
                DreamyRent Ltd.
            </div>

            {/* קישורים בצד ימין */}
            <nav style={{
                display: "flex",
                gap: "15px",
                fontSize: "1rem",
                marginLeft: "auto",
                position: "relative"
            }}>
                {links.map(link => (
                    <div
                        key={link.to}
                        onMouseEnter={() => link.label === "דירות" && setAptHover(true)}
                        onMouseLeave={() => link.label === "דירות" && setAptHover(false)}
                        style={{ position: "relative" }}
                    >
                        {link.label === "דירות" ? (
                            <span
                                style={{
                                    color: "#000",
                                    textDecoration: "none",
                                    padding: "5px 10px",
                                    transition: "background-color 0.3s",
                                    display: "block",
                                    borderRadius: "20px",
                                    cursor: "pointer"
                                }}
                                onMouseEnter={e => e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.1)"}
                                onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
                            >
                                {link.label}
                            </span>
                        ) : (
                            <Link
                                to={link.to}
                                style={{
                                    color: "#000",
                                    textDecoration: "none",
                                    padding: "5px 10px",
                                    transition: "background-color 0.3s",
                                    display: "block",
                                    borderRadius: "20px"
                                }}
                                onMouseEnter={e => e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.1)"}
                                onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
                            >
                                {link.label}
                            </Link>
                        )}

                        {/* Hover menu רחב יותר לדירות */}
                        {link.label === "דירות" && aptHover && (
                            <ul style={{
                                position: "absolute",
                                top: "100%",
                                right: 0,
                                background: "#f0f0f0",
                                listStyle: "none",
                                padding: "15px 0",
                                margin: 0,
                                borderRadius: "20px",
                                boxShadow: "0 2px 10px rgba(0,0,0,0.25)",
                                zIndex: 100,
                                width: "220px",
                                textAlign: "right",
                                direction: "rtl"
                            }}>
                                {apartments.map(apt => (
                                    <li key={apt.id} style={{ padding: "8px 20px" }}>
                                        <Link
                                            to={`/apartments/${apt.id}`}
                                            style={{
                                                color: "#000",
                                                textDecoration: "none",
                                                display: "block",
                                                transition: "background-color 0.2s"
                                            }}
                                            onMouseEnter={e => e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.1)"}
                                            onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
                                        >
                                            {apt.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </nav>
        </header>
    );
}
