import * as React from "react";
import AutoBarChart from "./components/AutoBarChart";
import AutoLineChart from "./components/AutoLineChart";
import "./styles.css";
import { data } from "./data";
import Card from "./components/Card";
import GlobalStyle from "./globalStyles";

export default function App() {
  return (
    <div style={{ height: "100vh" }}>
      <GlobalStyle />
      <Card title={"Sales by food type"} subTitle={"Data of last 30 days"}>
        <AutoBarChart data={data} />
      </Card>
      <Card title={"Sales by food type"} subTitle={"Data of last 30 days"}>
        <AutoLineChart data={data} />
      </Card>
      {/* <AutoNivoBarChart /> */}
    </div>
  );
}
