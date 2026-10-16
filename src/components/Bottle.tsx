interface BottleProps {
  body: string;
  cap: string;
  label: string;
  labelText: string;
  className?: string;
}

/** Simple illustrated sauce bottle — stands in for product photography. */
export function Bottle({ body, cap, label, labelText, className }: BottleProps) {
  return (
    <svg viewBox="0 0 80 160" className={className} role="img" aria-label={`Chai ${labelText}`}>
      {/* shadow */}
      <ellipse cx="40" cy="154" rx="26" ry="4" fill="#000" opacity="0.12" />
      {/* cap */}
      <rect x="29" y="4" width="22" height="18" rx="4" fill={cap} />
      <rect x="29" y="16" width="22" height="3" fill="#000" opacity="0.15" />
      {/* neck + shoulders + body */}
      <path
        d="M32 22h16v14c0 6 16 12 16 28v80a8 8 0 0 1-8 8H24a8 8 0 0 1-8-8V64c0-16 16-22 16-28V22Z"
        fill={body}
      />
      {/* highlight */}
      <path d="M22 70c0-8 4-13 8-16v86c-5 0-8-3-8-8V70Z" fill="#fff" opacity="0.22" />
      {/* label */}
      <rect x="18" y="78" width="44" height="50" rx="6" fill={label} />
      <text
        x="40"
        y="96"
        textAnchor="middle"
        fontSize="8"
        fontWeight="800"
        fontFamily="Be Vietnam Pro, sans-serif"
        fill="#1d1b1a"
        letterSpacing="0.5"
      >
        HEINZ
      </text>
      <rect x="24" y="101" width="32" height="1" fill="#1d1b1a" opacity="0.25" />
      <text
        x="40"
        y="114"
        textAnchor="middle"
        fontSize={labelText.length > 7 ? 5.6 : 7}
        fontWeight="700"
        fontFamily="Be Vietnam Pro, sans-serif"
        fill={body}
      >
        {labelText}
      </text>
    </svg>
  );
}
