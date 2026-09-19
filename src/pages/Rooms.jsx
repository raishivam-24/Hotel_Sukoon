import { useEffect, useState } from "react";
import { waLink } from "../data/site";
import { ROOMS } from "../data/rooms";
import "./Rooms.css";

/* Small inline icon set for the amenity pills — keyword-matched so any
   tag string in data/rooms.js gets a reasonable icon without needing
   a shared icon library. Falls back to a plain check mark. */
function AmenityIcon({ label }) {
  const key = label.toLowerCase();
  const common = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

  if (key.includes("wifi")) {
    return (
      <svg {...common}>
        <path d="M2 8.5a16 16 0 0 1 20 0" />
        <path d="M5.5 12a11 11 0 0 1 13 0" />
        <path d="M9 15.5a6 6 0 0 1 6 0" />
        <circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (key.includes("tv")) {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="13" rx="1.5" />
        <path d="M8 21h8M12 18v3" />
      </svg>
    );
  }
  if (key.includes("ac") || key.includes("air")) {
    return (
      <svg {...common}>
        <path d="M12 2v20M4.5 6 12 12l7.5-6M4.5 18 12 12l7.5 6" />
      </svg>
    );
  }
  if (key.includes("cooler")) {
    return (
      <svg {...common}>
        <path d="M20 6 4 18M4 6l16 12" />
      </svg>
    );
  }
  if (key.includes("fridge")) {
    return (
      <svg {...common}>
        <rect x="6" y="2" width="12" height="20" rx="1.5" />
        <path d="M6 9h12M9 5v2M9 12v2" />
      </svg>
    );
  }
  if (key.includes("wardrobe")) {
    return (
      <svg {...common}>
        <rect x="4" y="2" width="16" height="20" rx="1" />
        <path d="M12 2v20M9 12v.01M15 12v.01" />
      </svg>
    );
  }
  if (key.includes("shower") || key.includes("bath")) {
    return (
      <svg {...common}>
        <path d="M6 9V6a3 3 0 0 1 6 0M4 9h16M8 13v.01M12 13v.01M16 13v.01M8 17v.01M12 17v.01M16 17v.01" />
      </svg>
    );
  }
  if (key.includes("living")) {
    return (
      <svg {...common}>
        <path d="M4 18v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M2 18h20M6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
      </svg>
    );
  }
  if (key.includes("bedding") || key.includes("bed")) {
    return (
      <svg {...common}>
        <path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 18h18M5 10V6h4v4" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function RoomModal({ room, onClose }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(0);
  }, [room]);

  useEffect(() => {
    if (!room) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [room, onClose]);

  if (!room) return null;

  return (
    <div className="room-modal-backdrop" onClick={onClose}>
      <div className="room-modal" onClick={(e) => e.stopPropagation()}>
        <button className="room-modal-close" aria-label="Close" onClick={onClose}>
          ×
        </button>

        <div className="room-modal-media">
          <img src={room.slides[active]} alt={room.name} className="room-modal-main-img" />
          <span className="hs-badge hs-badge-type room-modal-badge">{room.badge}</span>
        </div>

        <div className="room-modal-thumbs">
          {room.slides.map((src, i) => (
            <button
              key={src}
              className={"room-modal-thumb" + (i === active ? " is-active" : "")}
              onClick={() => setActive(i)}
              aria-label={`View photo ${i + 1}`}
            >
              <img src={src} alt="" />
            </button>
          ))}
        </div>

        <div className="room-modal-body">
          <div className="room-modal-top">
            <h3>{room.name}</h3>
            <span className="room-modal-rate">
              ₹{room.rate}
              <span>/night</span>
            </span>
          </div>

          <p className="room-modal-desc">{room.short}</p>

          <p className="room-modal-amenities-label">Amenities</p>
          <div className="room-modal-amenities">
            {room.tags.map((t) => (
              <span className="room-modal-amenity" key={t}>
                <AmenityIcon label={t} />
                {t}
              </span>
            ))}
          </div>

          <a
            className="btn btn-gold room-modal-book"
            href={waLink(
              `Hi, I'd like to book the ${room.name} at Hotel Sukoon.`
            )}
            target="_blank"
            rel="noreferrer"
          >
            Book This Room
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Rooms() {
  const [openRoom, setOpenRoom] = useState(null);

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="rm-hero">
        <img className="rm-hero-bg" src="/images/exterior-building.jpg" alt="" aria-hidden="true" />
        <div className="rm-hero-scrim" />
        <div className="wrap rm-hero-content">
          <p className="hs-welcome">✦ Accommodations ✦</p>
          <h1 className="hs-hero-title">
            <span className="hs-script">Opulent</span>
            <span className="hs-serif">Our Rooms &amp; Suites</span>
          </h1>
          <p className="hs-hero-sub">
            Where every stay is a masterpiece of comfort.
          </p>
        </div>
      </section>

      {/* ---------- ROOM GRID ---------- */}
      <section className="hs-section rm-rooms">
        <div className="wrap rm-rooms-inner">
          <div className="hs-room-grid">
            {ROOMS.map((room) => {
              const shown = room.tags.slice(0, 4);
              const extra = room.tags.length - shown.length;

              return (
                <article
                  className="hs-room-card rm-room-card"
                  key={room.slug}
                  onClick={() => setOpenRoom(room)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setOpenRoom(room)}
                >
                  <div className="hs-room-media">
                    <img src={room.slides[0]} alt={room.name} loading="lazy" />
                    <span className="hs-badge hs-badge-type">{room.badge}</span>
                    <span className="hs-badge hs-badge-open">Available</span>
                  </div>

                  <div className="hs-room-body">
                    <div className="hs-room-top">
                      <h3>{room.name}</h3>
                      <span className="hs-rate">
                        ₹{room.rate}
                        <span>/night</span>
                      </span>
                    </div>
                    <p className="hs-room-desc">{room.short}</p>

                    <ul className="hs-room-tags">
                      {shown.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                      {extra > 0 && <li className="rm-tag-more">+{extra} more</li>}
                    </ul>

                    <a
                      className="hs-room-link"
                      href={waLink(
                        `Hi, I'd like to check availability and pricing for the ${room.name} at Hotel Sukoon.`
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Book Now <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- CONCIERGE CTA ---------- */}
      <section className="hs-section rm-concierge">
        <div className="wrap rm-concierge-inner">
          <p className="hs-eyebrow">Concierge</p>
          <h2 className="rm-concierge-title">
            <span className="hs-script-sm">Concierge</span>
            <span>Need Assistance?</span>
          </h2>
          <p className="rm-concierge-sub">
            Our dedicated team is at your service to curate the perfect room
            for your sojourn.
          </p>
          <a
            className="btn btn-gold"
            href={waLink("Hi, I'd like some help choosing a room at Hotel Sukoon.")}
            target="_blank"
            rel="noreferrer"
          >
            Contact Us
          </a>
        </div>
      </section>

      <RoomModal room={openRoom} onClose={() => setOpenRoom(null)} />
    </>
  );
}