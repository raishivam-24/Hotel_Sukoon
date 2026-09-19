import { SITE, waLink } from "../data/site";
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
import "./About.css";

const WHY_US = [
  { icon: IconBolt, title: "24×7 Power Backup", desc: "Uninterrupted power for lights, fans and air conditioning, day or night." },
  { icon: IconCar, title: "Free Parking", desc: "On-site parking for cars and two-wheelers, included with your stay." },
  { icon: IconWifi, title: "Free Wi-Fi", desc: "Complimentary internet access in every room and common area." },
  { icon: IconSpark, title: "Clean, Hygienic Washrooms", desc: "Attached bathrooms cleaned and checked between every stay." },
  { icon: IconKey, title: "Easy Check-In & Check-Out", desc: "A quick, paperwork-light process so you're never left waiting." },
  { icon: IconHeart, title: "Friendly, Attentive Staff", desc: "A small team that knows the city and is happy to help with anything you need." },
  { icon: IconPin, title: "Prime, Central Location", desc: "Indu Chowk puts you close to the market, transit and the rest of Bilaspur." },
  { icon: IconCoin, title: "Honest, Affordable Pricing", desc: "Straightforward rates with no hidden charges at checkout." },
  { icon: IconClock, title: "Flexible Front Desk Hours", desc: "Someone is on hand to help whenever you arrive or need assistance." },
];

export default function About() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="ab-hero">
        <img className="ab-hero-bg" src="/images/exterior-building.jpg" alt="" aria-hidden="true" />
        <div className="ab-hero-scrim" />
        <div className="wrap ab-hero-content">
          <p className="hs-welcome">✦ Discover Our Story ✦</p>
          <h1 className="hs-hero-title">
            <span className="hs-script">Our Story</span>
            <span className="hs-serif">About Us</span>
          </h1>
          <p className="hs-hero-sub">
            A quiet, honest place to stay — built around comfort, care and a
            genuine welcome.
          </p>
        </div>
      </section>

      {/* ---------- DARK SECTION: STORY + WHY US + CTA ---------- */}
      <div className="ab-dark">
        <div className="ab-dark-bg" />

        {/* ---------- OUR STORY ---------- */}
        <section className="hs-section ab-story-section">
          <div className="wrap ab-story-grid">
            <div className="ab-story-media">
              <img src="/images/exterior-building.jpg" alt="Hotel Sukoon exterior" />
            </div>

            <div className="ab-story-copy">
              <p className="hs-eyebrow">Our Story</p>
              <h2 className="ab-story-title">
                <span className="hs-script-sm">Comfort</span>
                <span>Rooted In Bilaspur</span>
              </h2>
              <p>
                Hotel Sukoon started with a simple idea: a clean, comfortable
                room shouldn't come with a complicated booking process or a
                price tag full of surprises. We built our small hotel right
                at Indu Chowk, in the heart of Bilaspur, so guests could stay
                close to everything the city has to offer without paying for
                things they don't need.
              </p>
              <p>
                Every room is looked after between stays, every rate is
                quoted upfront, and every booking is confirmed with a real
                conversation — usually over a quick WhatsApp message or a
                phone call. No apps, no accounts, no waiting around for a
                reply.
              </p>
              <p>
                We're not trying to be a five-star resort. We're trying to be
                the kind of place where you can put your bags down, get a
                good night's sleep, and get on with why you actually came to
                Bilaspur.
              </p>

              <a
                className="btn btn-gold ab-story-btn"
                href={waLink("Hi, I'd like to know more about staying at Hotel Sukoon.")}
                target="_blank"
                rel="noreferrer"
              >
                Message Us on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ---------- WHY CHOOSE US ---------- */}
        <section className="hs-section ab-why">
          <div className="wrap">
            <div className="hs-head">
              <p className="hs-eyebrow">Why Stay With Us</p>
              <h2 className="hs-head-title">
                <span className="hs-script-sm">Everything</span>
                <span>You Can Count On</span>
              </h2>
            </div>

            <div className="ab-why-list">
              {WHY_US.map((item) => (
                <div className="ab-why-row" key={item.title}>
                  <span className="ab-why-icon">
                    <item.icon />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- CTA ---------- */}
        <section className="hs-section ab-cta">
          <div className="wrap ab-cta-inner">
            <p className="hs-eyebrow">Ready When You Are</p>
            <h2 className="ab-cta-title">
              <span className="hs-script-sm">Come</span>
              <span>Experience It Yourself</span>
            </h2>
            <p className="ab-cta-sub">
              Bookings are confirmed directly over WhatsApp or a phone call —
              no app, no account, no waiting for a reply.
            </p>
            <div className="ab-cta-actions">
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
      </div>
    </>
  );
}