import React from 'react';

const TabClass = ({ onTabChange }) => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800'>
      <h1 className='text-xl mb-4 flex space-x-2'>
        <span
          className='flex items-center cursor-pointer'
          onClick={() => onTabChange('allCenters')}
        >
          All Centers
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-gray-500'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 5l7 7-7 7'
            />
          </svg>
        </span>

        <span
          className='flex items-center cursor-pointer'
          onClick={() => onTabChange('walterGibson')}
        >
          Walter Gibson
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-gray-500'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 5l7 7-7 7'
            />
          </svg>
        </span>

        <span className='text-blue-600 font-bold cursor-pointer'>SE18A</span>
      </h1>

      <div className='min-h-screen bg-gray-100 p-6 dark:bg-gray-700'>
        <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-full dark:bg-gray-800'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-xl font-semibold dark:text-gray-100'>Class status :</h2>
            <span className='text-green-500 font-semibold'>In progress</span>
          </div>
          <div className='grid grid-cols-3 gap-6 '>
            <div className='bg-gray-50 p-4 rounded-lg shadow text-center dark:bg-gray-700'>
              <h3 className='text-sm font-medium text-gray-500 dark:text-gray-100'>
                Students present
              </h3>
              <span className='text-green-600 text-xl font-bold'>17</span>
            </div>

            <div className='bg-gray-50 p-4 rounded-lg shadow text-center dark:bg-gray-700'>
              <h3 className='text-sm font-medium text-gray-500 dark:text-gray-100'>
                Students absent
              </h3>
              <span className='text-red-500 text-xl font-bold'>2</span>
            </div>
            <div className='bg-gray-50 p-4 cursor-pointer rounded-lg shadow flex items-center justify-between dark:bg-gray-700' onClick={() => onTabChange('teacherInfo')}>
              <div>
                <h3 className='text-sm font-medium text-gray-500 dark:text-gray-100'>Teacher</h3>
                <span className='font-semibold text-black dark:text-blue-500'>Karina</span>
              </div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-gray-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </div>
          </div>
          <div className='flex justify-end mt-4 space-x-4'>
            <button className='text-blue-500 hover:text-blue-700'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 20h9m-9-4h6M12 4v8m0 0l-3-3m3 3l3-3'
                />
              </svg>
            </button>
            <button className='text-blue-500 hover:text-blue-700'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Students Table */}
        <table className='min-w-full bg-white border rounded-lg mt-6 dark:bg-gray-800'>
          <thead>
            <tr>
              <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 dark:text-gray-100'>
                Name
              </th>
              <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 dark:text-gray-100'>
                Status
              </th>
              <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 dark:text-gray-100'>
                Sex
              </th>
              <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 dark:text-gray-100'>
                Fees
              </th>
            </tr>
          </thead>
          <tbody>
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <tr key={index} className='cursor-pointer' onClick={() => onTabChange('studentIfo')}>
                  <td className='px-6 py-4 border-b border-gray-300 flex items-center space-x-3'>
                    <div className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700'>
                      {index % 2 === 0 ? 'K' : 'T'}
                    </div>
                    <div>
                      {index % 2 === 0
                        ? 'Nguyễn Quốc Khang'
                        : 'Nguyễn Tấn Tiến'}
                    </div>
                  </td>
                  <td className='px-6 py-4 border-b border-gray-300'>
                    <span
                      className={`${
                        index % 2 === 0 ? 'text-green-600' : 'text-red-500'
                      }`}
                    >
                      {index % 2 === 0 ? 'Present' : 'Absent'}
                    </span>
                  </td>
                  <td className='px-6 py-4 border-b border-gray-300'>Male</td>
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

export default TabClass;
