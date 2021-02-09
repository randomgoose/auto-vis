import * as React from "react";
import AutoBarChart from "./components/AutoBarChart";
import "./styles.css";
import { data } from "./data";
import Card from "./components/Card";
import AutoNivoBarChart from "./components/AutoNivoBarChart";
import GlobalStyle from "./globalStyles";

export default function App() {
  return (
    <div style={{ height: "100vh" }}>
      <GlobalStyle />
      <Card title={"Sales"}>
        <AutoBarChart data={data} />
      </Card>

      <AutoNivoBarChart />
    </div>
  );
}
