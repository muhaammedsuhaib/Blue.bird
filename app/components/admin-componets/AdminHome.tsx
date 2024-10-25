import React from 'react';

interface AdminHomeProps {
  adminId: string;
  theme: { background: string; text: string };
}

const AdminHome: React.FC<AdminHomeProps> = ({ adminId, theme }) => {
  return (
    <div style={{ backgroundColor: theme.background, color: theme.text }}>
      <h1 className="text-2xl font-semibold mb-4">Welcome, Admin!</h1>
      <p className="mb-8">ID: {adminId}</p>

      {/* Quick Stats Section */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <div className="p-4 rounded-md shadow bg-white" style={{ color: theme.text }}>
          <h2 className="text-lg font-medium">Total Users</h2>
          <p className="text-3xl font-bold">120</p>
        </div>
        <div className="p-4 rounded-md shadow bg-white" style={{ color: theme.text }}>
          <h2 className="text-lg font-medium">Active Posts</h2>
          <p className="text-3xl font-bold">45</p>
        </div>
        <div className="p-4 rounded-md shadow bg-white" style={{ color: theme.text }}>
          <h2 className="text-lg font-medium">Pending Reviews</h2>
          <p className="text-3xl font-bold">8</p>
        </div>
      </div>

      {/* Recent Activities Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
        <ul className="space-y-2">
          <li className="p-4 rounded-md shadow bg-white" style={{ color: theme.text }}>
            <p><strong>User123</strong> created a new post.</p>
            <span className="text-gray-500 text-sm">2 hours ago</span>
          </li>
          <li className="p-4 rounded-md shadow bg-white" style={{ color: theme.text }}>
            <p><strong>Admin</strong> updated site settings.</p>
            <span className="text-gray-500 text-sm">5 hours ago</span>
          </li>
          <li className="p-4 rounded-md shadow bg-white" style={{ color: theme.text }}>
            <p><strong>User456</strong> joined the platform.</p>
            <span className="text-gray-500 text-sm">1 day ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminHome;
