import React from "react";

const Analytics: React.FC<{ adminId: string; theme: any }> = ({ theme }) => {
  // Mock data for analytics
  const metrics = [
    { title: "Total Users", value: 1250 },
    { title: "Posts Created", value: 450 },
    { title: "Comments", value: 876 },
    { title: "Active Sessions", value: 58 },
  ];

  const engagement = [
    { title: "Daily Active Users", value: "1,024" },
    { title: "Weekly Active Users", value: "5,210" },
    { title: "Monthly Active Users", value: "20,340" },
  ];

  return (
    <div style={{ backgroundColor: theme.background, color: theme.text }}>
      <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>

      {/* Key Metrics */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="p-4 rounded shadow-md"
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
              className="p-4 rounded shadow-md"
              style={{ backgroundColor: theme.cardBackground }}
            >
              <h3 className="text-lg font-medium mb-2">{item.title}</h3>
              <p className="text-2xl font-bold">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Placeholder for charts */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Trends</h2>
        <div className="w-full h-64 rounded shadow-md flex items-center justify-center" style={{ backgroundColor: theme.cardBackground }}>
          <p className="text-gray-500">[Charts would appear here]</p>
        </div>
      </section>
    </div>
  );
};

export default Analytics;
