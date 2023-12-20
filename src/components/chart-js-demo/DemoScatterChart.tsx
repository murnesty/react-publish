import "chart.js/auto";
import { Scatter } from "react-chartjs-2";

const DemoScatterChart = () => {
  const chartData = {
    datasets: [
      {
        label: "Scatter Dataset",
        data: [
          {
            x: -10,
            y: 0,
          },
          {
            x: 0,
            y: 10,
          },
          {
            x: 10,
            y: 5,
          },
          {
            x: 0.5,
            y: 5.5,
          },
        ],
      },
    ],
  };

  return (
    <div className="h-100 d-flex flex-column">
      <h3>Scatter Char</h3>
      <div className="bg-light">
        <Scatter data={chartData} />
      </div>
    </div>
  );
};

export default DemoScatterChart;
