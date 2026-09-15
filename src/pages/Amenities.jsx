import PageHero from "../components/PageHero";
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
import "./Amenities.css";

const AMENITIES = [
  { icon: IconBolt, title: "24×7 power backup", desc: "Uninterrupted power for lights, fans and air conditioning, day or night." },
  { icon: IconCar, title: "Free parking", desc: "On-site parking for cars and two-wheelers, included with your stay." },
  { icon: IconWifi, title: "Free Wi-Fi", desc: "Complimentary internet access in every room and common area." },
  { icon: IconSpark, title: "Clean, hygienic washrooms", desc: "Attached bathrooms cleaned and checked between every stay." },
  { icon: IconKey, title: "Easy check-in & check-out", desc: "A quick, paperwork-light process so you're never left waiting." },
  { icon: IconHeart, title: "Friendly, attentive staff", desc: "A small team that knows the city and is happy to help with anything you need." },
  { icon: IconPin, title: "Prime, central location", desc: "Indu Chowk puts you close to the market, transit and the rest of Bilaspur." },
  { icon: IconCoin, title: "Honest, affordable pricing", desc: "Straightforward rates with no hidden charges at checkout." },
  { icon: IconClock, title: "Flexible front desk hours", desc: "Someone is on hand to help whenever you arrive or need assistance." },
];

export default function Amenities() {
  return (
    <>
      <PageHero
        eyebrow="Amenities"
        title="Everything included in your stay"
        description="No add-ons, no fine print — these are simply part of staying at Hotel Sukoon."
      />

      <div className="section-tight">
        <div className="wrap">
          <div className="amenities-grid">
            {AMENITIES.map((a) => (
              <div className="amenity-row" key={a.title}>
                <span className="amenity-icon">
                  <a.icon />
                </span>
                <div>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
