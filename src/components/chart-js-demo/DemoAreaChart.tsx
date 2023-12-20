import "chart.js/auto";
import { Chart } from "react-chartjs-2";

const DemoAreaChart = () => {
  const chartData = {
    labels: ["Jun", "Jul", "Aug"],
    datasets: [
      {
        id: 1,
        label: "Area 1",
        data: [5, 6, 7],
        fill: true,
      },
      {
        id: 2,
        label: "Area 2",
        data: [3, 2, 1],
        fill: true,
      },
    ],
  };

  return (
    <div className="h-100 d-flex flex-column">
      <h3>Area Chart</h3>
      <div className="bg-light">
        <Chart type="line" data={chartData} />
      </div>
    </div>
  );
};

export default DemoAreaChart;
