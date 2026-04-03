// src/components/UptimePanel.tsx
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

// ---- Design tokens ----
const colors = {
  surface: "#0D1220",
  text: "#E6F0FF",
  textDim: "#8DA0B8",
  track: "#1C283A",
  green: "#2EE59D",
};

const Card: React.FC<React.PropsWithChildren<{ pad?: number }>> = ({ children, pad = 16 }) => (
  <div
    style={{
      background: colors.surface,
      borderRadius: 14,
      padding: pad,
      border: "1px solid rgba(255,255,255,0.06)",
      boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
      position: "relative",
    }}
  >
    {children}
  </div>
);

const FeatureTitle: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div style={{ fontWeight: 700, color: colors.text, fontSize: 14 }}>{children}</div>
);

export type UptimePanelProps = {
  /** Uptime percentage 0..100 */
  value?: number;
  /** Size in px of the chart container (height) */
  height?: number;
  /** Active ring color */
  colorActive?: string;
  /** Track color */
  colorTrack?: string;
};

export function UptimePanel({
  value = 99.8,
  height = 110,
  colorActive = colors.green,
  colorTrack = colors.track,
}: UptimePanelProps) {
  const pct = Math.max(0, Math.min(100, value));
  const data = [{ name: "Uptime", value: pct }];

  return (
    <Card pad={16}>
      <FeatureTitle>Uptime</FeatureTitle>
      <div style={{ color: colors.textDim, fontSize: 12, marginBottom: 10 }}>Last 30 days</div>

      <div style={{ height, position: "relative" }}>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            data={data}
            innerRadius="74%"
            outerRadius="90%"
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <RadialBar
              dataKey="value"
              isAnimationActive
              animationDuration={800}
              cornerRadius={999}
              fill={colorActive}
              background={{ fill: colorTrack }}
            />
          </RadialBarChart>
        </ResponsiveContainer>

        {/* Center overlay label */}
        <div
          aria-hidden
          style={{
            position: "relative",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 30, fontWeight: 800, color: colors.text }}>
            {pct.toFixed(1)}%
          </div>
        </div>
      </div>
    </Card>
  );
}

export default UptimePanel;