import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminLayout = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const navLinks = [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Manage Blogs', path: '/admin/blogs' },
  ];

  return (
    <div className="flex h-screen bg-gray-100 mt-[72px]">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
          <p className="text-sm text-gray-500 mt-1">Welcome, {user?.name || 'Admin'}</p>
        </div>
        <nav className="p-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-4 py-2 rounded-md transition-colors ${
                location.pathname === link.path || location.pathname.startsWith(`${link.path}/`) && link.path !== '/admin'
                  ? 'bg-blue-50 text-blue-700 font-semibold'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={logout}
            className="w-full text-left mt-8 px-4 py-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
