import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
ChartJS.register(BarElement, CategoryScale, LinearScale);

function Chart({ data, labels }) {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Solved',
        data: data,
        backgroundColor: "#964734"
      }
    ]
  };
  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <Bar data={chartData} />
    </div>
  );
}
export default Chart;
