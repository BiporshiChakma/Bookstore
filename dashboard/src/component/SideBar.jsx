import React from 'react';
import Dnav from './Dnav';
import Searchbar from './Searchbar';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/');
  };

  return (
    <div className="bg-white min-h-screen px-5 py-4">
      <div className="flex flex-col justify-between min-h-screen">
        <div>
          <h1 className="mb-5 font-bold uppercase">Bookstore Dashboard</h1>
          <Searchbar />
          <Dnav />
        </div>
        <div>
          <p className="text-sm">Gustavo Xavier</p>
          <button onClick={handleLogout} className="text-red-600 mt-2">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
