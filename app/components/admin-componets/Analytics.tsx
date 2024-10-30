import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

interface Metric {
  title: string;
  value: number | string;
}



const Analytics: React.FC<{ adminId: string; theme: any }> = ({ theme }) => {
  // Mock data for analytics
  const metrics: Metric[] = [
    { title: "Total Users", value: 1250 },
    { title: "Posts Created", value: 450 },
    { title: "Comments", value: 876 },
    { title: "Active Sessions", value: 58 },
    { title: "Likes", value: 1_500 },
    { title: "Shares", value: 320 },
  ];

  const engagement: Metric[] = [
    { title: "Daily Active Users", value: "1,024" },
    { title: "Weekly Active Users", value: "5,210" },
    { title: "Monthly Active Users", value: "20,340" },
    { title: "Total Engagements", value: "3,500" },
  ];

  // Mock chart data
  const userGrowthData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Users Over Time",
        data: [400, 450, 600, 700, 900, 1100, 1250],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const sessionData = {
    labels: ["Active", "Inactive"],
    datasets: [
      {
        label: "Session Distribution",
        data: [58, 942],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const trendsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Daily Active Users",
        data: [200, 300, 400, 350, 500, 600, 700],
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        fill: true,
      },
    ],
  };

  const postPerformanceData = {
    labels: ["Image Posts", "Video Posts", "Text Posts"],
    datasets: [
      {
        label: "Post Performance",
        data: [250, 120, 80],
        backgroundColor: [
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
      },
    ],
  };

  const demographicData = {
    labels: ["18-24", "25-34", "35-44", "45-54", "55+"],
    datasets: [
      {
        label: "User Demographics",
        data: [300, 450, 250, 200, 50],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
      },
    ],
  };

  // Loading state (you can modify this based on actual loading logic)
  const isLoading = false; // Example loading state
  const error = ""; // Example error message

  return (
    <div
      style={{ backgroundColor: theme.background, color: theme.text }}
      className="p-6"
    >
      <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>

      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-lg">Loading...</p>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-lg text-red-500">{error}</p>
        </div>
      ) : (
        <>
          {/* Key Metrics */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="p-4 rounded shadow-md transition-transform duration-300 hover:scale-105"
                style={{ backgroundColor: theme.cardBackground }}
              >
                <h2 className="text-lg font-semibold mb-2">{metric.title}</h2>
                <p className="text-2xl font-bold">{metric.value}</p>
              </div>
            ))}
          </section>

          {/* User Engagement */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">User Engagement</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {engagement.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded shadow-md transition-transform duration-300 hover:scale-105"
                  style={{ backgroundColor: theme.cardBackground }}
                >
                  <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                  <p className="text-2xl font-bold">{item.value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Responsive Charts */}
          <section className="mt-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">User Growth Trends</h2>
            <div
              className="w-full h-64 rounded shadow-md"
              style={{ backgroundColor: theme.cardBackground }}
            >
              <Line
                data={trendsData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: true,
                      position: "top" as const,
                    },
                    title: {
                      display: true,
                      text: "Daily Active Users Over Time",
                    },
                  },
                }}
              />
            </div>
          </section>

          {/* Session Distribution */}
          <section className="mt-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">Session Distribution</h2>
            <div
              className="w-full h-64 rounded shadow-md"
              style={{ backgroundColor: theme.cardBackground }}
            >
              <Pie
                data={sessionData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      display: true,
                      position: "top" as const,
                    },
                    title: {
                      display: true,
                      text: "Active vs Inactive Sessions",
                    },
                  },
                }}
              />
            </div>
          </section>

          {/* User Growth Bar Chart */}
          <section className="mt-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">User Growth Over Time</h2>
            <div
              className="w-full h-64 rounded shadow-md"
              style={{ backgroundColor: theme.cardBackground }}
            >
              <Bar
                data={userGrowthData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: true,
                      position: "top" as const,
                    },
                    title: {
                      display: true,
                      text: "Users Over Time",
                    },
                  },
                }}
              />
            </div>
          </section>

          {/* Post Performance */}
          <section className="mt-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">Post Performance</h2>
            <div
              className="w-full h-64 rounded shadow-md"
              style={{ backgroundColor: theme.cardBackground }}
            >
              <Bar
                data={postPerformanceData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: true,
                      position: "top" as const,
                    },
                    title: {
                      display: true,
                      text: "Performance of Different Post Types",
                    },
                  },
                }}
              />
            </div>
          </section>

          {/* User Demographics */}
          <section className="mt-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">User Demographics</h2>
            <div
              className="w-full h-64 rounded shadow-md"
              style={{ backgroundColor: theme.cardBackground }}
            >
              <Pie
                data={demographicData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      display: true,
                      position: "top" as const,
                    },
                    title: {
                      display: true,
                      text: "User Demographics by Age Group",
                    },
                  },
                }}
              />
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Analytics;
