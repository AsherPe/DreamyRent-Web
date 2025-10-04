import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { href: "/", label: "דף הבית" },
        { href: "/apartments", label: "דירות" },
        { href: "/about", label: "קצת עלינו" },
        { href: "/contact", label: "יצירת קשר" }
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

            {/* כפתור ☰ לפתיחת Sidebar מימין */}
            <button
                onClick={() => setOpen(!open)}
                style={{
                    fontSize: "24px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    marginLeft: "auto",
                    zIndex: 1001
                }}
            >
                ☰
            </button>

            {/* Sidebar בצד ימין */}
            <div style={{
                position: "fixed",
                top: 0,
                right: open ? 0 : "-400px",
                height: "100%",
                width: "250px",
                background: "rgba(0, 0, 0, 0.79)",
                color: "#fff",
                transition: "right 0.3s ease",
                padding: "20px",
                zIndex: 1000
            }}>
                <button
                    onClick={() => setOpen(false)}
                    style={{
                        fontSize: "28px",
                        background: "none",
                        border: "none",
                        color: "#fff",
                        cursor: "pointer",
                        position: "absolute",
                        top: "15px",
                        left: "15px"
                    }}
                >
                    ×
                </button>

                <nav style={{ marginTop: "60px", display: "flex", flexDirection: "column",
                    gap: "20px", fontSize: "1.3rem", cursor: "pointer", textAlign: "center"}}>
                    {links.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            style={{
                                color: "#fff",
                                textDecoration: "none",
                                padding: "10px",
                                display: "block",
                                transition: "background-color 0.3s"
                            }}
                            onMouseEnter={e => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.3)"}
                            onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
