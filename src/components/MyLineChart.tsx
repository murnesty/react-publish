import "chart.js/auto";
import { Chart } from "react-chartjs-2";

const MyLineChart = () => {
  const styles: React.CSSProperties = {
    width: 400,
    height: 400,
  };

  const chartData = {
    labels: ["Jun", "Jul", "Aug"],
    datasets: [
      {
        id: 1,
        label: "",
        data: [5, 6, 7],
      },
      {
        id: 2,
        label: "",
        data: [3, 2, 1],
      },
    ],
  };

  return (
    <div style={styles}>
      <h3>Line Chart</h3>
      <Chart type="line" data={chartData} />
    </div>
  );
};

export default MyLineChart;
