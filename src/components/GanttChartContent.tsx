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
  const style = {
    display: "flex",
    "flex-direction": "column",
    gap: "1em",
    padding: "1em",
    overflow: "auto",
  };

  const [viewMode, setViewMode] = useState(ViewMode.Month);
  const [columnWidth, setColumnWidth] = useState(150);

  const handleChangeViewMode = (mode: ViewMode) => {
    setViewMode(mode);

    if (mode === ViewMode.Year) {
      setColumnWidth(200);
    } else if (mode === ViewMode.Month) {
      setColumnWidth(150);
    } else if (mode === ViewMode.Week) {
      setColumnWidth(100);
    }

    console.log(mode);
  };

  return (
    <div style={style}>
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
      <div className="d-block">
        <div className="p-2">
          <p>
            <b>Edited by Murnesty...</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GanttChartContent;
