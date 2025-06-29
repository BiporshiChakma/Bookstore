import React, { useState } from 'react';

const data = [
  {
    id: 1,
    name: 'Ann Culhane',
    phone: '5648235526',
    description: 'Lorem ipsum dolor sit amet...',
    status: 'Open',
    rate: '$70.00',
    balance: '-$270.00',
    deposit: '$500.00',
  },
  {
    id: 2,
    name: 'Ahmad Rosser',
    phone: '5648235526',
    description: 'Lorem ipsum dolor sit amet...',
    status: 'Paid',
    rate: '$70.00',
    balance: '$270.00',
    deposit: '$500.00',
  },
  {
    id: 3,
    name: 'Zain Calzoni',
    phone: '5648235526',
    description: 'Lorem ipsum dolor sit amet...',
    status: 'Open',
    rate: '$70.00',
    balance: '-$100.00',
    deposit: '$500.00',
  },
  {
    id: 4,
    name: 'Leo Stanton',
    phone: '5648235526',
    description: 'Lorem ipsum dolor sit amet...',
    status: 'Inactive',
    rate: '$70.00',
    balance: '$600.00',
    deposit: '$500.00',
  },
  // Add more records as needed
];

const getStatusStyle = (status) => {
  switch (status) {
    case 'Open':
      return 'text-blue-700 bg-blue-100';
    case 'Paid':
      return 'text-green-700 bg-green-100';
    case 'Inactive':
      return 'text-gray-700 bg-gray-200';
    case 'Due':
      return 'text-red-700 bg-red-100';
    default:
      return 'text-gray-500 bg-gray-100';
  }
};

const AdminDashboard = () => {
  const [search, setSearch] = useState('');

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 p-6 overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 rounded w-1/3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            + Add Customer
          </button>
        </div>

        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-200 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Rate</th>
                <th className="px-4 py-3">Balance</th>
                <th className="px-4 py-3">Deposit</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr
                  key={item.id}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="px-4 py-3 font-medium">{item.id}</td>
                  <td className="px-4 py-3">
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.phone}</p>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{item.description}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusStyle(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{item.rate}</td>
                  <td className="px-4 py-3 text-red-500">{item.balance}</td>
                  <td className="px-4 py-3">{item.deposit}</td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center p-4 text-gray-500">
                    No matching records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
