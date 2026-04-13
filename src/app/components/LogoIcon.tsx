interface LogoIconProps {
  className?: string;
  variant?: 'full-color' | 'blue' | 'white';
}

export function LogoIcon({ className = '', variant = 'full-color' }: LogoIconProps) {
  const colors = {
    'full-color': {
      primary: '#1E40AF',
      accent: '#10B981',
      scale: '#1E40AF',
      nodes: '#10B981',
    },
    'blue': {
      primary: '#1E40AF',
      accent: '#1E40AF',
      scale: '#1E40AF',
      nodes: '#1E40AF',
    },
    'white': {
      primary: '#FFFFFF',
      accent: '#FFFFFF',
      scale: '#FFFFFF',
      nodes: '#FFFFFF',
    },
  };

  const c = colors[variant];

  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Connection nodes - subtle tech elements */}
      <circle cx="30" cy="35" r="2.5" fill={c.nodes} opacity="0.4" />
      <circle cx="90" cy="35" r="2.5" fill={c.nodes} opacity="0.4" />
      <circle cx="20" cy="55" r="2" fill={c.nodes} opacity="0.3" />
      <circle cx="100" cy="55" r="2" fill={c.nodes} opacity="0.3" />

      {/* Connection lines */}
      <line x1="30" y1="35" x2="42" y2="48" stroke={c.nodes} strokeWidth="1" opacity="0.2" />
      <line x1="90" y1="35" x2="78" y2="48" stroke={c.nodes} strokeWidth="1" opacity="0.2" />

      {/* Central balance scale */}
      <g>
        {/* Scale base */}
        <rect x="56" y="85" width="8" height="4" rx="1" fill={c.primary} />

        {/* Vertical post */}
        <rect x="58" y="50" width="4" height="35" fill={c.primary} />

        {/* Horizontal beam */}
        <rect x="40" y="48" width="40" height="3" rx="1.5" fill={c.scale} />

        {/* Left scale pan */}
        <g>
          <line x1="42" y1="50" x2="38" y2="58" stroke={c.scale} strokeWidth="1.5" />
          <line x1="46" y1="50" x2="50" y2="58" stroke={c.scale} strokeWidth="1.5" />
          <path
            d="M 35 58 L 35 60 Q 35 62 37 62 L 51 62 Q 53 62 53 60 L 53 58 Z"
            fill={c.accent}
            opacity="0.9"
          />
        </g>

        {/* Right scale pan */}
        <g>
          <line x1="74" y1="50" x2="70" y2="58" stroke={c.scale} strokeWidth="1.5" />
          <line x1="78" y1="50" x2="82" y2="58" stroke={c.scale} strokeWidth="1.5" />
          <path
            d="M 67 58 L 67 60 Q 67 62 69 62 L 83 62 Q 85 62 85 60 L 85 58 Z"
            fill={c.accent}
            opacity="0.9"
          />
        </g>

        {/* Center pivot point */}
        <circle cx="60" cy="49" r="3" fill={c.primary} />
        <circle cx="60" cy="49" r="1.5" fill={c.accent} />
      </g>

      {/* Checkmark element - integrated subtly */}
      <path
        d="M 55 28 L 58 32 L 65 23"
        stroke={c.accent}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
