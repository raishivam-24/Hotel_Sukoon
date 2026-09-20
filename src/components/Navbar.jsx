import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SITE, waLink } from "../data/site";
import "./Navbar.css";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/rooms", label: "Rooms" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={"nav" + (scrolled || open ? " is-scrolled" : "")}>
      <div className="wrap nav-inner">
        <NavLink to="/" className="nav-brand" onClick={() => setOpen(false)}>
          <img src="/images/logo.jpg" alt="Hotel Sukoon crest" className="nav-mark" />
          <span className="nav-word">
            Hotel <em>Sukoon</em>
          </span>
        </NavLink>

        <nav className={`nav-links ${open ? "is-open" : ""}`}>
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => "nav-link" + (isActive ? " is-active" : "")}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <a
            className="btn btn-gold nav-cta"
            href={waLink(`Hi Hotel Sukoon, I'd like to check room availability.`)}
            target="_blank"
            rel="noreferrer"
          >
            Book on WhatsApp
          </a>
        </nav>

        <button
          className={`nav-toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}