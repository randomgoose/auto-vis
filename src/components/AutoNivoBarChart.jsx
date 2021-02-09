// yarn add @nivo/core @nivo/bar
import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { ResizableBox } from "react-resizable";
import Handle from "./Handle";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const data = [
  {
    country: "AD",
    "hot dog": 104,
    "hot dogColor": "hsl(73, 70%, 50%)",
    burger: 37,
    burgerColor: "hsl(273, 70%, 50%)",
    sandwich: 176,
    sandwichColor: "hsl(147, 70%, 50%)",
    kebab: 177,
    kebabColor: "hsl(128, 70%, 50%)",
    fries: 78,
    friesColor: "hsl(174, 70%, 50%)",
    donut: 159,
    donutColor: "hsl(305, 70%, 50%)"
  },
  {
    country: "AE",
    "hot dog": 11,
    "hot dogColor": "hsl(355, 70%, 50%)",
    burger: 63,
    burgerColor: "hsl(193, 70%, 50%)",
    sandwich: 103,
    sandwichColor: "hsl(269, 70%, 50%)",
    kebab: 26,
    kebabColor: "hsl(208, 70%, 50%)",
    fries: 118,
    friesColor: "hsl(238, 70%, 50%)",
    donut: 62,
    donutColor: "hsl(269, 70%, 50%)"
  },
  {
    country: "AF",
    "hot dog": 108,
    "hot dogColor": "hsl(110, 70%, 50%)",
    burger: 173,
    burgerColor: "hsl(312, 70%, 50%)",
    sandwich: 117,
    sandwichColor: "hsl(239, 70%, 50%)",
    kebab: 50,
    kebabColor: "hsl(7, 70%, 50%)",
    fries: 79,
    friesColor: "hsl(69, 70%, 50%)",
    donut: 10,
    donutColor: "hsl(97, 70%, 50%)"
  },
  {
    country: "AG",
    "hot dog": 164,
    "hot dogColor": "hsl(9, 70%, 50%)",
    burger: 3,
    burgerColor: "hsl(213, 70%, 50%)",
    sandwich: 16,
    sandwichColor: "hsl(36, 70%, 50%)",
    kebab: 150,
    kebabColor: "hsl(320, 70%, 50%)",
    fries: 113,
    friesColor: "hsl(269, 70%, 50%)",
    donut: 6,
    donutColor: "hsl(175, 70%, 50%)"
  },
  {
    country: "AI",
    "hot dog": 161,
    "hot dogColor": "hsl(150, 70%, 50%)",
    burger: 51,
    burgerColor: "hsl(43, 70%, 50%)",
    sandwich: 159,
    sandwichColor: "hsl(6, 70%, 50%)",
    kebab: 160,
    kebabColor: "hsl(303, 70%, 50%)",
    fries: 132,
    friesColor: "hsl(272, 70%, 50%)",
    donut: 158,
    donutColor: "hsl(141, 70%, 50%)"
  },
  {
    country: "AL",
    "hot dog": 171,
    "hot dogColor": "hsl(113, 70%, 50%)",
    burger: 110,
    burgerColor: "hsl(49, 70%, 50%)",
    sandwich: 67,
    sandwichColor: "hsl(103, 70%, 50%)",
    kebab: 34,
    kebabColor: "hsl(80, 70%, 50%)",
    fries: 148,
    friesColor: "hsl(349, 70%, 50%)",
    donut: 110,
    donutColor: "hsl(311, 70%, 50%)"
  },
  {
    country: "AM",
    "hot dog": 118,
    "hot dogColor": "hsl(31, 70%, 50%)",
    burger: 181,
    burgerColor: "hsl(166, 70%, 50%)",
    sandwich: 43,
    sandwichColor: "hsl(67, 70%, 50%)",
    kebab: 42,
    kebabColor: "hsl(279, 70%, 50%)",
    fries: 57,
    friesColor: "hsl(79, 70%, 50%)",
    donut: 78,
    donutColor: "hsl(185, 70%, 50%)"
  }
];

const AutoNivoBarChart = () => {
  const chartRef = React.useRef();
  return (
    <ResizableBox
      handle={
        <div>
          <Handle />
        </div>
      }
      style={{
        background: "white",
        border: "1px solid #e5e6eb",
        padding: 16,
        borderRadius: 4,
        position: "relative",
        display: "flex",
        flexDirection: "column"
      }}
      width={200}
      height={200}
      onResize={() => {}}
    >
      <ResponsiveBar
        data={data}
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.75}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        fill={[
          {
            match: {
              id: "fries"
            },
            id: "dots"
          },
          {
            match: {
              id: "sandwich"
            },
            id: "lines"
          }
        ]}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "country",
          legendPosition: "middle",
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "food",
          legendPosition: "middle",
          legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </ResizableBox>
  );
};

export default AutoNivoBarChart;
