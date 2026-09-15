import PageHero from "../components/PageHero";
import { ROOMS } from "../data/rooms";
import { waLink } from "../data/site";
import "./Rooms.css";

export default function Rooms() {
  return (
    <>
      <PageHero
        eyebrow="Rooms"
        title="Pick the room that fits your stay"
        description="All three room types share the same clean, hygienic washrooms, air conditioning and friendly service — the difference is in size, bedding and finish."
      />

      <div className="room-sections">
        {ROOMS.map((room, i) => (
          <section
            className={`room-detail ${i % 2 === 1 ? "is-reverse" : ""}`}
            key={room.slug}
          >
            <div className="wrap room-detail-inner">
              <div className="room-detail-media">
                <img src={room.images[0]} alt={room.name} className="room-media-main" />
                <img src={room.images[1]} alt="" className="room-media-sub" />
              </div>

              <div className="room-detail-copy">
                <p className="eyebrow">Room type</p>
                <h2>{room.name}</h2>
                <p className="room-tagline">{room.tagline}</p>

                <ul className="room-features">
                  {room.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <a
                  className="btn btn-gold"
                  href={waLink(
                    `Hi, I'd like to check availability and pricing for the ${room.name} at Hotel Sukoon.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ask about the {room.name}
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
