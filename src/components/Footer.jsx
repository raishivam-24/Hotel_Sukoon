import { Link } from "react-router-dom";
import { SITE, waLink } from "../data/site";
import "./Footer.css";

const SOCIALS = [
  {
    label: "Facebook",
    href: SITE.facebook || "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: SITE.instagram || "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: waLink("Hi, I'd like to know more about Hotel Sukoon."),
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.5 8.5 0 0 1-12.8 7.3L3 20l1.3-5A8.5 8.5 0 1 1 21 11.5Z" />
        <path d="M8.5 9.5c0 3.5 2.5 6 6 6 .5 0 1-.5 1-1.2 0-.3-.1-.5-.3-.6l-1.7-1c-.3-.2-.6-.1-.8.1l-.4.5c-1-.5-1.8-1.3-2.3-2.3l.5-.4c.2-.2.3-.5.1-.8l-1-1.7c-.1-.2-.3-.3-.6-.3-.7 0-1.2.5-1.2 1Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const mapHref =
    SITE.mapUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}`;

  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <img src="/images/logo.jpg" alt="Hotel Sukoon crest" className="footer-mark" />
          <h3 className="footer-name">
            Hotel <span>Sukoon</span>
          </h3>
          <p className="footer-tag">A Comfortable Stay</p>
          <p className="footer-desc">
            A quiet, clean room at the heart of Bilaspur — honest pricing,
            warm service, and a place to actually rest.
          </p>

          <div className="footer-socials">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="footer-social"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/rooms">Rooms</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/amenities">Amenities</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Contact Info</h4>

          <p className="footer-sub">Address</p>
          <span>{SITE.address}</span>
          <a href={mapHref} target="_blank" rel="noreferrer" className="footer-maplink">
            📍 View on Map
          </a>

          <p className="footer-sub footer-sub-spaced">Contact Details</p>
          <a href={`tel:+${SITE.phoneWa}`}>{SITE.phoneDisplay}</a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Hotel Sukoon. All rights reserved.</span>
        <div className="footer-bottom-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}