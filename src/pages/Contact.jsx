import { useState } from "react";
import { SITE, waLink } from "../data/site";
import { ROOMS } from "../data/rooms";
import "./Contact.css";

// Hotel Sukoon — Sheela Chambers, above Haire Showroom, between Indu Chowk
// and Rajiv Gandhi Chowk, Bilaspur, Chhattisgarh 495001
// Verified exact coordinates (from Google's own listing for this hotel) —
// used directly so the embed always zooms straight to the real building
// instead of resolving to a different nearby hotel or showing the world map.
const HOTEL_LAT = 22.0793649;
const HOTEL_LNG = 82.1414083;
const DIRECTIONS_URL = "https://maps.app.goo.gl/jRBJZNJZEfsTyKi77";

const LANDMARKS = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="1.5" />
        <path d="M12 8v6M9 11h6M8 21v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3" />
      </svg>
    ),
    title: "Lotus Children Hospital",
    desc: "Just 0.4 km away, on Raipur Road — about a 2-minute walk for medical assistance.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 6h15l-1.5 9h-12z" />
        <path d="M6 6 5 3H2M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      </svg>
    ),
    title: "Rajiv Gandhi Chowk",
    desc: "Right at the doorstep — shops, eateries and everyday essentials just steps away.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="13" rx="4" />
        <path d="M4 11h16M8 19l-2 2M16 19l2 2M9 16v0M15 16v0" />
      </svg>
    ),
    title: "Bilaspur Junction",
    desc: "About 4 km away — roughly a 10-minute drive to the city's main railway station.",
  },
];

function IconPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.5 2L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2-.5c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1 Guest",
    checkin: "",
    checkout: "",
    roomType: "",
    message: "",
  });

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      "Hi, I'd like to reserve a room at Hotel Sukoon.",
      `Name: ${form.name || "-"}`,
      form.email && `Email: ${form.email}`,
      `Phone: ${form.phone || "-"}`,
      `Guests: ${form.guests}`,
      (form.checkin || form.checkout) && `Dates: ${form.checkin || "?"} to ${form.checkout || "?"}`,
      form.roomType && `Room type: ${form.roomType}`,
      form.message && `Message: ${form.message}`,
    ].filter(Boolean);

    window.open(waLink(lines.join("\n")), "_blank", "noreferrer");
  };

  // Pin by exact coordinates at a street-level zoom (z=17) rather than a
  // free-text address or bare place_id — both of those were resolving to
  // an unzoomed world map / the wrong nearby hotel in testing.
  const mapSrc = `https://www.google.com/maps?q=${HOTEL_LAT},${HOTEL_LNG}&z=17&output=embed`;

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="ct-hero">
        <img className="ct-hero-bg" src="/images/exterior-building.jpg" alt="" aria-hidden="true" />
        <div className="ct-hero-scrim" />
        <div className="wrap ct-hero-content">
          <p className="hs-welcome">✦ Get In Touch ✦</p>
          <h1 className="hs-hero-title">
            <span className="hs-script">Reach Out</span>
            <span className="hs-serif">Contact Us</span>
          </h1>
          <p className="hs-hero-sub">We await the pleasure of hearing from you.</p>
        </div>
      </section>

      {/* ---------- DARK SECTION: LANDMARKS + FORM ---------- */}
      <div className="ct-dark">
        <div className="ct-dark-bg" />


        {/* ---------- FORM + INFO ---------- */}
        <section className="hs-section ct-form-section">
          <div className="wrap ct-form-grid">
            <div className="ct-form-col">
              <p className="hs-eyebrow">Booking Inquiry</p>
              <h2 className="ct-col-title">
                <span className="hs-script-sm">Enquire</span>
                <span>Reserve Your Stay</span>
              </h2>
              <p className="ct-col-sub">
                Complete the form below and our team will personally reach
                out to confirm your reservation via WhatsApp.
              </p>

              <form className="ct-form" onSubmit={handleSubmit}>
                <div className="ct-form-row">
                  <label>
                    Name *
                    <input
                      required
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Your Name"
                    />
                  </label>
                  <label>
                    Email
                    <input
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="your@email.com (optional)"
                    />
                  </label>
                </div>

                <div className="ct-form-row">
                  <label>
                    Phone *
                    <input
                      required
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="+91 xxxxxxxxxx"
                    />
                  </label>
                  <label>
                    Guests
                    <select value={form.guests} onChange={update("guests")}>
                      {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n}>{n} Guest{n > 1 ? "s" : ""}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="ct-form-row">
                  <label>
                    Check-in Date
                    <input type="date" value={form.checkin} onChange={update("checkin")} />
                  </label>
                  <label>
                    Check-out Date
                    <input type="date" value={form.checkout} onChange={update("checkout")} />
                  </label>
                </div>

                <label>
                  Room Type
                  <select value={form.roomType} onChange={update("roomType")}>
                    <option value="">Select Room Type</option>
                    {ROOMS.map((r) => (
                      <option key={r.slug} value={r.name}>{r.name}</option>
                    ))}
                  </select>
                </label>

                <label>
                  Message
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Any special requests or inquiries?"
                  />
                </label>

                <button type="submit" className="btn btn-gold ct-submit">
                  Submit Inquiry
                </button>
              </form>
            </div>

            <div className="ct-form-col">
              <p className="hs-eyebrow">Contact Information</p>
              <h2 className="ct-col-title">
                <span className="hs-script-sm">Connect</span>
                <span>Get In Touch</span>
              </h2>
              <p className="ct-col-sub">
                Have questions? Reach out through any of the channels below.
              </p>

              <div className="ct-info-line">
                <span className="ct-info-icon"><IconPin /></span>
                <div>
                  <h4>Address</h4>
                  <p>{SITE.name || "Hotel Sukoon"}</p>
                  <p>{SITE.address}</p>
                </div>
              </div>

              <div className="ct-info-line">
                <span className="ct-info-icon"><IconPhone /></span>
                <div>
                  <h4>Phone</h4>
                  <a href={`tel:+${SITE.phoneWa}`}>{SITE.phoneDisplay}</a>
                </div>
              </div>

              <div className="ct-info-line">
                <span className="ct-info-icon"><IconMail /></span>
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </div>
              </div>

              <a
                className="btn btn-gold ct-whatsapp"
                href={waLink("Hi, I'd like to know more about staying at Hotel Sukoon.")}
                target="_blank"
                rel="noreferrer"
              >
                Message Us on WhatsApp
              </a>
            </div>
          </div>
        </section>
        {/* ---------- NEARBY LANDMARKS ---------- */}
        <section className="hs-section ct-landmarks">
          <div className="wrap ct-landmarks-inner">
            <div className="hs-head">
              <p className="hs-eyebrow">Explore</p>
              <h2 className="hs-head-title">
                <span className="hs-script-sm">Nearby</span>
                <span>Landmarks</span>
              </h2>
            </div>

            <div className="ct-landmark-grid">
              {LANDMARKS.map((l) => (
                <div className="ct-landmark-card" key={l.title}>
                  <span className="ct-landmark-icon">{l.icon}</span>
                  <h3>{l.title}</h3>
                  <p>{l.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
      </div>
      {/* ---------- MAP ---------- */}
      <section className="ct-map-section">
        <div className="wrap">
          <div className="ct-map">
            <iframe
              title="Hotel Sukoon location"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            className="btn btn-outline ct-directions"
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
          >
            Get Directions ↗
          </a>
        </div>
      </section>
    </>
  );
}