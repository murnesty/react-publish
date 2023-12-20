import React from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import MyDoughnut from "../components/chart-js-demo/MyDoughnut";
import MyLineChart from "../components/chart-js-demo/MyLineChart";

const ChartDemoPage: React.FC = () => {
  return (
    <div
      className="d-flex flex-column"
      style={{ height: "100vh", width: "100vw", boxSizing: "border-box" }}
    >
      <Navbar />
      <div className="d-flex" style={{ height: "100%" }}>
        <Sidebar />
        <MyDoughnut />
        <MyLineChart />
      </div>
    </div>
  );
};

export default ChartDemoPage;
