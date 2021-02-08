import * as React from "react";
import { ResizableBox } from "react-resizable";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

export default function NomralBarChart(props) {
  return (
    <ResizableBox
      handle={() => (
        <div
          style={{
            width: 16,
            height: 16,
            background: "red",
            // position: "absolute",
            right: 0
          }}
        ></div>
      )}
      style={{
        background: "white",
        boxShadow: "0 0 10px 10px rgba(0, 0, 0, .1)",
        padding: 16,
        borderRadius: 4,
        position: "relative"
      }}
      width={200}
      height={200}
    >
      <ResponsiveContainer style={{ height: "100%" }}>
        <BarChart {...props}>
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="pv" fill="#1282FC" />
          <Bar dataKey="uv" fill="#B0E59C" />
          <Tooltip />
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </ResizableBox>
  );
}
