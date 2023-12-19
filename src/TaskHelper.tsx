import { Task } from "gantt-task-react";

export function initReactTasks() {
  const tasks: Task[] = [
    {
      start: new Date(2023, 11, 1),
      end: new Date(2024, 0, 2),
      name: "Study React",
      id: "ReactProject",
      type: "project",
      progress: 0,
      isDisabled: true,
      styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
    },
    {
      start: new Date(2023, 11, 1),
      end: new Date(2023, 11, 2),
      name: "Done youtube reading. https://www.youtube.com/watch?v=SqcY0GlETPk",
      id: "React 0",
      type: "task",
      project: "react",
      progress: 0,
      isDisabled: true,
      styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
    },
    {
      start: new Date(2023, 11, 11),
      end: new Date(2023, 11, 12),
      name: "Practising and added this page",
      id: "React 0",
      type: "task",
      project: "react",
      dependencies: ["React 0"],
      progress: 0,
      isDisabled: true,
      styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
    },
  ];

  return tasks;
}

export function initDDDTasks() {
  const tasks: Task[] = [
    {
      start: new Date(2023, 10, 1),
      end: new Date(2024, 0, 2),
      name: "Study DDD / Clean Architecture",
      id: "ddd",
      type: "project",
      progress: 0,
      isDisabled: true,
      styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
    },
    {
      start: new Date(2023, 10, 7),
      end: new Date(2023, 10, 8),
      name: "Done youtube reading. https://www.youtube.com/watch?v=1OLSE6tX71Y",
      id: "DDD 1",
      type: "task",
      project: "ddd",
      progress: 0,
      isDisabled: true,
      styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
    },
    {
      start: new Date(2023, 10, 7),
      end: new Date(2023, 10, 8),
      name: "Done youtube reading. https://www.youtube.com/watch?v=tLk4pZZtiDY&pp=ygUSY2xlYW4gYXJjaGl0ZWN0dXJl",
      id: "DDD 2",
      type: "task",
      project: "ddd",
      dependencies: ["DDD 1"],
      progress: 0,
      isDisabled: true,
      styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
    },
  ];

  return tasks;
}

export function initKubernetesTasks() {
  const tasks: Task[] = [
    {
      start: new Date(2024, 0, 1),
      end: new Date(2024, 0, 2),
      name: "Study Kubernetes - Unplanned",
      id: "kubernetes",
      type: "project",
      progress: 0,
      isDisabled: true,
      styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
    },
  ];

  return tasks;
}

export function initJFrogTasks() {
  const tasks: Task[] = [
    {
      start: new Date(2024, 0, 1),
      end: new Date(2024, 0, 2),
      name: "Study JFrog - Unplanned",
      id: "jfrog",
      type: "project",
      progress: 0,
      isDisabled: true,
      styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
    },
  ];

  return tasks;
}

export function initHelmChartTasks() {
  const tasks: Task[] = [
    {
      start: new Date(2024, 0, 1),
      end: new Date(2024, 0, 2),
      name: "Study Helm Chart - Unplanned",
      id: "helmchart",
      type: "project",
      progress: 0,
      isDisabled: true,
      styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
    },
  ];

  return tasks;
}
