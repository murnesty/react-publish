import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

declare module "chartjs-plugin-datalabels" {
  interface Context {
    foo?: number;
  }
}

const DemoDoughnut = () => {
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
          return `${context.chart.data.labels[context.dataIndex]}: ${value}`;
        },
      },
    },
  };

  return (
    <div className="h-100 d-flex flex-column">
      <h3>Doughnut</h3>
      <div className="bg-light">
        <Doughnut data={data} options={options} plugins={plugins} />
      </div>
    </div>
  );
};

export default DemoDoughnut;
