import * as React from "react";
import { ResizableBox } from "react-resizable";
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart
} from "recharts";
import Handle from "./Handle";
import ResizableContainer from "./ResizableContainer";
import useGeneralRules from "../hooks/useGeneralRules";

export default function AutoLineChart(props) {
  const ref = React.useRef();
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

  function shouldHideAxis() {
    if (width > 160 && height > 120) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <ResizableContainer
      ref={ref}
      onResize={(e, data) => {
        setWidth(chartRef.current.props.width);
        setHeight(chartRef.current.props.height);
        const { width, height } = chartRef.current.props;
        setAspectRatio(width / height);
      }}
    >
      <ResponsiveContainer>
        <LineChart ref={chartRef} data={props.data}>
          {useGeneralRules(width, height)}
          <XAxis dataKey="country" hide={shouldHideAxis()} />
          <YAxis stroke="#8884d8" width={40} hide={shouldHideAxis()} />
          <Line dataKey="burger" stroke="#8884d8" type="monotone" />
          <Line dataKey="fries" stroke="#82ca9d" type="monotone" />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </ResizableContainer>
  );
}
