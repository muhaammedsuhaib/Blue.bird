import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface AdminHomeProps {
  adminId: string;
  theme: { background: string; text: string };
}

type Category = 'users' | 'posts' | 'reviews';
type DataType = 'live' | 'allTime';

const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), { ssr: false });

const AdminHome: React.FC<AdminHomeProps> = ({ adminId, theme }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('users');
  const [dataType, setDataType] = useState<DataType>('live');

  // Dynamically generate years (e.g., from 2022 to the current year)
  const currentYear = new Date().getFullYear();
  const availableYears = Array.from({ length: currentYear - 2021 }, (_, i) => (2022 + i).toString());
  availableYears.unshift('All Years'); // Adding 'All Years' option

  // State to hold the selected year, default to the current year
  const [year, setYear] = useState(availableYears[1]); // Default to the latest year

  const dataMap: Record<DataType, Record<string, Record<Category, { label: string; data: number[] }>>> = {
    live: {
      '2022': {
        users: { label: 'New Users', data: [30, 45, 50, 70, 60, 90, 65, 80, 75, 60, 85, 95] },
        posts: { label: 'Active Posts', data: [15, 30, 55, 80, 45, 70, 60, 75, 55, 65, 80, 90] },
        reviews: { label: 'Pending Reviews', data: [5, 10, 7, 15, 13, 8, 12, 10, 9, 7, 10, 8] },
      },
      '2023': {
        users: { label: 'New Users', data: [35, 50, 60, 85, 75, 100, 70, 85, 80, 65, 90, 100] },
        posts: { label: 'Active Posts', data: [20, 35, 60, 85, 50, 75, 65, 80, 60, 70, 85, 95] },
        reviews: { label: 'Pending Reviews', data: [6, 11, 8, 16, 14, 9, 13, 11, 10, 8, 11, 9] },
      },
      '2024': {
        users: { label: 'New Users', data: [40, 55, 70, 90, 80, 110, 75, 90, 85, 70, 95, 105] },
        posts: { label: 'Active Posts', data: [25, 40, 65, 90, 55, 80, 70, 85, 65, 75, 90, 100] },
        reviews: { label: 'Pending Reviews', data: [7, 12, 9, 17, 15, 10, 14, 12, 11, 9, 12, 10] },
      },
    },
    allTime: {
      '2022': {
        users: { label: 'Total Users', data: [150, 180, 200, 230, 250, 270, 280, 300, 290, 310, 320, 330] },
        posts: { label: 'Total Posts', data: [70, 80, 90, 100, 110, 120, 130, 140, 135, 145, 150, 160] },
        reviews: { label: 'Total Reviews', data: [10, 12, 15, 17, 20, 22, 24, 26, 25, 27, 29, 30] },
      },
      '2023': {
        users: { label: 'Total Users', data: [200, 220, 240, 260, 280, 300, 310, 330, 320, 340, 350, 360] },
        posts: { label: 'Total Posts', data: [100, 120, 130, 150, 170, 180, 190, 200, 195, 205, 210, 220] },
        reviews: { label: 'Total Reviews', data: [15, 18, 20, 22, 24, 27, 28, 30, 29, 31, 33, 35] },
      },
      '2024': {
        users: { label: 'Total Users', data: [250, 280, 300, 330, 350, 370, 380, 400, 390, 410, 420, 430] },
        posts: { label: 'Total Posts', data: [130, 140, 160, 180, 190, 210, 220, 230, 225, 235, 240, 250] },
        reviews: { label: 'Total Reviews', data: [18, 20, 23, 25, 28, 30, 32, 34, 33, 35, 37, 40] },
      },
    },
  };

  // Create a function to get data for charts based on the year selection
  const getChartData = (type: DataType, year: string) => {
    if (year === 'All Years') {
      return {
        users: {
          label: 'New Users',
          data: availableYears.slice(1).flatMap((y) => dataMap[type][y]['users'].data),
        },
        posts: {
          label: 'Active Posts',
          data: availableYears.slice(1).flatMap((y) => dataMap[type][y]['posts'].data),
        },
        reviews: {
          label: 'Pending Reviews',
          data: availableYears.slice(1).flatMap((y) => dataMap[type][y]['reviews'].data),
        },
      };
    }
    return dataMap[type][year];
  };

  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: getChartData(dataType, year).users.label,
        data: getChartData(dataType, year).users.data,
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Users color
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: true,
      },
      {
        label: getChartData(dataType, year).posts.label,
        data: getChartData(dataType, year).posts.data,
        backgroundColor: 'rgba(153, 102, 255, 0.6)', // Posts color
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
        fill: true,
      },
      {
        label: getChartData(dataType, year).reviews.label,
        data: getChartData(dataType, year).reviews.data,
        backgroundColor: 'rgba(255, 159, 64, 0.6)', // Reviews color
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' as const, labels: { color: theme.text } },
      title: { display: true, text: `${dataType === 'live' ? 'Live' : 'All-Time'} Data Overview - ${year}`, color: theme.text, font: { size: 18 } },
    },
    scales: {
      x: { ticks: { color: theme.text } },
      y: { ticks: { color: theme.text } },
    },
  };

  return (
    <div style={{ background: theme.background, color: theme.text }}>
      <h1>Admin Dashboard</h1>

      <div className="flex items-center">
        <label className="mr-2">Select Year:</label>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border rounded p-2"
        >
          {availableYears.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>

        <label className="ml-4 mr-2">Select Data Type:</label>
        <select
          value={dataType}
          onChange={(e) => setDataType(e.target.value as DataType)}
          className="border rounded p-2"
        >
          <option value="live">Live</option>
          <option value="allTime">All Time</option>
        </select>
      </div>

      <Bar data={chartData} options={options} />
    </div>
  );
};

export default AdminHome;
