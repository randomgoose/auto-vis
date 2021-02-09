import * as React from "react";
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
import useGeneralRules from "../hooks/useGeneralRules";
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
  const [aspectRatio, setAspectRatio] = React.useState(0);
  const [barWidth, setBarWidth] = React.useState(0);

  const palette = [
    "#bcc4eb",
    "#53828f",
    "#373f7d",
    "#555582",
    "#eeebf7",
    "#616466",
    "#607ffc",
    "#81aaf7"
  ];

  function renderCartesianGrid() {
    if (width > 160 && height > 120) {
      return <CartesianGrid strokeDasharray="3 3" />;
    } else return null;
  }

  function renderVerticalChart() {}

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

  function setColor() {}

  function useUnitAbbr() {}

  function renderStatistic() {
    return <Statistic title={"Best seller"} data={props.data[0].burger} />;
  }

  const chart = (
    <ResponsiveContainer ref={containerRef}>
      <BarChart ref={chartRef} data={props.data}>
        <XAxis dataKey="country" hide={shouldHideAxis()} />
        <YAxis hide={shouldHideAxis()} width={40} />
        {useGeneralRules(width, height)}
        {renderLegend()}
        <Tooltip />
        <Bar
          ref={bar}
          dataKey={"burger"}
          fill={palette[0]}
          stackId={shouldStack()}
        ></Bar>
        <Bar dataKey={"kebab"} fill={palette[1]} stackId={shouldStack()}></Bar>
        <Bar dataKey={"fries"} fill={palette[2]} stackId={shouldStack()}></Bar>
        <Bar dataKey={"donut"} fill={palette[3]} stackId={shouldStack()}></Bar>
        <Bar
          dataKey={"hot dog"}
          fill={palette[4]}
          stackId={shouldStack()}
        ></Bar>
        <Bar
          dataKey={"sandwich"}
          fill={palette[5]}
          stackId={shouldStack()}
        ></Bar>
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
        // console.log(
        //   chartRef.current.container.querySelectorAll(
        //     ".recharts-cartesian-axis-tick"
        //   )
        // );

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
