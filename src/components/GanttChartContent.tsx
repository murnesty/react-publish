import {
  Gantt,
  Task,
  // EventOption,
  // StylingOption,
  ViewMode,
  // DisplayOption,
} from "gantt-task-react";
import { useState } from "react";
import GanttChartViewMode from "./GanttChartViewMode";

interface Props {
  heading: string;
  tasks: Task[];
}

const GanttChartContent = ({ heading, tasks }: Props) => {
  const styles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "1em",
    padding: "1em",
    overflow: "auto",
  };

  const [viewMode, setViewMode] = useState(ViewMode.Month);
  const [columnWidth, setColumnWidth] = useState(100);

  const handleChangeViewMode = (mode: ViewMode) => {
    setViewMode(mode);

    if (mode === ViewMode.Year) {
      setColumnWidth(350);
    } else {
      setColumnWidth(100);
    }

    console.log(mode);
  };

  return (
    <div style={styles}>
      <div className="d-flex">
        <h5 className="my-auto">{heading}</h5>
        <GanttChartViewMode onViewModeChanged={handleChangeViewMode} />
      </div>
      <Gantt
        tasks={tasks}
        viewMode={viewMode}
        columnWidth={columnWidth}
        listCellWidth={""}
      />
      <div className="ms-auto p-2">
        <small>
          <i>Edited by Murnesty on 19 Dec 2023</i>
        </small>
      </div>
    </div>
  );
};

export default GanttChartContent;
