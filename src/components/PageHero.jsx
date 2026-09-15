import "./PageHero.css";

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="page-hero-title">{title}</h1>
        {description && <p className="page-hero-desc">{description}</p>}
      </div>
      <hr className="rule" />
    </section>
  );
}
