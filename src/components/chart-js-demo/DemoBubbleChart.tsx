import "chart.js/auto";
import { Bubble } from "react-chartjs-2";

const DemoBubbleChart = () => {
  const chartData = {
    labels: ["Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Bubble 1",
        data: [
          {
            x: 20,
            y: 30,
            r: 15,
          },
          {
            x: 40,
            y: 10,
            r: 10,
          },
          {
            x: 26,
            y: 20,
            r: 30,
          },
          {
            x: 36,
            y: 24,
            r: 5,
          },
        ],
      },
    ],
  };

  return (
    <div className="h-100 d-flex flex-column">
      <h3>Bubble Chart</h3>
      <div className="bg-light">
        <Bubble data={chartData} />
      </div>
    </div>
  );
};

export default DemoBubbleChart;
