import { Link } from "react-router-dom";
import { SITE, waLink } from "../data/site";
import { ROOMS } from "../data/rooms";
import { IconPin, IconCoin, IconBolt, IconHeart, IconKey, IconSpark, IconCar } from "../components/icons";
import "./Home.css";

const FEATURES = [
  {
    icon: IconPin,
    title: "Prime location at Indu Chowk",
    desc: "Set right in the middle of Bilaspur, minutes from the market, the station and the city's main roads.",
  },
  {
    icon: IconCoin,
    title: "The best affordable stay in the city",
    desc: "Honest, upfront pricing for a room that feels far better than the rate suggests.",
  },
  {
    icon: IconBolt,
    title: "Power backup, round the clock",
    desc: "Lights, fans and AC keep running through outages — no surprises, day or night.",
  },
  {
    icon: IconHeart,
    title: "Staff who treat you like a guest, not a booking",
    desc: "Warm, attentive people at the desk who are genuinely happy to help.",
  },
  {
    icon: IconKey,
    title: "Easy check-in, easier check-out",
    desc: "No long forms or waiting around — settle in and leave on your own time.",
  },
  {
    icon: IconSpark,
    title: "Clean rooms, hygienic washrooms",
    desc: "Every room is turned over properly between guests — nothing rushed, nothing skipped.",
  },
  {
    icon: IconCar,
    title: "Free parking on site",
    desc: "Leave your car or bike right at the property, at no extra cost.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Indu Chowk, Bilaspur</p>
            <h1 className="hero-title">
              A quiet room,<br />right where the city meets you.
            </h1>
            <p className="hero-sub">
              Hotel Sukoon is a small, comfortable hotel at the heart of Bilaspur —
              clean rooms, honest pricing and a team that actually looks after you.
            </p>
            <div className="hero-actions">
              <a
                className="btn btn-gold"
                href={waLink("Hi, I'd like to book a room at Hotel Sukoon.")}
                target="_blank"
                rel="noreferrer"
              >
                Book on WhatsApp
              </a>
              <Link className="btn btn-outline" to="/rooms">
                View rooms
              </Link>
            </div>
          </div>

          <div className="hero-media">
            <img src="/images/reception-wide.jpg" alt="Hotel Sukoon reception lounge" />
            <div className="hero-tag">
              <img src="/images/logo.jpg" alt="" />
              <div>
                <strong>Hotel Sukoon</strong>
                <span>{SITE.address}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section meaning">
        <div className="wrap meaning-grid">
          <div className="meaning-text">
            <p className="eyebrow">What we're named for</p>
            <p className="meaning-quote">
              "Sukoon" is a word borrowed from Hindi and Urdu for a very
              particular kind of relief — the calm that arrives once you've
              finally stopped moving.
            </p>
            <p className="meaning-body">
              That's what we've tried to build into every room: a place to put
              your bags down, breathe, and not think about your stay again
              until it's time to check out.
            </p>
          </div>
          <div className="meaning-media">
            <img src="/images/wall-sign.jpg" alt="Hotel Sukoon signage at the entrance" />
          </div>
        </div>
      </section>

      <section className="section-tight features">
        <div className="wrap">
          <p className="eyebrow">Why guests choose us</p>
          <h2 className="features-title">Everything you'd hope for, nothing you'd have to ask for</h2>
          <div className="feature-list">
            {FEATURES.map((f) => (
              <div className="feature-row" key={f.title}>
                <span className="feature-icon">
                  <f.icon />
                </span>
                <div>
                  <h3 className="feature-name">{f.title}</h3>
                  <p className="feature-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section rooms-preview">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Rooms</p>
              <h2>Three ways to stay</h2>
            </div>
            <Link to="/rooms" className="btn btn-outline">
              See all rooms
            </Link>
          </div>

          <div className="room-grid">
            {ROOMS.map((room) => (
              <Link to="/rooms" key={room.slug} className="room-card">
                <div className="room-card-media">
                  <img src={room.images[0]} alt={room.name} />
                </div>
                <h3>{room.name}</h3>
                <p>{room.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight gallery-teaser">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">A look inside</p>
              <h2>Around the property</h2>
            </div>
            <Link to="/gallery" className="btn btn-outline">
              Open gallery
            </Link>
          </div>
          <div className="teaser-strip">
            <img src="/images/lounge-sofa.jpg" alt="Lounge seating" />
            <img src="/images/corridor.jpg" alt="Guest room corridor" />
            <img src="/images/bathroom-sink-mirror.jpg" alt="Washroom" />
            <img src="/images/reception-desk-1.jpg" alt="Reception desk" />
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap cta-band-inner">
          <div>
            <p className="eyebrow" style={{ color: "var(--gold)" }}>
              Plan your stay
            </p>
            <h2 className="cta-title">Ready when you are.</h2>
            <p className="cta-sub">
              Bookings are confirmed directly over WhatsApp or a phone call — no
              app, no account, no waiting for a reply.
            </p>
          </div>
          <div className="cta-actions">
            <a
              className="btn btn-gold"
              href={waLink("Hi, I'd like to book a room at Hotel Sukoon.")}
              target="_blank"
              rel="noreferrer"
            >
              Message on WhatsApp
            </a>
            <a className="btn btn-outline-light" href={`tel:+${SITE.phoneWa}`}>
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
