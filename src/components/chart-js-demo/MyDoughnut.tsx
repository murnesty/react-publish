import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const MyDoughnut = () => {
  const styles: React.CSSProperties = {
    width: 300,
    height: 300,
  };

  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  return (
    <div style={styles}>
      <h3>Doughnut</h3>
      <Doughnut data={data} />
    </div>
  );
};

export default MyDoughnut;
