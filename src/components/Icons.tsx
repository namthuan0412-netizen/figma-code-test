import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number, props: SVGProps<SVGSVGElement>) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export const ChevronLeft = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="m15 18-6-6 6-6" />
  </svg>
);

export const ChevronDown = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const Search = ({ size = 20, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

export const Sliders = ({ size = 20, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0" />
    <circle cx="16" cy="6" r="2" />
    <circle cx="10" cy="12" r="2" />
    <circle cx="18" cy="18" r="2" />
  </svg>
);

export const Bag = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M5 8h14l-1 12H6L5 8Z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </svg>
);

export const Heart = ({ size = 18, filled, ...p }: IconProps & { filled?: boolean }) => (
  <svg {...base(size, p)} fill={filled ? "currentColor" : "none"}>
    <path d="M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z" />
  </svg>
);

export const Plus = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size, p)} strokeWidth={2.5}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const Star = ({ size = 12, ...p }: IconProps) => (
  <svg {...base(size, p)} fill="currentColor" stroke="none">
    <path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9L12 2.5Z" />
  </svg>
);

export const Chili = ({ size = 12, ...p }: IconProps) => (
  <svg {...base(size, p)} fill="currentColor" stroke="none">
    <path d="M14.5 3c.8 0 1.5.6 1.5 1.4v.8c2.3.6 4 2.6 4 5 0 5.8-6.6 10.8-13.4 10.8-1.5 0-2.6-1.4-2-2.8.3-.7 1-1.1 1.7-1.2 4.5-.6 6.7-3.6 7.2-6.8.2-1.5 1.1-2.6 2.3-3.1v-.7c0-.6-.6-1-1.2-.9-.5.1-1-.3-1-.8 0-.5.4-.8.9-.7Z" />
  </svg>
);

export const Home = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1v-9.5Z" />
  </svg>
);

export const Grid = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <rect x="4" y="4" width="7" height="7" rx="2" />
    <rect x="13" y="4" width="7" height="7" rx="2" />
    <rect x="4" y="13" width="7" height="7" rx="2" />
    <rect x="13" y="13" width="7" height="7" rx="2" />
  </svg>
);

export const User = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
);

export const Truck = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M3 6h11v10H3zM14 10h4l3 3v3h-7" />
    <circle cx="7" cy="18" r="1.8" />
    <circle cx="17" cy="18" r="1.8" />
  </svg>
);
