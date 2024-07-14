import { Task } from "gantt-task-react";
import {
  initDDDTasks,
  initHelmChartTasks,
  initJFrogTasks,
  initKubernetesTasks,
  initReactTasks,
} from "../TaskHelper";
import _ from "lodash";
import Data from "../assets/worldhistory.json";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import GanttChartContent from "../components/gantt-chart/GanttChartContent";

const WorldHistoryPage = () => {
  let studyTasks: Task[] = [];
  studyTasks.push(...initReactTasks());
  studyTasks.push(...initDDDTasks());
  studyTasks.push(...initKubernetesTasks());
  studyTasks.push(...initJFrogTasks());
  studyTasks.push(...initHelmChartTasks());

  let data = Data;
  let tasks: Task[] = [];
  for (let item of data) {
    let task: Task = {
      start: new Date(item.start),
      end: _.isEmpty(item.end) ? new Date(item.start) : new Date(item.end),
      name: item.name,
      id: item.name,
      type: "task",
      progress: 0,
      isDisabled: true,
      styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
    };

    tasks.push(task);
  }

  return (
    <div
      className="d-flex flex-column"
      style={{ height: "100vh", width: "100vw", boxSizing: "border-box" }}
    >
      <Navbar />
      <div className="d-flex" style={{ height: "100%" }}>
        <Sidebar />
        <GanttChartContent heading="History" tasks={tasks} />
      </div>
    </div>
  );
};

export default WorldHistoryPage;
