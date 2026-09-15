import PageHero from "../components/PageHero";
import { SITE, waLink } from "../data/site";
import { IconPin, IconPhone, IconMail, IconClock } from "../components/icons";
import "./Contact.css";

export default function Contact() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    SITE.mapsQuery
  )}&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="Every booking at Hotel Sukoon is confirmed directly over WhatsApp or a phone call — reach out and we'll take it from there."
      />

      <div className="section-tight">
        <div className="wrap contact-grid">
          <div className="contact-panel">
            <div className="contact-line">
              <span className="contact-icon">
                <IconPin />
              </span>
              <div>
                <h3>Address</h3>
                <p>{SITE.address}</p>
              </div>
            </div>

            <div className="contact-line">
              <span className="contact-icon">
                <IconPhone />
              </span>
              <div>
                <h3>Phone / WhatsApp</h3>
                <a href={waLink()} target="_blank" rel="noreferrer">
                  {SITE.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="contact-line">
              <span className="contact-icon">
                <IconMail />
              </span>
              <div>
                <h3>Email</h3>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
            </div>

            <div className="contact-line">
              <span className="contact-icon">
                <IconClock />
              </span>
              <div>
                <h3>Front desk</h3>
                <p>Open every day, all day</p>
              </div>
            </div>

            <a
              className="btn btn-gold contact-cta"
              href={waLink("Hi, I'd like to know more about staying at Hotel Sukoon.")}
              target="_blank"
              rel="noreferrer"
            >
              Message us on WhatsApp
            </a>
          </div>

          <div className="contact-map">
            <iframe
              title="Hotel Sukoon location"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </>
  );
}
