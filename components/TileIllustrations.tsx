export function AiIllustration() {
  return (
    <svg
      viewBox="0 0 400 600"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="ai-glow-1" cx="50%" cy="40%" r="45%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#07080f" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ai-node-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="1" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.6" />
        </radialGradient>
        <filter id="ai-blur">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
      </defs>

      <rect width="400" height="600" fill="#07080f" />
      <rect width="400" height="600" fill="url(#ai-glow-1)" />

      {/* Grid backdrop */}
      {Array.from({ length: 9 }).map((_, c) =>
        Array.from({ length: 14 }).map((_, r) => (
          <circle
            key={`dot-${c}-${r}`}
            cx={c * 50 + 25}
            cy={r * 45 + 22}
            r="1"
            fill="rgba(255,255,255,0.07)"
          />
        ))
      )}

      {/* Connection lines */}
      {[
        [200, 160, 110, 280],
        [200, 160, 290, 280],
        [200, 160, 200, 310],
        [110, 280, 60, 400],
        [110, 280, 155, 400],
        [290, 280, 245, 400],
        [290, 280, 340, 400],
        [200, 310, 155, 400],
        [200, 310, 245, 400],
        [60, 400, 100, 510],
        [155, 400, 100, 510],
        [155, 400, 200, 510],
        [245, 400, 200, 510],
        [245, 400, 300, 510],
        [340, 400, 300, 510],
      ].map(([x1, y1, x2, y2], i) => (
        <line
          key={`line-${i}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="rgba(167,139,250,0.18)"
          strokeWidth="1"
        />
      ))}

      {/* Glow halos behind nodes */}
      {[
        [200, 160, 18, "#7c3aed", 0.5],
        [110, 280, 14, "#7c3aed", 0.35],
        [290, 280, 14, "#7c3aed", 0.35],
        [200, 310, 11, "#7c3aed", 0.3],
      ].map(([cx, cy, r, color, opacity], i) => (
        <circle
          key={`halo-${i}`}
          cx={cx as number}
          cy={cy as number}
          r={(r as number) * 2.5}
          fill={color as string}
          fillOpacity={opacity as number}
          filter="url(#ai-blur)"
        />
      ))}

      {/* Nodes — layer 1 (root) */}
      <circle cx="200" cy="160" r="14" fill="url(#ai-node-glow)" />
      <circle cx="200" cy="160" r="5" fill="white" fillOpacity="0.9" />

      {/* Nodes — layer 2 */}
      {[
        [110, 280, 10, "#8b5cf6"],
        [290, 280, 10, "#8b5cf6"],
        [200, 310, 8, "#6d28d9"],
      ].map(([cx, cy, r, fill], i) => (
        <circle key={`n2-${i}`} cx={cx as number} cy={cy as number} r={r as number} fill={fill as string} />
      ))}

      {/* Nodes — layer 3 */}
      {[60, 155, 245, 340].map((cx, i) => (
        <circle key={`n3-${i}`} cx={cx} cy={400} r="7" fill="#5b21b6" />
      ))}

      {/* Nodes — layer 4 */}
      {[100, 200, 300].map((cx, i) => (
        <circle key={`n4-${i}`} cx={cx} cy={510} r="5" fill="rgba(167,139,250,0.5)" />
      ))}

      {/* Teal accent pulse ring */}
      <circle cx="200" cy="160" r="26" fill="none" stroke="#2dd4bf" strokeWidth="0.8" strokeOpacity="0.3" />
      <circle cx="200" cy="160" r="40" fill="none" stroke="#2dd4bf" strokeWidth="0.5" strokeOpacity="0.12" />
    </svg>
  );
}

export function MlIllustration() {
  return (
    <svg
      viewBox="0 0 400 600"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ml-wave-1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
          <stop offset="30%" stopColor="#7c3aed" stopOpacity="0.7" />
          <stop offset="70%" stopColor="#2dd4bf" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="ml-wave-2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0" />
          <stop offset="40%" stopColor="#a78bfa" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="ml-center" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#07080f" stopOpacity="0" />
        </radialGradient>
        <filter id="ml-glow">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      <rect width="400" height="600" fill="#07080f" />
      <rect width="400" height="600" fill="url(#ml-center)" />

      {/* Horizontal rule grid */}
      {[150, 200, 250, 300, 350, 400, 450].map((y, i) => (
        <line
          key={`hg-${i}`}
          x1="0"
          y1={y}
          x2="400"
          y2={y}
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
        />
      ))}

      {/* Sigmoid-style curves (data transformation) */}
      {/* Curve 1 — wide, purple→teal */}
      <path
        d="M -10 420 C 80 420 120 200 200 200 C 280 200 320 380 410 380"
        fill="none"
        stroke="url(#ml-wave-1)"
        strokeWidth="2.5"
      />
      {/* Glow layer */}
      <path
        d="M -10 420 C 80 420 120 200 200 200 C 280 200 320 380 410 380"
        fill="none"
        stroke="#7c3aed"
        strokeWidth="6"
        strokeOpacity="0.15"
        filter="url(#ml-glow)"
      />

      {/* Curve 2 — offset, purple */}
      <path
        d="M -10 460 C 90 460 130 240 200 240 C 270 240 310 420 410 420"
        fill="none"
        stroke="url(#ml-wave-2)"
        strokeWidth="1.5"
      />

      {/* Curve 3 — teal accent, shifted */}
      <path
        d="M -10 380 C 70 380 110 160 200 160 C 290 160 330 340 410 340"
        fill="none"
        stroke="#2dd4bf"
        strokeWidth="1"
        strokeOpacity="0.3"
      />

      {/* Data scatter points along main curve */}
      {[
        [40, 415], [80, 395], [120, 350], [160, 280], [200, 200],
        [240, 230], [280, 300], [320, 355], [360, 378],
      ].map(([cx, cy], i) => (
        <circle key={`pt-${i}`} cx={cx} cy={cy} r="3" fill="#a78bfa" fillOpacity="0.8" />
      ))}

      {/* Axis lines */}
      <line x1="30" y1="100" x2="30" y2="520" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <line x1="30" y1="520" x2="380" y2="520" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

      {/* Axis labels (tick marks) */}
      {[150, 250, 350, 450].map((y, i) => (
        <line key={`tick-${i}`} x1="25" y1={y} x2="35" y2={y} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      ))}
      {[100, 180, 260, 340].map((x, i) => (
        <line key={`xtick-${i}`} x1={x} y1="515" x2={x} y2="525" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      ))}

      {/* Highlight dot at inflection */}
      <circle cx="200" cy="200" r="6" fill="#2dd4bf" />
      <circle cx="200" cy="200" r="14" fill="none" stroke="#2dd4bf" strokeWidth="1" strokeOpacity="0.4" />
    </svg>
  );
}

export function CloudIllustration() {
  return (
    <svg
      viewBox="0 0 400 600"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="cloud-glow" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#07080f" stopOpacity="0" />
        </radialGradient>
        <filter id="cloud-blur">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      <rect width="400" height="600" fill="#07080f" />
      <rect width="400" height="600" fill="url(#cloud-glow)" />

      {/* Concentric arcs — cloud layers */}
      {[60, 90, 120, 150, 185].map((r, i) => (
        <circle
          key={`arc-${i}`}
          cx="200"
          cy="280"
          r={r}
          fill="none"
          stroke={i % 2 === 0 ? "rgba(45,212,191,0.15)" : "rgba(167,139,250,0.1)"}
          strokeWidth="1"
          strokeDasharray={i % 2 === 0 ? "none" : "4 6"}
        />
      ))}

      {/* Hexagon grid — infrastructure nodes */}
      {[
        [200, 200],
        [163, 222], [237, 222],
        [126, 244], [200, 244], [274, 244],
        [163, 266], [237, 266],
        [200, 288],
      ].map(([cx, cy], i) => {
        const s = 16;
        const h = s * 0.866;
        const pts = [
          [cx, cy - s],
          [cx + h, cy - s / 2],
          [cx + h, cy + s / 2],
          [cx, cy + s],
          [cx - h, cy + s / 2],
          [cx - h, cy - s / 2],
        ]
          .map(([x, y]) => `${x},${y}`)
          .join(" ");
        const colors = ["#2dd4bf", "#7c3aed", "#2dd4bf", "#7c3aed", "#2dd4bf", "#7c3aed", "#7c3aed", "#2dd4bf", "#14b8a6"];
        return (
          <polygon
            key={`hex-${i}`}
            points={pts}
            fill={colors[i]}
            fillOpacity={i === 0 ? 0.35 : 0.15}
            stroke={colors[i]}
            strokeWidth="0.8"
            strokeOpacity="0.5"
          />
        );
      })}

      {/* Center highlight */}
      <circle cx="200" cy="244" r="8" fill="#2dd4bf" fillOpacity="0.6" />
      <circle cx="200" cy="244" r="4" fill="white" fillOpacity="0.9" />

      {/* Radiating connector lines */}
      {[
        [200, 244, 90, 130],
        [200, 244, 310, 130],
        [200, 244, 50, 320],
        [200, 244, 350, 320],
        [200, 244, 200, 390],
      ].map(([x1, y1, x2, y2], i) => (
        <line
          key={`ray-${i}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="rgba(45,212,191,0.15)"
          strokeWidth="1"
          strokeDasharray="3 5"
        />
      ))}

      {/* Outer node terminals */}
      {[
        [90, 130], [310, 130], [50, 320], [350, 320], [200, 390],
      ].map(([cx, cy], i) => (
        <circle key={`terminal-${i}`} cx={cx} cy={cy} r="5" fill="#7c3aed" fillOpacity="0.7" />
      ))}

      {/* Glow pulse behind center */}
      <circle cx="200" cy="244" r="30" fill="#2dd4bf" fillOpacity="0.08" filter="url(#cloud-blur)" />
    </svg>
  );
}

export function DataIllustration() {
  return (
    <svg
      viewBox="0 0 400 600"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="data-bar-1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="data-bar-2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="data-bar-3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.05" />
        </linearGradient>
        <radialGradient id="data-glow" cx="50%" cy="70%" r="55%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#07080f" stopOpacity="0" />
        </radialGradient>
        <filter id="data-blur">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      <rect width="400" height="600" fill="#07080f" />
      <rect width="400" height="600" fill="url(#data-glow)" />

      {/* Horizontal grid lines */}
      {[200, 260, 320, 380, 440].map((y, i) => (
        <line
          key={`hg-${i}`}
          x1="40"
          y1={y}
          x2="370"
          y2={y}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
      ))}

      {/* Bar chart columns */}
      {[
        { x: 55,  h: 180, grad: "data-bar-1" },
        { x: 100, h: 100, grad: "data-bar-3" },
        { x: 145, h: 240, grad: "data-bar-2" },
        { x: 190, h: 140, grad: "data-bar-3" },
        { x: 235, h: 200, grad: "data-bar-1" },
        { x: 280, h: 120, grad: "data-bar-3" },
        { x: 325, h: 260, grad: "data-bar-2" },
      ].map(({ x, h, grad }, i) => (
        <rect
          key={`bar-${i}`}
          x={x}
          y={440 - h}
          width="28"
          height={h}
          fill={`url(#${grad})`}
          rx="2"
        />
      ))}

      {/* Glow under tallest bars */}
      {[
        { x: 145, h: 240, color: "#2dd4bf" },
        { x: 325, h: 260, color: "#2dd4bf" },
      ].map(({ x, h, color }, i) => (
        <rect
          key={`glow-${i}`}
          x={x - 4}
          y={440 - h - 4}
          width="36"
          height={h + 4}
          fill={color}
          fillOpacity="0.08"
          rx="2"
          filter="url(#data-blur)"
        />
      ))}

      {/* Baseline */}
      <line x1="40" y1="440" x2="370" y2="440" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

      {/* Flowing stream line over bars */}
      <path
        d="M 40 390 C 70 370, 85 360 100 370 C 115 380 130 320 159 260 C 174 230 190 320 205 330 C 220 340 250 290 249 280 C 260 270 295 350 309 360 C 320 370 340 210 355 190"
        fill="none"
        stroke="#a78bfa"
        strokeWidth="1.5"
        strokeOpacity="0.6"
      />

      {/* Data points on stream */}
      {[
        [69, 380], [100, 370], [159, 260], [205, 330], [249, 280], [309, 360], [355, 190],
      ].map(([cx, cy], i) => (
        <circle key={`dp-${i}`} cx={cx} cy={cy} r="3" fill="#a78bfa" />
      ))}

      {/* Axis */}
      <line x1="40" y1="160" x2="40" y2="440" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    </svg>
  );
}
