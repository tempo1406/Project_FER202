import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import Banner from '../partials/Banner';

const Inbox = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        // Xử lý logic gửi tin nhắn tại đây
        console.log('Sent message:', message);
        setMessage('');
    };
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
                                    Inbox
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
                        <div className='container px-[120px] '>
                            <button className='flex w-[180px] h-[40px] justify-center items-center bg-blue-600 rounded-sm text-white font-normal ml-[85%]'>
                                <span>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke-width='1.5'
                                        stroke='currentColor'
                                        class='size-6'
                                    >
                                        <path
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                            d='M12 4.5v15m7.5-7.5h-15'
                                        />
                                    </svg>
                                </span>
                                New Message
                            </button>

                            <div className='relative py-4 mt-5 bg-white'>
                                <div className='flex h-[80vh]'>
                                    {/* Sidebar */}
                                    <div className='w-64 px-6 py-4 bg-gray-200'>
                                        <input
                                            type='text'
                                            placeholder='Search...'
                                            className='w-full p-2 mb-6 border border-gray-300 rounded-lg'
                                        />
                                        <div className='flex items-center space-x-4'>
                                            <img
                                                src='https://randomuser.me/api/portraits/men/1.jpg'
                                                alt='User avatar'
                                                className='w-12 h-12 rounded-full'
                                            />
                                            <div>
                                                <h3 className='text-lg font-bold'>
                                                    Tom Anderson
                                                </h3>
                                                <p className='text-gray-500'>
                                                    Online
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Chat window */}
                                    <div className='flex-1 px-8 py-6 bg-white '>
                                        <div className='flex items-center justify-between border-b-4 mb-[15px] pb-5'>
                                            <div className='flex items-center justify-center'>
                                                <h3 className='font-bold text-black'>
                                                    Tom Anderson
                                                </h3>
                                                <span className='ml-2 bg-green-600 rounded-full size-2'></span>
                                            </div>

                                            <div className='flex gap-3'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    fill='none'
                                                    viewBox='0 0 24 24'
                                                    stroke-width='1.5'
                                                    stroke='currentColor'
                                                    class='size-6'
                                                >
                                                    <path
                                                        stroke-linecap='round'
                                                        stroke-linejoin='round'
                                                        d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                                                    />
                                                </svg>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    fill='none'
                                                    viewBox='0 0 24 24'
                                                    stroke-width='1.5'
                                                    stroke='currentColor'
                                                    class='size-6'
                                                >
                                                    <path
                                                        stroke-linecap='round'
                                                        stroke-linejoin='round'
                                                        d='m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z'
                                                    />
                                                </svg>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    fill='none'
                                                    viewBox='0 0 24 24'
                                                    stroke-width='1.5'
                                                    stroke='currentColor'
                                                    class='size-6'
                                                >
                                                    <path
                                                        stroke-linecap='round'
                                                        stroke-linejoin='round'
                                                        d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z'
                                                    />
                                                    <path
                                                        stroke-linecap='round'
                                                        stroke-linejoin='round'
                                                        d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className='space-y-8'>
                                            <div className='flex items-start space-x-4'>
                                                <img
                                                    src='https://randomuser.me/api/portraits/men/1.jpg'
                                                    alt='User avatar'
                                                    className='w-12 h-12 rounded-full'
                                                />
                                                <div className='bg-gray-100 p-3 rounded-lg max-w-[75%]'>
                                                    <p>
                                                        Hi, I wonder when if
                                                        there is going to be
                                                        anyt?
                                                    </p>
                                                </div>
                                            </div>

                                            <div className='flex items-start justify-end space-x-4'>
                                                <div className='bg-blue-500 text-white p-3 rounded-lg max-w-[75%]'>
                                                    <p>
                                                        Sure, I want to know
                                                        when the new sp ?
                                                    </p>
                                                </div>
                                                <img
                                                    src='https://randomuser.me/api/portraits/men/2.jpg'
                                                    alt='User avatar'
                                                    className='w-12 h-12 rounded-full'
                                                />
                                            </div>
                                        </div>

                                        <div className='absolute bottom-[15px] flex items-center '>
                                            <input
                                                type='text'
                                                value={message}
                                                onChange={(e) =>
                                                    setMessage(e.target.value)
                                                }
                                                className='flex-1 pr-[550px] mr-4 border border-gray-300 rounded-lg w-[100%]'
                                                placeholder='Type your message...'
                                            />
                                            <button
                                                onClick={sendMessage}
                                                className='px-4 py-2 text-white bg-blue-500 rounded-lg'
                                            >
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <Banner />
            </div>
        </div>
    );
};

export default Inbox;
