import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

declare module "chartjs-plugin-datalabels" {
  interface Context {
    foo?: number;
  }
}

const DemoLineChart = () => {
  const chartData: any = {
    labels: ["Jun", "Jul", "Aug"],
    datasets: [
      {
        id: 1,
        label: "Line 1",
        data: [5, 6, 7],
        datalabels: {
          display: true,
          color: "black",
          borderRadius: "5",
          anchor: "end",
          align: "end",
          clamp: true,
          font: {
            weight: 700,
          },
        },
      },
      {
        id: 2,
        label: "Line 2",
        data: [3, 2, 1],
        datalabels: {
          display: false,
        },
      },
    ],
  };

  const plugins: any = [ChartDataLabels];

  return (
    <div className="h-100 d-flex flex-column">
      <h3>Line Chart</h3>
      <div className="bg-light">
        <Chart type="line" data={chartData} plugins={plugins} />
      </div>
    </div>
  );
};

export default DemoLineChart;
