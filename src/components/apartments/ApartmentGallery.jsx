// src/components/apartments/ApartmentGallery.jsx
import { Link } from "react-router-dom";
import { apartments } from "../../data/apartments";
import "../../styles/ApartmentGallery.css";

export default function ApartmentGallery() {
    return (
        <section className="apartment-gallery">
            <h2 className="gallery-title">הדירות שלנו</h2>
            <div className="apartment-grid">
                {apartments.map((apt) => (
                    <Link to={`/apartment/${apt.id}`} key={apt.id} className="apartment-card">
                        <div className="apartment-image-wrapper">
                            <img src={apt.images[0]} alt={apt.name} />
                        </div>
                        <div className="apartment-info">
                            <h3>{apt.name}</h3>
                            <p>{apt.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
