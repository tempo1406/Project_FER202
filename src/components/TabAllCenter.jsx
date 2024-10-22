import React from 'react';

const TabAllCenters = ({ onTabChange }) => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800'>
      <h1 className='text-xl font-bold mb-4 text-blue-600'>All Centers</h1>
      <div className='min-h-screen bg-gray-100 p-6 dark:bg-gray-700'>
        <div className='flex items-center justify-between mb-4'>
          <div className='flex space-x-4'>
            <button className='border border-gray-300 px-4 py-2 rounded-lg'>
              Filter
            </button>
            <input
              type='text'
              placeholder='Search...'
              className='border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
            />
          </div>
        </div>
        <table className='min-w-full bg-white border rounded-lg dark:bg-gray-800 '>
          <thead>
            <tr>
              <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 dark:text-gray-100'>
                Name
              </th>
              <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 dark:text-gray-100'>
                Location
              </th>
              <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 dark:text-gray-100'>
                Orders
              </th>
              <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 dark:text-gray-100'>
                Spent
              </th>
            </tr>
          </thead>
          <tbody>
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <tr
                  key={index}
                  className='cursor-pointer'
                  onClick={() => onTabChange('walterGibson')}
                >
                  <td className='px-6 py-4 border-b border-gray-300 flex items-center space-x-3'>
                    <div className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700'>
                      W
                    </div>
                    <div>Walter Gibson</div>
                  </td>
                  <td className='px-6 py-4 border-b border-gray-300'>
                    Sawaynchester
                  </td>
                  <td className='px-6 py-4 border-b border-gray-300'>5</td>
                  <td className='px-6 py-4 border-b border-gray-300'>$96.14</td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className='flex justify-between items-center mt-4'>
          <div>17 Results</div>
          <div className='flex items-center space-x-2'>
            <button className='px-3 py-1 border rounded-lg'>1</button>
            <button className='px-3 py-1 border rounded-lg'>2</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabAllCenters;
