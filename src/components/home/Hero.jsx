export default function Hero() {
    return (
        <section style={{ position: "relative", height: "80vh", overflow: "hidden" }}>
            {/* וידאו ברקע */}
            <video
                autoPlay
                loop
                muted
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: -1
                }}
            >
                <source src="/PeerTasi.mp4" type="video/mp4" />
            </video>

            {/* טקסט מעל הוידאו */}
            <div style={{
                position: "relative",
                color: "#fff",
                textAlign: "center",
                top: "50%",
                transform: "translateY(-50%)"
            }}>
                <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Welcome to My Rentals</h1>
                <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>Find the perfect apartment for your stay</p>
                <button style={{
                    padding: "12px 24px",
                    fontSize: "1rem",
                    backgroundColor: "#ff5a5f",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer"
                }}>Book Now</button>
            </div>
        </section>
    );
}
