import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import { DefaultPagination } from '../components/Pagination';
import Modal from '../components/Modal';

const Student = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

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
        <div className='flex h-screen overflow-hidden'>
            {/* Sidebar */}
            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            {/* Content area */}
            <div className='relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto'>
                {/*  Site header */}
                <Header
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />

                <main className='grow'>
                    <div className='w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl'>
                        {/* Dashboard actions */}
                        <div className='mb-8 sm:flex sm:justify-between sm:items-center'>
                            {/* Left: Title */}
                            <div className='mb-4 text-center sm:mb-0'>
                                <h1 className='text-2xl font-bold text-gray-800 md:text-3xl dark:text-gray-100'>
                                    Students
                                </h1>
                            </div>

                            {/* Right: Actions */}
                            <div className='grid justify-start grid-flow-col gap-2 sm:auto-cols-max sm:justify-end'>
                                {/* Filter button */}
                                <FilterButton align='right' />
                                {/* Datepicker built with flatpickr */}
                                <Datepicker align='right' />
                                {/* Add view button */}
                                <button className='text-gray-100 bg-gray-900 btn hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white'>
                                    <svg
                                        className='fill-current shrink-0 xs:hidden'
                                        width='16'
                                        height='16'
                                        viewBox='0 0 16 16'
                                    >
                                        <path d='M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z' />
                                    </svg>
                                    <span className='max-xs:sr-only'>
                                        Add View
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Cards */}
                        <div className='grid grid-cols-12 gap-6'>
                            <div className='col-span-12 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800'>
                                <div className='min-h-screen p-6 bg-gray-100 dark:bg-gray-700'>
                                    <div className='flex items-center justify-between mb-4'>
                                        <div className='flex space-x-4'>
                                            <button className='px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-600'>
                                                Filter
                                            </button>
                                            <input
                                                type='text'
                                                placeholder='Search...'
                                                className='px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-100'
                                            />
                                        </div>
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
                                                    Giới tính
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
                                                        className='transition-colors cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700'
                                                        onClick={() =>
                                                            onTabChange('class')
                                                        }
                                                    >
                                                        <td className='px-6 py-4'>
                                                            <div className='flex items-center space-x-4'>
                                                                <input
                                                                    type='checkbox'
                                                                    className='rounded-md'
                                                                />
                                                                <div className='flex items-center justify-center w-10 h-10 text-gray-700 bg-gray-200 rounded-full'>
                                                                    H
                                                                </div>
                                                                <span className='text-sm font-medium text-gray-900 dark:text-gray-100'>
                                                                    Lê Nhật Huy
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td className='px-6 py-4 text-sm text-gray-600 dark:text-gray-300'>
                                                            Sawaynchester
                                                        </td>
                                                        <td className='px-6 py-4 text-sm text-gray-600 dark:text-gray-300'>
                                                            Male
                                                        </td>
                                                        <td className='px-6 py-4 text-sm text-gray-600 dark:text-gray-300'>
                                                            $96.14
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
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Student;
