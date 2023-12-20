import "./App.css";
import { Task } from "gantt-task-react";
import {
  initDDDTasks,
  initHelmChartTasks,
  initJFrogTasks,
  initKubernetesTasks,
  initReactTasks,
} from "./TaskHelper";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import GanttChartContent from "./components/GanttChartContent";
// import MyDoughnut from "./components/MyDoughnut";
// import MyLineChart from "./components/MyLineChart";

function App() {
  let studyTasks: Task[] = [];
  studyTasks.push(...initReactTasks());
  studyTasks.push(...initDDDTasks());
  studyTasks.push(...initKubernetesTasks());
  studyTasks.push(...initJFrogTasks());
  studyTasks.push(...initHelmChartTasks());

  return (
    <div
      className="d-flex flex-column"
      style={{ height: "100vh", width: "100vw", boxSizing: "border-box" }}
    >
      <Navbar />
      <div className="d-flex" style={{ height: "100%" }}>
        <Sidebar />
        <GanttChartContent heading="Study Plan" tasks={studyTasks} />
        {/* <MyDoughnut />
        <MyLineChart /> */}
      </div>
    </div>
  );
}

export default App;
