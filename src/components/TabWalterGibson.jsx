import React, { useState } from 'react';
import { DefaultPagination } from './Pagination';
import Modal from './Modal';

const TabWalterGibson = ({ onTabChange }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const optionsSelect = [
        { value: 'Huy', label: 'Huy' },
        { value: 'PC', label: 'Huy đẹp trai' },
        { value: 'Huy1', label: 'Huy lã lướt' },
        { value: 'Huy2', label: 'Huy kute123' }
    ];

    return (
        <div className='p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800'>
            <h1 className='flex mb-4 space-x-2 text-xl'>
                <span
                    className='flex items-center cursor-pointer'
                    onClick={() => onTabChange('allCenters')}
                >
                    All Centers
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-6 h-6 text-gray-500'
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
                    className='flex items-center font-bold text-blue-600 cursor-pointer'
                    onClick={() => onTabChange('walterGibson')}
                >
                    Walter Gibson
                </span>
            </h1>
            <div className='min-h-screen p-6 bg-gray-100 dark:bg-gray-700'>
                <div className='flex items-center justify-end mb-4'>
                    <div className='flex space-x-6'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            onClick={handleModalOpen}
                            className='flex items-center justify-center w-10 text-blue-600 transition duration-300 cursor-pointer h-9 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500 '
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                            />
                        </svg>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='flex items-center justify-center w-10 text-red-600 transition duration-300 cursor-pointer h-9 hover:text-red-800 dark:text-red-400 dark:hover:text-red-500'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                            />
                        </svg>
                    </div>
                </div>
                <table className='min-w-full bg-white border rounded-lg dark:bg-gray-800'>
                    <thead>
                        <tr>
                            <th className='px-6 py-3 text-sm leading-4 text-left text-gray-600 border-b-2 border-gray-300 dark:text-gray-100'>
                                Name
                            </th>
                            <th className='px-6 py-3 text-sm leading-4 text-left text-gray-600 border-b-2 border-gray-300 dark:text-gray-100'>
                                Location
                            </th>
                            <th className='px-6 py-3 text-sm leading-4 text-left text-gray-600 border-b-2 border-gray-300 dark:text-gray-100'>
                                Orders
                            </th>
                            <th className='px-6 py-3 text-sm leading-4 text-left text-gray-600 border-b-2 border-gray-300 dark:text-gray-100'>
                                Spent
                            </th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200'>
                        {Array(10)
                            .fill(0)
                            .map((_, index) => (
                                <tr
                                    key={index}
                                    className='transition-colors cursor-pointer '
                                    onClick={() => onTabChange('class')}
                                >
                                    <td className='px-6 py-4'>
                                        <div className='flex items-center space-x-4'>
                                            <input
                                                type='checkbox'
                                                className='rounded-md size-6'
                                                onClick={(e) =>
                                                    e.stopPropagation()
                                                } // Prevent row click event
                                            />
                                            <div className='flex items-center justify-center w-10 h-10 text-gray-700 bg-gray-200 rounded-full'>
                                                S
                                            </div>
                                            <span className='text-sm font-medium text-gray-900 dark:text-gray-100'>
                                                SE18A
                                            </span>
                                        </div>
                                    </td>
                                    <td className='px-6 py-4 text-sm text-gray-600 dark:text-gray-300'>
                                        Sawaynchester
                                    </td>
                                    <td className='px-6 py-4 text-sm text-gray-600 dark:text-gray-300'>
                                        35
                                    </td>
                                    <td className='px-6 py-4 text-sm text-gray-600 dark:text-gray-300'>
                                        $96
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <div className='flex items-center justify-between mt-4'>
                    <DefaultPagination />
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                title={'Add Class'}
                name={'Class Name'}
                type={'Teacher'}
                idSelect={''}
                options={optionsSelect}
            />
        </div>
    );
};

export default TabWalterGibson;
