export default function Calendar({ availableDates }) {
    return (
        <div style={{ marginTop: "20px" }}>
            <h3>תאריכים פנויים:</h3>
            <ul>
                {availableDates.map((date, i) => (
                    <li key={i}>{date}</li>
                ))}
            </ul>
        </div>
    );
}
