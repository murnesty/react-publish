import "./App.css";
// import MyDoughnut from "./components/MyDoughnut";
// import MyLineChart from "./components/MyLineChart";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/HomePage";
import ChartDemoPage from "./components/ChartDemoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-publish/" element={<Homepage />} />
        <Route
          path="/react-publish/chartdemopage"
          element={<ChartDemoPage />}
        />
      </Routes>
    </BrowserRouter>
  );

  //   return (
  //     <div
  //       className="d-flex flex-column"
  //       style={{ height: "100vh", width: "100vw", boxSizing: "border-box" }}
  //     >
  //       <Navbar />
  //       <div className="d-flex" style={{ height: "100%" }}>
  //         <Sidebar />
  //         <GanttChartContent heading="Study Plan" tasks={studyTasks} />
  //         {/* <MyDoughnut />
  //         <MyLineChart /> */}
  //       </div>
  //     </div>
  //   );
}

export default App;
