import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SITE, waLink } from "../data/site";
import { ROOMS } from "../data/rooms";
import {
  IconPin,
  IconCoin,
  IconBolt,
  IconHeart,
  IconKey,
  IconSpark,
  IconCar,
  IconWifi,
  IconClock,
} from "../components/icons";
import "./Home.css";

const STATS = [
  { value: "3", label: "Room Types" },
  { value: "24×7", label: "Power Backup" },
  { value: "Free", label: "Parking & Wi-Fi" },
  { value: "Indu Chowk", label: "Central Location" },
];

const AMENITIES = [
  { icon: IconBolt, title: "24×7 Power Backup", desc: "Lights, fans and AC keep running through outages — day or night." },
  { icon: IconCar, title: "Free Parking", desc: "On-site parking for cars and two-wheelers, included with your stay." },
  { icon: IconWifi, title: "Free Wi-Fi", desc: "Complimentary internet in every room and across the common areas." },
  { icon: IconSpark, title: "Clean Washrooms", desc: "Attached bathrooms cleaned and checked between every single stay." },
  { icon: IconKey, title: "Easy Check-In", desc: "A quick, paperwork-light process so you're never left waiting at the desk." },
  { icon: IconHeart, title: "Friendly Staff", desc: "A small team who know the city and are genuinely happy to help." },
  { icon: IconPin, title: "Prime Location", desc: "Indu Chowk puts the market, transit and the rest of Bilaspur within reach." },
  { icon: IconCoin, title: "Affordable Rates", desc: "Honest, upfront pricing with no hidden charges at checkout." },
  { icon: IconClock, title: "Always Open", desc: "Someone is at the front desk whenever you arrive or need a hand." },
];

const GALLERY_STRIP = [
  { src: "/images/reception-wide.jpg", alt: "Reception lounge" },
  { src: "/images/lounge-sofa.jpg", alt: "Lounge seating" },
  { src: "/images/bedroom-navy.jpg", alt: "Classic room" },
  { src: "/images/corridor.jpg", alt: "Guest corridor" },
  { src: "/images/bathroom-sink-mirror.jpg", alt: "Washroom" },
  { src: "/images/bedroom-teal-floral.jpg", alt: "Deluxe room" },
  { src: "/images/lounge-window.jpg", alt: "Window seating" },
  { src: "/images/reception-desk-1.jpg", alt: "Reception desk" },
];

function RoomSlideshow({ slides, alt }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 3200);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="hs-slideshow">
      {slides.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={i === 0 ? alt : ""}
          loading={i === 0 ? "eager" : "lazy"}
          className={"hs-slide" + (i === active ? " is-active" : "")}
        />
      ))}
      {slides.length > 1 && (
        <div className="hs-slide-dots">
          {slides.map((_, i) => (
            <span key={i} className={i === active ? "is-active" : ""} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hs-hero">
        <img className="hs-hero-bg" src="/images/exterior-building.jpg" alt="" aria-hidden="true" />
        <div className="hs-hero-scrim" />
        <div className="wrap hs-hero-content">
          <p className="hs-welcome">✦ Welcome to Hotel Sukoon ✦</p>
          <h1 className="hs-hero-title">
            <span className="hs-script">Comfortable</span>
            <span className="hs-serif">Stay</span>
          </h1>
          <p className="hs-hero-sub">
            A quiet, clean room at the heart of Bilaspur — honest pricing, warm
            service, and a place to actually rest.
          </p>
          <a
            className="btn btn-gold hs-hero-btn"
            href={waLink("Hi, I'd like to book a room at Hotel Sukoon.")}
            target="_blank"
            rel="noreferrer"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <section className="hs-stats">
        <div className="wrap hs-stats-grid">
          {STATS.map((s) => (
            <div className="hs-stat" key={s.label}>
              <span className="hs-stat-value">{s.value}</span>
              <span className="hs-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- ROOMS ---------- */}
      <section className="hs-section hs-rooms">
        <div className="wrap">
          <div className="hs-head">
            <p className="hs-eyebrow">Accommodations</p>
            <h2 className="hs-head-title">
              <span className="hs-script-sm">Restful</span>
              <span>Rooms &amp; Suites</span>
            </h2>
          </div>

          <div className="hs-room-grid">
            {ROOMS.map((room) => (
              <article className="hs-room-card" key={room.slug}>
                <div className="hs-room-media">
                  <RoomSlideshow slides={room.slides} alt={room.name} />
                  <span className="hs-badge hs-badge-type">{room.badge}</span>
                  <span className="hs-badge hs-badge-open">Available</span>
                </div>

                <div className="hs-room-body">
                  <div className="hs-room-top">
                    <h3>{room.name}</h3>
                    <span className="hs-rate">Rates on request</span>
                  </div>
                  <p className="hs-room-desc">{room.short}</p>

                  <ul className="hs-room-tags">
                    {room.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>

                  <a
                    className="hs-room-link"
                    href={waLink(
                      `Hi, I'd like to check availability and pricing for the ${room.name} at Hotel Sukoon.`
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Book Now <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- AMENITIES ---------- */}
      <section className="hs-section hs-amenities">
        <div className="wrap">
          <div className="hs-head">
            <p className="hs-eyebrow">Amenities</p>
            <h2 className="hs-head-title">
              <span className="hs-script-sm">Everything</span>
              <span>Included In Your Stay</span>
            </h2>
          </div>

          <div className="hs-amenity-grid">
            {AMENITIES.map((a) => (
              <div className="hs-amenity" key={a.title}>
                <span className="hs-amenity-icon">
                  <a.icon />
                </span>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- GALLERY ---------- */}
      <section className="hs-section hs-gallery">
        <div className="wrap">
          <div className="hs-head">
            <p className="hs-eyebrow">Gallery</p>
            <h2 className="hs-head-title">
              <span className="hs-script-sm">A Look</span>
              <span>Around The Property</span>
            </h2>
          </div>
        </div>

        <div className="hs-marquee">
          <div className="hs-marquee-track">
            {[...GALLERY_STRIP, ...GALLERY_STRIP].map((img, i) => (
              <figure key={i}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>

        <div className="wrap hs-gallery-action">
          <Link to="/gallery" className="btn btn-outline">
            View All Gallery
          </Link>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="hs-cta">
        <div className="wrap hs-cta-inner">
          <p className="hs-eyebrow">Plan your stay</p>
          <h2 className="hs-cta-title">
            <span className="hs-script">Sukoon</span>
            <span className="hs-serif-sm">Ready When You Are</span>
          </h2>
          <p className="hs-cta-sub">
            Bookings are confirmed directly over WhatsApp or a phone call — no
            app, no account, no waiting for a reply.
          </p>
          <div className="hs-cta-actions">
            <a
              className="btn btn-gold"
              href={waLink("Hi, I'd like to book a room at Hotel Sukoon.")}
              target="_blank"
              rel="noreferrer"
            >
              Book on WhatsApp
            </a>
            <a className="btn btn-outline" href={`tel:+${SITE.phoneWa}`}>
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}