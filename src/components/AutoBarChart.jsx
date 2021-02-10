import * as React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import useGeneralRules from "../hooks/useGeneralRules";
import usePalette from "../hooks/usePalette";
import ResizableContainer from "./ResizableContainer";
import Statistic from "./Statistic";

export default function AutoBarChart(props) {
  const ref = React.useRef();
  const bar = React.useRef(null);
  const containerRef = React.useRef(null);
  const chartRef = React.useRef();
  const [width, setWidth] = React.useState(200);
  const [height, setHeight] = React.useState(200);
  const [renderedTicksNumber, setRenderedTicksNumber] = React.useState(0);
  const [aspectRatio, setAspectRatio] = React.useState(1);
  const [barWidth, setBarWidth] = React.useState(0);

  const palette = usePalette();

  function renderCartesianGrid() {
    if (width > 160 && height > 120) {
      return <CartesianGrid strokeDasharray="3 3" />;
    } else return null;
  }

  function shouldRenderVerticalChart() {
    return aspectRatio < .25 ? true : false
  }

  function shouldRenderLabel() {

  }

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

  function shouldHideAxis() {
    if (width > 160 && height > 120) {
      return false;
    } else {
      return true;
    }
  }

  function shouldStack() {
    if (width < 320) {
      return "stack";
    }
    return false;
  }

  function setLegendFontSize() {
    return 16;
  }

  function setColor() { }

  function useUnitAbbr() { }

  function renderStatistic() {
    return <Statistic title={"Best seller"} data={props.data[0].burger} />;
  }

  const dataKeys = ['burger', 'kebab', 'fries', 'donut', 'hot dog', 'sandwich']

  const bars = dataKeys.map((i, k) => <Bar dataKey={i} key={k} fill={palette[k]} stackId={shouldStack()} label={{ fill: 'white', fontSize: 12 }}>
  </ Bar>)

  const chart = (
    <ResponsiveContainer ref={containerRef}>
      <BarChart
        ref={chartRef}
        data={props.data}
        layout={shouldRenderVerticalChart() ? 'vertical' : 'horizontal'}>
        <XAxis dataKey={shouldRenderVerticalChart() ? null : 'country'} hide={shouldHideAxis()} type={shouldRenderVerticalChart() ? 'number' : 'category'} />
        <YAxis dateKey={shouldRenderVerticalChart() ? 'country' : null}
          hide={shouldHideAxis()}
          width={40}
          type={shouldRenderVerticalChart() ? 'category' : 'number'} />
        {useGeneralRules(width, height)}
        {renderLegend()}
        <Tooltip />
        {bars}
      </BarChart>
    </ResponsiveContainer>
  );

  return (
    <ResizableContainer
      ref={ref}
      onResize={(e, data) => {
        if (chartRef.current) {
          setRenderedTicksNumber(
            chartRef.current.container.querySelectorAll(
              ".recharts-cartesian-axis-tick"
            ).length
          );
        } else {
          setRenderedTicksNumber(0);
        }
        console.log(
          shouldRenderVerticalChart()
        );

        if (chartRef.current) {
          const { width, height } = chartRef.current.props;
          setHeight(height);
          setWidth(width);
          setAspectRatio(width / height);
        } else {
          setWidth(data.size.width);
          setHeight(data.size.height);
        }
      }}
    >
      {width > 120 ? chart : height > 80 ? chart : renderStatistic()}
    </ResizableContainer>
  );
}
