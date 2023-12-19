import { ViewMode } from "gantt-task-react";

interface Props {
  onViewModeChanged: (mode: ViewMode) => void;
}

const GanttChartViewMode = ({ onViewModeChanged }: Props) => {
  return (
    <div className="btn-group d-block ms-auto" role="group">
      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="btnradio2"
        onClick={() => onViewModeChanged(ViewMode.Day)}
      />
      <label className="btn btn-dark" htmlFor="btnradio2">
        Day
      </label>

      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="btnradio3"
        onClick={() => onViewModeChanged(ViewMode.Week)}
      />
      <label className="btn btn-dark" htmlFor="btnradio3">
        Week
      </label>

      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="btnradio4"
        onClick={() => onViewModeChanged(ViewMode.Month)}
      />
      <label className="btn btn-dark" htmlFor="btnradio4">
        Month
      </label>

      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="btnradio5"
        onClick={() => onViewModeChanged(ViewMode.Year)}
      />
      <label className="btn btn-dark" htmlFor="btnradio5">
        Year
      </label>
    </div>
  );
};

export default GanttChartViewMode;
