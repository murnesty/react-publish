import DemoAreaChart from "./DemoAreaChart";
import DemoBubbleChart from "./DemoBubbleChart";
import DemoDoughnut from "./DemoDoughnut";
import DemoLineChart from "./DemoLineChart";
import DemoPieChart from "./DemoPieChart";
import DemoPolarChart from "./DemoPolarChart";
import DemoRadarChart from "./DemoRadarChart";
import DemoScatterChart from "./DemoScatterChart";

const ChartDemoGrid = () => {
  return (
    <div className="container my-2">
      <div className="row">
        <div className="col border">
          <DemoAreaChart />
        </div>
        <div className="col border">
          <DemoLineChart />
        </div>
      </div>
      <div className="row">
        <div className="col border">
          <DemoScatterChart />
        </div>
        <div className="col border">
          <DemoBubbleChart />
        </div>
      </div>
      <div className="row">
        <div className="col border">
          <DemoRadarChart />
        </div>
        <div className="col border">
          <DemoPolarChart />
        </div>
      </div>
      <div className="row">
        <div className="col border">
          <DemoDoughnut />
        </div>
        <div className="col border">
          <DemoPieChart />
        </div>
      </div>
    </div>
  );
};

export default ChartDemoGrid;
