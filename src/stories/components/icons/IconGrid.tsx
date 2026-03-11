import * as React from "react";

interface IconGridProps {
  icons: Array<{
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    name: string;
  }>;
  size?: number;
  color?: string;
}

export function IconGrid({ icons, size = 24, color }: IconGridProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
        gap: "1rem",
        color: color ?? "inherit",
      }}
    >
      {icons.map(({ Icon, name }) => (
        <div
          key={name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <Icon style={{ width: size, height: size }} />
          <span style={{ fontSize: "0.75rem", textAlign: "center" }}>
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}
