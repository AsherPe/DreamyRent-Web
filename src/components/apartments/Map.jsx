export default function Map({ location }) {
    const { lat, lng } = location;
    const url = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

    return (
        <div style={{ marginTop: "20px" }}>
            <iframe
                title="map"
                src={url}
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    );
}
