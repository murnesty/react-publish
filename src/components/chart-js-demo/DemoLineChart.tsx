import "chart.js/auto";
import { Chart } from "react-chartjs-2";

const DemoLineChart = () => {
  const chartData = {
    labels: ["Jun", "Jul", "Aug"],
    datasets: [
      {
        id: 1,
        label: "Line 1",
        data: [5, 6, 7],
      },
      {
        id: 2,
        label: "Line 2",
        data: [3, 2, 1],
      },
    ],
  };

  return (
    <div className="h-100 d-flex flex-column">
      <h3>Line Chart</h3>
      <div className="bg-light">
        <Chart type="line" data={chartData} />
      </div>
    </div>
  );
};

export default DemoLineChart;
