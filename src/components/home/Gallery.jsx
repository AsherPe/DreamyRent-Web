import React, { useState } from "react";
import "../../styles/Gallery.css";

const images = [
    { id: 1, src: "/images/1.jpg", alt: "apt 1", cols: 2, rows: 2 },
    { id: 2, src: "/images/2.jpg", alt: "apt 2", cols: 1, rows: 1 },
    { id: 3, src: "/images/3.jpg", alt: "apt 3", cols: 1, rows: 2 },
    { id: 4, src: "/images/4.jpg", alt: "apt 4", cols: 2, rows: 2 },
    { id: 5, src: "/images/5.jpg", alt: "apt 5", cols: 1, rows: 1 },
    { id: 6, src: "/images/6.jpg", alt: "apt 6", cols: 2, rows: 1 },
    { id: 7, src: "/images/7.jpg", alt: "apt 7", cols: 2, rows: 2 },
    { id: 8, src: "/images/8.jpg", alt: "apt 8", cols: 1, rows: 1 },
    { id: 9, src: "/images/9.jpg", alt: "apt 9", cols: 1, rows: 1 },
    { id: 10,src: "/images/10.jpg",alt: "apt 10", cols: 2, rows: 1 },
    { id: 11, src:"/images/11.jpg",alt: "apt 11", cols: 1, rows: 1 },
    { id: 12, src:"/images/12.jpg",alt: "apt 12", cols: 1, rows: 1 },
];

export default function Gallery() {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [closing, setClosing] = useState(false);

    const handleClose = () => {
        setClosing(true);
        setTimeout(() => {
            setSelectedIndex(null);
            setClosing(false);
        }, 300); // משך האנימציה
    };

    const showPrev = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) =>
            prev > 0 ? prev - 1 : images.length - 1
        );
    };

    const showNext = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) =>
            prev < images.length - 1 ? prev + 1 : 0
        );
    };

    return (
        <section className="gallery-wrapper">
            <h2 className="gallery-title">גלריית דירות</h2>
            <div className="mosaic-grid">
                {images.map((img, index) => (
                    <div
                        key={img.id}
                        className="mosaic-item"
                        style={{
                            gridColumn: `span ${img.cols}`,
                            gridRow: `span ${img.rows}`,
                        }}
                        onClick={() => setSelectedIndex(index)}
                    >
                        <img src={img.src} alt={img.alt} />
                    </div>
                ))}
            </div>

            {selectedIndex !== null && (
                <div
                    className={`lightbox ${closing ? "closing" : ""}`}
                    onClick={handleClose}
                >
                    <button className="nav-btn prev" onClick={showPrev}>
                        ←
                    </button>
                    <img
                        src={images[selectedIndex].src}
                        alt={images[selectedIndex].alt}
                        className="lightbox-img"
                    />
                    <button className="nav-btn next" onClick={showNext}>
                        →
                    </button>
                </div>
            )}
        </section>
    );
}