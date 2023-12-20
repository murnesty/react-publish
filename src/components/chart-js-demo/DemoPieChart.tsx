import "chart.js/auto";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

declare module "chartjs-plugin-datalabels" {
  interface Context {
    foo?: number;
  }
}

const DemoPieChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  const plugins: any = [ChartDataLabels];

  const options: any = {
    plugins: {
      datalabels: {
        anchor: "center",
        align: "center",
        formatter: function (value: any, context: any) {
          let array = context.dataset.data;
          let total = array.reduce((a: number, v: number) => a + v, 0);
          let percent = (value * 100) / total;

          return `${value} (${percent.toFixed(1)}%)`;
        },
      },
    },
  };

  return (
    <div className="h-100 d-flex flex-column justify-content-center">
      <h3>Pie Chart</h3>
      <div className="bg-light">
        <Pie data={data} options={options} plugins={plugins} />
      </div>
    </div>
  );
};

export default DemoPieChart;
