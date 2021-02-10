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
import usePalette from "../hooks/usePalette";

export default function AutoLineChart(props) {
  const ref = React.useRef();
  const chartRef = React.useRef();
  const XAxisRef = React.useRef();
  const legendRef = React.useRef();
  const [width, setWidth] = React.useState(200);
  const [height, setHeight] = React.useState(200);
  const [aspectRatio, setAspectRatio] = React.useState(1);
  const [barWidth, setBarWidth] = React.useState(0);

  const palette = usePalette();

  function renderLegend() {
    return height > 120 ? (
      <Legend layout="horizontal" wrapperStyle={{ marginTop: 24 }} />
    ) : height < 80 ? null : (
      <Legend
        layout="vertical"
        align="right"
        verticalAlign="middle"
        wrapperStyle={{ fontSize: 14, paddingLeft: 32 }}
      />
    );
  }

  function shouldRenderVerticalChart() {
    return aspectRatio < .25 ? true : false
  }

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

  const dataKeys = ['burger', 'kebab']
  const lines = dataKeys.map((i, k) => <Line dataKey={i} key={k} stroke={palette[k + 3]} type="monotone"></ Line>)

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
        <LineChart ref={chartRef} data={props.data} layout={shouldRenderVerticalChart() ? 'vertical' : 'horizontal'}>
          <XAxis dataKey={shouldRenderVerticalChart() ? null : 'country'} type={shouldRenderVerticalChart() ? 'number' : 'category'} />
          <YAxis dateKey={shouldRenderVerticalChart() ? 'country' : null} width={40} type={shouldRenderVerticalChart() ? 'category' : 'number'} />
          {lines}
          {useGeneralRules(width, height)}
          {renderLegend()}
          < Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </ResizableContainer>
  );
}
