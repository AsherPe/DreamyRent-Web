export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#111", color: "#fff", padding: "50px 20px" }}>
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                gap: "40px",
                maxWidth: "1200px",
                margin: "0 auto"
            }}>



                {/* עמודה 4 - אזור אישי */}
                <div style={{textAlign: "center"}}>
                    <h3 style={{ marginBottom: "15px" }}>אזור אישי</h3>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        <li>החשבון שלי</li>
                        <li>היסטוריית הזמנות</li>
                        <li>Wishlist</li>
                    </ul>
                </div>

                {/* עמודה 3 - שירות לקוחות */}
                <div style={{textAlign: "center"}}>
                    <h3 style={{ marginBottom: "15px" }}>שירות לקוחות</h3>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        <li>תקנון</li>
                        <li>שאלות תשובות</li>
                        <li>משלוחים, החזרות והחלפות</li>
                        <li>מדיניות פרטיות</li>
                        <li>צור קשר</li>
                        <li>טבלת מידות</li>
                    </ul>
                </div>

                {/* עמודה 2 - צור קשר */}
                <div style={{textAlign: "center"}}>
                    <h3 style={{ marginBottom: "15px" }}>צור קשר</h3>
                    <p>054-3684722</p>

                    <div style={{ justifyContent: "center",marginTop: "15px", display: "flex", gap: "10px" }}>
                        <a href="https://api.whatsapp.com/send?phone=%2B972543684722&fbclid=IwVERDUANL2jdleHRuA2FlbQIxMAABHhZagiEo09YWM6Lc0uL-5MCRpm3jHfKXxaV5mwgAQ7CUq8sv5VBWc_BjhKJF_aem_FGaPZe-D4bmz2u99719R3w">
                            <img src="https://img.icons8.com/ios-filled/30/ffffff/whatsapp.png" alt="WhatsApp"/></a>
                        <a href="https://www.instagram.com/dreamyrenteilat?igsh=aHdzdzJjN2x1OHRy">
                            <img src="https://img.icons8.com/ios-filled/30/ffffff/instagram-new.png" alt="Instagram"/></a>
                        <a href="https://www.facebook.com/share/1ZA65NYYG5/?mibextid=wwXIfr">
                            <img src="https://img.icons8.com/ios-filled/30/ffffff/facebook.png" alt="Facebook"/></a>
                    </div>
                </div>

                {/* עמודה 1 - הרשמה */}
                <div style={{textAlign: "right"}}>
                    <h3 style={{ marginBottom: "15px" }}>הירשמו למועדון הלקוחות שלנו</h3>
                    <input
                        type="email"
                        placeholder="האימייל שלכם"
                        style={{ width: "85%", padding: "10px", marginBottom: "10px" , textAlign: "right" }}
                    />
                    <div style={{ marginBottom: "10px" }}>
                        <label htmlFor="agree" style={{ marginRight: "8px" }}>אני מאשר/ת קבלת דיוור בדוא"ל</label>
                        <input type="checkbox" id="agree" />
                    </div>
                    <button style={{
                        padding: "10px 20px",
                        backgroundColor: "#fff",
                        color: "#111",
                        border: "none",
                        cursor: "pointer"
                    }}>הרשמה</button>
                </div>

            </div>
        </footer>
    );
}
