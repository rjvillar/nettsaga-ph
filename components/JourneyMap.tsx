export default function JourneyMap() {
  return (
    <div className="rounded-lg border border-dark/[0.06] bg-paper p-4 sm:p-6">
      <svg
        viewBox="0 0 480 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        aria-label="Journey map showing Regen Digital Solutions' path from Oslo to Makati"
      >
        {/* ── Curved dotted path ── */}
        <path
          d="M 100 80 C 160 140, 200 220, 380 300"
          stroke="#9CA3AF"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          strokeLinecap="round"
          fill="none"
        />

        {/* ── Floating metric badges ── */}
        {/* 500+ Projects — green */}
        <g transform="translate(128, 148)">
          <rect x="0" y="0" width="104" height="28" rx="6" fill="#0B0B0B" />
          <circle cx="15" cy="14" r="3" fill="#22C55E" />
          <text
            x="60"
            y="17.5"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="9"
            fontWeight="600"
            letterSpacing="0.03em"
            fill="#22C55E"
          >
            500+ Projects
          </text>
        </g>

        {/* Est. 2024 — violet */}
        <g transform="translate(228, 210)">
          <rect x="0" y="0" width="86" height="28" rx="6" fill="#0B0B0B" />
          <circle cx="15" cy="14" r="3" fill="#8B5CF6" />
          <text
            x="50"
            y="17.5"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="9"
            fontWeight="600"
            letterSpacing="0.03em"
            fill="#8B5CF6"
          >
            Est. 2024
          </text>
        </g>

        {/* 7-Day Delivery — rose */}
        <g transform="translate(293, 260)">
          <rect x="0" y="0" width="112" height="28" rx="6" fill="#0B0B0B" />
          <circle cx="15" cy="14" r="3" fill="#F43F5E" />
          <text
            x="64"
            y="17.5"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="9"
            fontWeight="600"
            letterSpacing="0.03em"
            fill="#F43F5E"
          >
            7-Day Delivery
          </text>
        </g>

        {/* ── Oslo node — blue ── */}
        <g transform="translate(100, 80)">
          {/* Pulse ring */}
          <circle cx="0" cy="0" r="14" fill="#3B82F6" opacity="0.08">
            <animate
              attributeName="r"
              values="10;18;10"
              dur="2.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.10;0.02;0.10"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </circle>
          {/* Solid dot */}
          <circle cx="0" cy="0" r="5" fill="#3B82F6" />
          {/* Label */}
          <text
            x="14"
            y="-10"
            fontFamily="monospace"
            fontSize="9"
            fontWeight="700"
            letterSpacing="0.15em"
            fill="#3B82F6"
          >
            HQ // OSLO
          </text>
          <text
            x="14"
            y="2"
            fontFamily="monospace"
            fontSize="8"
            fill="#9CA3AF"
          >
            Kirkegata 15
          </text>
        </g>

        {/* ── Makati node — amber ── */}
        <g transform="translate(380, 300)">
          {/* Pulse ring */}
          <circle cx="0" cy="0" r="14" fill="#F59E0B" opacity="0.08">
            <animate
              attributeName="r"
              values="10;18;10"
              dur="2.5s"
              repeatCount="indefinite"
              begin="0.8s"
            />
            <animate
              attributeName="opacity"
              values="0.10;0.02;0.10"
              dur="2.5s"
              repeatCount="indefinite"
              begin="0.8s"
            />
          </circle>
          {/* Solid dot */}
          <circle cx="0" cy="0" r="5" fill="#F59E0B" />
          {/* Label */}
          <text
            x="-130"
            y="-12"
            fontFamily="monospace"
            fontSize="9"
            fontWeight="700"
            letterSpacing="0.15em"
            fill="#F59E0B"
          >
            OFFICE // MAKATI
          </text>
          <text
            x="-130"
            y="0"
            fontFamily="monospace"
            fontSize="8"
            fill="#9CA3AF"
          >
            Burgundy Tower
          </text>
        </g>
      </svg>
    </div>
  );
}
