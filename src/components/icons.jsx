const base = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const IconPin = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.4" />
  </svg>
);

export const IconCoin = (p) => (
  <svg {...base} {...p}>
    <ellipse cx="12" cy="7" rx="7" ry="3" />
    <path d="M5 7v10c0 1.66 3.13 3 7 3s7-1.34 7-3V7" />
    <path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" />
  </svg>
);

export const IconBolt = (p) => (
  <svg {...base} {...p}>
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
  </svg>
);

export const IconHeart = (p) => (
  <svg {...base} {...p}>
    <path d="M12 20s-7.5-4.6-9.7-9.3C.9 7.2 2.5 4 5.9 4c1.9 0 3.4 1 4.1 2.4C10.7 5 12.2 4 14.1 4c3.4 0 5 3.2 3.6 6.7C15.5 15.4 12 20 12 20Z" />
  </svg>
);

export const IconKey = (p) => (
  <svg {...base} {...p}>
    <circle cx="8" cy="15" r="3.4" />
    <path d="M10.4 12.6 18 5m0 0h-3.4M18 5v3.4" />
  </svg>
);

export const IconSpark = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3c0 3.5 1.5 6.5 5 8-3.5 1.5-5 4.5-5 8 0-3.5-1.5-6.5-5-8 3.5-1.5 5-4.5 5-8Z" />
  </svg>
);

export const IconCar = (p) => (
  <svg {...base} {...p}>
    <path d="M4 16v-3.2c0-.5.2-1 .6-1.3l1.9-1.8c.4-.4.9-.6 1.5-.6h7.9c.6 0 1.1.2 1.5.6l1.9 1.8c.4.3.6.8.6 1.3V16" />
    <path d="M4 16h16v2.4c0 .5-.4.9-.9.9h-1.4c-.5 0-.9-.4-.9-.9V17H7.2v1.4c0 .5-.4.9-.9.9H4.9c-.5 0-.9-.4-.9-.9V16Z" />
    <circle cx="7.5" cy="13.6" r=".2" />
    <circle cx="16.5" cy="13.6" r=".2" />
  </svg>
);

export const IconWifi = (p) => (
  <svg {...base} {...p}>
    <path d="M3 8.5a13 13 0 0 1 18 0" />
    <path d="M6.2 12a8.5 8.5 0 0 1 11.6 0" />
    <path d="M9.4 15.4a4 4 0 0 1 5.2 0" />
    <circle cx="12" cy="18.5" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const IconPhone = (p) => (
  <svg {...base} {...p}>
    <path d="M6 3h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3c0 1-1 1.7-2 1.5A15 15 0 0 1 4.5 5c-.2-1 .5-2 1.5-2Z" />
  </svg>
);

export const IconMail = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5.5" width="18" height="13" rx="1.4" />
    <path d="m4 6.5 8 6.2 8-6.2" />
  </svg>
);

export const IconClock = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);
