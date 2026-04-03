// // src/components/DashboardGraphs.tsx
// import React, { useMemo, useState } from "react";
// import styled from "styled-components";
// // import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";
// import UptimePanel from "./UptimePanel";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   TooltipProps,
// } from "recharts";

// // data from JSON ts file
// import {
//   requestVolumeData,
//   latency24hData,
//   uptimePercentage,
//   type RangeKey,
//   type RequestPoint,
// } from "./metrics";

// /* == THEME (dark) === */
// const colors = {
//   bg: "#0B1220",
//   card: "#0E1726",
//   cardAlt: "#0D1524",
//   border: "rgba(255,255,255,0.08)",
//   text: "rgba(255,255,255,0.85)",
//   textDim: "rgba(255,255,255,0.55)",
//   grid: "rgba(255,255,255,0.08)",
//   blue: "#3B82F6",
//   purple: "#8B5CF6",
// };

// const Card = styled.div<{ pad?: number }>`
//   background: ${colors.card};
//   border: 1px solid ${colors.border};
//   border-radius: 16px;
//   padding: ${(p) => (p.pad ? p.pad : 18)}px;
//   box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
// `;

// const FeatureTitle = styled.div`
//   color: ${colors.text};
//   font-weight: 600;
//   font-size: 15px;
//   margin-bottom: 12px;
// `;

// /* ====COMMON: Axis & Tooltip === */
// const axisStyle = {
//   stroke: colors.grid,
//   strokeWidth: 1,
// };

// const tickStyle = {
//   fill: colors.textDim,
//   fontSize: 12,
// };

// const CustomAreaTooltip = ({
//   active,
//   payload,
//   label,
// }: {
//   active?: boolean;
//   payload?: any[];
//   label?: string;
// }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div
//         style={{
//           background: "#0B1220",
//           border: `1px solid ${colors.border}`,
//           color: colors.text,
//           padding: "8px 10px",
//           borderRadius: 10,
//         }}
//       >
//         <div style={{ fontSize: 12, color: colors.textDim }}>{label}</div>
//         <div style={{ fontSize: 14, marginTop: 4 }}>
//           <span style={{ color: colors.blue }}>Requests:</span>{" "}
//           <b>{Number(payload[0].value).toLocaleString()}</b>
//         </div>
//       </div>
//     );
//   }
//   return null;
// };

// /* =======================
//    RANGE PILLS
// ======================= */
// const RangePills = styled.div`
//   display: inline-flex;
//   background: ${colors.cardAlt};
//   border: 1px solid ${colors.border};
//   border-radius: 999px;
//   overflow: hidden;
// `;

// const Pill = styled.button<{ active?: boolean }>`
//   padding: 6px 10px;
//   font-size: 12px;
//   color: ${(p) => (p.active ? "#0B1220" : colors.textDim)};
//   background: ${(p) => (p.active ? colors.text : "transparent")};
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease;

//   &:not(:last-child) {
//     border-right: 1px solid ${colors.border};
//   }

//   &:hover {
//     color: ${colors.text};
//   }
// `;

// /* =======================
//    PANEL: Request Volume (Area)
// ======================= */
// export function RequestVolumePanel() {
//   const [range, setRange] = useState<RangeKey>("24h");

//   const data = useMemo<RequestPoint[]>(() => {
//     const arr = requestVolumeData.ranges[range] ?? [];
//     // Clean/force shape & types
//     return arr
//       .filter((d) => d && typeof d.time === "string" && typeof d.requests === "number")
//       .map((d) => ({ time: String(d.time), requests: Number(d.requests) }));
//   }, [range]);

//   // Y max chosen to match screenshot feel (~450)
//   const yMax = useMemo(() => {
//     if (!data.length) return 100;
//     const max = Math.max(...data.map((d) => d.requests));
//     return Math.ceil((max + 30) / 50) * 50;
//   }, [data]);

//   return (
//     <Card pad={16}>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "start",
//           marginBottom: 10,
//         }}
//       >
//         <FeatureTitle>Request Volume</FeatureTitle>
//         <RangePills>
//           {(["24h", "7d", "30d"] as RangeKey[]).map((key) => (
//             <Pill key={key} active={range === key} onClick={() => setRange(key)}>
//               {key}
//             </Pill>
//           ))}
//         </RangePills>
//       </div>

//       <div style={{ color: colors.textDim, fontSize: 12, marginBottom: 8 }}>
//         Last {range === "24h" ? "24 hours" : range === "7d" ? "7 days" : "30 days"}
//       </div>

//       <div style={{ height: 360 }}>
//         <ResponsiveContainer width="100%" height="100%">
//           <AreaChart data={data} margin={{ top: 10, right: 14, bottom: 6, left: 0 }}>
//             <defs>
//               <linearGradient id="volGrad" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="0%" stopColor={colors.blue} stopOpacity={0.7} />
//                 <stop offset="100%" stopColor={colors.blue} stopOpacity={0.05} />
//               </linearGradient>
//             </defs>

//             <CartesianGrid strokeDasharray="4 6" horizontal vertical stroke={colors.grid} />
//             <XAxis
//               dataKey="time"
//               tick={tickStyle as any}
//               axisLine={axisStyle as any}
//               tickLine={{ stroke: colors.grid }}
//             />
//             <YAxis
//               tick={tickStyle as any}
//               axisLine={axisStyle as any}
//               tickLine={{ stroke: colors.grid }}
//               domain={[0, yMax]}
//               width={40}
//             />
//             <Tooltip content={<CustomAreaTooltip />} />
//             <Area
//               type="monotone"
//               dataKey="requests"
//               stroke={colors.blue}
//               strokeWidth={3}
//               fill="url(#volGrad)"
//               dot={false}
//               activeDot={{ r: 5, stroke: colors.blue, fill: colors.bg, strokeWidth: 2 }}
//             />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>
//     </Card>
//   );
// }

// /* =======================
//    PANEL: Avg Latency (Sparkline)
// ======================= */
// export function AvgLatencyPanel() {
//   // Type-safe Tooltip formatter (handles undefined)
//   const latencyFormatter: TooltipProps<ValueType, NameType>["formatter"] = (value) => {
//     const v = typeof value === "number" ? value : typeof value === "string" ? Number(value) : 0;
//     return [`${v} ms`, "Latency"];
//   };

//   // Calculate average from the TS data
//   const avg = Math.round(
//     latency24hData.reduce((sum, d) => sum + Number(d.ms || 0), 0) / Math.max(1, latency24hData.length)
//   );

//   return (
//     <Card pad={16}>
//       <FeatureTitle>Avg Latency</FeatureTitle>
//       <div style={{ color: colors.textDim, fontSize: 12, marginBottom: 10 }}>
//         Response time
//       </div>

//       <div style={{ height: 90 }}>
//         <ResponsiveContainer width="100%" height="100%">
//           <AreaChart data={latency24hData} margin={{ top: 8, right: 6, bottom: 0, left: 0 }}>
//             <defs>
//               <linearGradient id="latGrad" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="0%" stopColor={colors.purple} stopOpacity={0.6} />
//                 <stop offset="100%" stopColor={colors.purple} stopOpacity={0.06} />
//               </linearGradient>
//             </defs>
//             <CartesianGrid stroke={colors.grid} horizontal vertical={false} />
//             <XAxis hide dataKey="time" />
//             <YAxis hide domain={["dataMin - 6", "dataMax + 6"] as any} />
//             <Tooltip
//               formatter={latencyFormatter}
//               labelStyle={{ color: colors.textDim }}
//               contentStyle={{
//                 background: colors.bg,
//                 border: `1px solid ${colors.border}`,
//                 borderRadius: 10,
//                 color: colors.text,
//               }}
//             />
//             <Area
//               type="monotone"
//               dataKey="ms"
//               stroke={colors.purple}
//               strokeWidth={3}
//               fill="url(#latGrad)"
//               dot={false}
//               activeDot={{ r: 4, stroke: colors.purple, fill: colors.bg, strokeWidth: 2 }}
//             />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>

//       <div style={{ marginTop: 10, display: "flex", alignItems: "baseline", gap: 8 }}>
//         <div style={{ fontSize: 28, fontWeight: 700, color: colors.text }}>{avg}ms</div>
//       </div>
//     </Card>
//   );
// }

// /* == PAGE LAYOUT == */
// const DashboardGrid: React.FC<React.PropsWithChildren> = ({ children }) => (
//   <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 18 }}>{children}</div>
// );

// export default function DashboardGraphs() {
//   return (
//     <DashboardGrid>
//       <RequestVolumePanel />
//       <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 18 }}>
//         <AvgLatencyPanel />
//         <UptimePanel value={uptimePercentage} />
//       </div>
//     </DashboardGrid>
//   );
// }
