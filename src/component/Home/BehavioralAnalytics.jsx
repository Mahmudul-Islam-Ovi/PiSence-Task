import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BehavioralAnalytics = ({ data }) => {
  const info = {
    labels: ["BAD", "GOOD"],
    datasets: [
      {
        data: [392, 795],
        backgroundColor: ["red", "green"],
        hoverBackgroundColor: ["darkred", "darkblue"],
      },
    ],
  };

  return (
    <div>
      <div>
        <h2 className=" my-5 text-center font-bold">Behavioral Analytics</h2>
        <div className="lg:w-[200px]">
          <Pie data={info} />
        </div>
      </div>

      {/* {data.Behavioral_Analytics?.map((status, index) => (
        <li key={index}>{status}</li>
      ))} */}
    </div>
  );
};

export default BehavioralAnalytics;
