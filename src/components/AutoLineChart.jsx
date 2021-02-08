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
import Handle from "./Handle";

export default function AutoBarChart(props) {
  const ref = React.useRef();
  const bar = React.useRef(null);
  const chartRef = React.useRef();
  const XAxisRef = React.useRef();
  const legendRef = React.useRef();
  const [width, setWidth] = React.useState(200);
  const [height, setHeight] = React.useState(200);
  const [aspectRatio, setAspectRatio] = React.useState(0);
  const [barWidth, setBarWidth] = React.useState(0);

  function renderCartesianGrid() {
    if (width > 160 && height > 120) {
      return <CartesianGrid strokeDasharray="3 3" />;
    } else return null;
  }

  function renderLegend() {
    return height > 120 ? <Legend layout="vertical" /> : null;
  }

  function shouldHideAxis() {
    if (width > 160 && height > 120) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <ResizableBox
      handle={() => <Handle />}
      style={{
        background: "white",
        boxShadow: "0 0 10px 10px rgba(0, 0, 0, .1)",
        padding: 16,
        borderRadius: 4,
        position: "relative"
      }}
      width={200}
      height={200}
      ref={ref}
      onResize={(e, data) => {
        setWidth(chartRef.current.props.width);
        setHeight(chartRef.current.props.height);
        setBarWidth(bar.current.props.data[0].width);
        // console.log(chartRef.current.props.children[6]);
        const { width, height } = chartRef.current.props;
        setAspectRatio(width / height);
      }}
    >
      <ResponsiveContainer style={{ height: "100%" }}>
        <BarChart ref={chartRef} data={props.data}>
          {renderCartesianGrid()}
          <XAxis dataKey="name" hide={shouldHideAxis()} />
          <YAxis stroke="#8884d8" hide={shouldHideAxis()} />
          <Bar
            ref={bar}
            dataKey="pv"
            fill="#8884d8"
            stackId={width > 240 ? null : "a"}
          />
          <Bar dataKey="uv" fill="#82ca9d" stackId="a" />
          <Tooltip />
          {renderLegend()}
        </BarChart>
      </ResponsiveContainer>
      <h1>Amount</h1>
      <div>{`Bar width: ${barWidth}`}</div>
      <div>{`Width: ${width}`}</div>
      <div>{`Height: ${height}`}</div>
    </ResizableBox>
  );
}
