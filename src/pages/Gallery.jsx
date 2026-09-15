import PageHero from "../components/PageHero";
import "./Gallery.css";

const GROUPS = [
  {
    title: "Reception & lobby",
    images: [
      { src: "/images/reception-wide.jpg", alt: "Reception lounge" },
      { src: "/images/reception-desk-1.jpg", alt: "Reception desk" },
      { src: "/images/reception-mirror-sign.jpg", alt: "Hotel Sukoon signage above the desk" },
      { src: "/images/reception-desk-2.jpg", alt: "Reception work desk" },
    ],
  },
  {
    title: "Common areas",
    images: [
      { src: "/images/lounge-sofa.jpg", alt: "Lounge seating area" },
      { src: "/images/lounge-window.jpg", alt: "Window seating with city view" },
      { src: "/images/corridor.jpg", alt: "Guest room corridor" },
      { src: "/images/elevator.jpg", alt: "Lift lobby" },
    ],
  },
  {
    title: "Rooms",
    images: [
      { src: "/images/bedroom-navy.jpg", alt: "Classic room with navy headboard" },
      { src: "/images/bedroom-teal-floral.jpg", alt: "Deluxe room bedding" },
      { src: "/images/bedroom-olive.jpg", alt: "Comfortable room bed" },
      { src: "/images/bedroom-door-101-a.jpg", alt: "Room 101 seating corner" },
      { src: "/images/bedroom-door-101-b.jpg", alt: "Room 101 entrance" },
      { src: "/images/ac-fan.jpg", alt: "Air conditioning and ceiling fan" },
    ],
  },
  {
    title: "Washrooms",
    images: [
      { src: "/images/bathroom-sink-mirror.jpg", alt: "Washroom sink and mirror" },
      { src: "/images/bathroom-shower.jpg", alt: "Shower fitting" },
      { src: "/images/bathroom-1.jpg", alt: "Washroom fittings" },
      { src: "/images/bathroom-toilet.jpg", alt: "Washroom toilet" },
    ],
  },
];

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A look around Hotel Sukoon"
        description="From the reception to the rooms and washrooms — a few honest photos of the property, exactly as it is."
      />

      <div className="section-tight">
        <div className="wrap">
          {GROUPS.map((group) => (
            <div className="gallery-group" key={group.title}>
              <h2 className="gallery-group-title">{group.title}</h2>
              <div className="gallery-grid">
                {group.images.map((img) => (
                  <div className="gallery-item" key={img.src}>
                    <img src={img.src} alt={img.alt} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
