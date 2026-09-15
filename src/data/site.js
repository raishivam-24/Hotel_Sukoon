export const SITE = {
  name: "Hotel Sukoon",
  phoneDisplay: "+91 78981 21515",
  phoneWa: "917898121515",
  email: "hotelsukoonbsp@gmail.com",
  address: "Indu Chowk, Bilaspur, Chhattisgarh",
  mapsQuery: "Indu Chowk, Bilaspur, Chhattisgarh",
};

export function waLink(message) {
  const base = `https://wa.me/${SITE.phoneWa}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
