import "chart.js/auto";
import { PolarArea } from "react-chartjs-2";

const DemoPolarChart = () => {
  const chartData = {
    labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
    datasets: [
      {
        label: "Line 1",
        data: [11, 16, 7, 3, 14],
      },
    ],
  };

  return (
    <div className="h-100 d-flex flex-column">
      <h3>Polar Chart</h3>
      <div className="bg-light">
        <PolarArea data={chartData} />
      </div>
    </div>
  );
};

export default DemoPolarChart;
