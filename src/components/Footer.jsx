import { Link } from "react-router-dom";
import { SITE, waLink } from "../data/site";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <img src="/images/logo.jpg" alt="Hotel Sukoon crest" className="footer-mark" />
          <p className="footer-tagline">
            A quiet, comfortable stay at the heart of Bilaspur.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Explore</h4>
          <Link to="/rooms">Rooms</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/amenities">Amenities</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Reach us</h4>
          <a href={waLink()} target="_blank" rel="noreferrer">
            {SITE.phoneDisplay}
          </a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <span>{SITE.address}</span>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Hotel Sukoon. All rights reserved.</span>
        <span>Booking is confirmed only over WhatsApp / phone.</span>
      </div>
    </footer>
  );
}
