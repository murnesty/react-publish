import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MyDoughnut from "./MyDoughnut";
import MyLineChart from "./MyLineChart";

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
