"use client";

import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function AnalyticsCharts({ ratingsData, bookmarkTrends }) {
  const barData = {
    labels: ratingsData.map((d) => d.department),
    datasets: [
      {
        label: "Avg Rating",
        data: ratingsData.map((d) => d.avgRating),
        backgroundColor: "rgba(59, 130, 246, 0.7)",
      },
    ],
  };

  const lineData = {
    labels: bookmarkTrends.labels,
    datasets: [
      {
        label: "Bookmarks",
        data: bookmarkTrends.data,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.2,
      },
    ],
  };

  return (
    <div className="space-y-12">
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">📊 Department-wise Average Ratings</h2>
        <Bar data={barData} />
      </div>
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">📈 Bookmark Trends</h2>
        <Line data={lineData} />
      </div>
    </div>
  );
}
