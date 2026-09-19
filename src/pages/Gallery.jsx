import { useState } from "react";
import { waLink } from "../data/site";
import "./Gallery.css";

const IMAGES = [
  // Rooms
  { src: "/images/bedroom-navy.jpg", alt: "Classic room with navy headboard", category: "rooms" },
  { src: "/images/bedroom-teal-floral.jpg", alt: "Deluxe room bedding", category: "rooms" },
  { src: "/images/bedroom-olive.jpg", alt: "Comfortable room bed", category: "rooms" },
  { src: "/images/bedroom-door-101-a.jpg", alt: "Room 101 seating corner", category: "rooms" },
  { src: "/images/bedroom-door-101-b.jpg", alt: "Room 101 entrance", category: "rooms" },
  { src: "/images/corridor.jpg", alt: "Guest room corridor", category: "rooms" },

  // Facilities
  { src: "/images/reception-desk-1.jpg", alt: "Reception desk", category: "facilities" },
  { src: "/images/reception-desk-2.jpg", alt: "Reception work desk", category: "facilities" },
  { src: "/images/reception-mirror-sign.jpg", alt: "Hotel Sukoon signage above the desk", category: "facilities" },
  { src: "/images/lounge-sofa.jpg", alt: "Lounge seating area", category: "facilities" },
  { src: "/images/lounge-window.jpg", alt: "Window seating with city view", category: "facilities" },
  { src: "/images/elevator.jpg", alt: "Lift lobby", category: "facilities" },
  { src: "/images/ac-fan.jpg", alt: "Air conditioning and ceiling fan", category: "facilities" },
  { src: "/images/bathroom-sink-mirror.jpg", alt: "Washroom sink and mirror", category: "facilities" },
  { src: "/images/bathroom-shower.jpg", alt: "Shower fitting", category: "facilities" },
  { src: "/images/bathroom-1.jpg", alt: "Washroom fittings", category: "facilities" },
  { src: "/images/bathroom-toilet.jpg", alt: "Washroom toilet", category: "facilities" },

  // Exterior
  { src: "/images/exterior-building.jpg", alt: "Hotel Sukoon building exterior", category: "exterior" },
  { src: "/images/reception-wide.jpg", alt: "Reception lounge and entrance", category: "exterior" },
];

const FILTERS = [
  { id: "all", label: "All" },
  { id: "rooms", label: "Rooms" },
  { id: "facilities", label: "Facilities" },
  { id: "exterior", label: "Exterior" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const shown = filter === "all" ? IMAGES : IMAGES.filter((img) => img.category === filter);

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="gl-hero">
        <img className="gl-hero-bg" src="/images/exterior-building.jpg" alt="" aria-hidden="true" />
        <div className="gl-hero-scrim" />
        <div className="wrap gl-hero-content">
          <p className="hs-welcome">✦ Memories ✦</p>
          <h1 className="hs-hero-title">
            <span className="hs-script">Timeless</span>
            <span className="hs-serif">Our Gallery</span>
          </h1>
          <p className="hs-hero-sub">Framing comfort, one moment at a time.</p>
        </div>
      </section>

      {/* ---------- GRID ---------- */}
      <section className="hs-section gl-gallery">
        <div className="wrap gl-gallery-inner">
          <div className="gl-filters">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                className={"gl-filter" + (filter === f.id ? " is-active" : "")}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {shown.map((img) => (
              <div className="gallery-item" key={img.src}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CHERISH CTA ---------- */}
      <section className="hs-section gl-cta">
        <div className="wrap gl-cta-inner">
          <p className="hs-eyebrow">Cherish</p>
          <h2 className="gl-cta-title">
            <span className="hs-script-sm">Cherish</span>
            <span>Share Your Moments</span>
          </h2>
          <p className="gl-cta-sub">
            Create lasting memories at Hotel Sukoon and share your stay with
            the world.
          </p>
          <a
            className="btn btn-gold"
            href={waLink("Hi, I'd like to book a room at Hotel Sukoon.")}
            target="_blank"
            rel="noreferrer"
          >
            Book Your Stay
          </a>
        </div>
      </section>
    </>
  );
}