import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SearchModal from '../components/ModalSearch';
import Notifications from '../components/DropdownNotifications';
import Help from '../components/DropdownHelp';
import UserMenu from '../components/DropdownProfile';
import ThemeToggle from '../components/ThemeToggle';

function Header({ sidebarOpen, setSidebarOpen, variant = 'default' }) {
    const [searchModalOpen, setSearchModalOpen] = useState(false);

    return (
        <header
            className={`sticky top-0 before:absolute before:inset-0 before:backdrop-blur-md max-lg:before:bg-white/90 dark:max-lg:before:bg-gray-800/90 before:-z-10 z-30 ${
                variant === 'v2' || variant === 'v3'
                    ? 'before:bg-white after:absolute after:h-px after:inset-x-0 after:top-full after:bg-gray-200 dark:after:bg-gray-700/60 after:-z-10'
                    : 'max-lg:shadow-sm lg:before:bg-gray-100/90 dark:lg:before:bg-gray-900/90'
            } ${variant === 'v2' ? 'dark:before:bg-gray-800' : ''} ${
                variant === 'v3' ? 'dark:before:bg-gray-900' : ''
            }`}
        >
            <div className='px-4 sm:px-6 lg:px-8'>
                <div
                    className={`flex items-center justify-between h-16 ${
                        variant === 'v2' || variant === 'v3'
                            ? ''
                            : 'lg:border-b border-gray-200 dark:border-gray-700/60'
                    }`}
                >
                    {/* Header: Left side */}
                    <div className='flex'>
                        {/* Hamburger button */}
                        <button
                            className='text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 lg:hidden'
                            aria-controls='sidebar'
                            aria-expanded={sidebarOpen}
                            onClick={(e) => {
                                e.stopPropagation();
                                setSidebarOpen(!sidebarOpen);
                            }}
                        >
                            <span className='sr-only'>Open sidebar</span>
                            <svg
                                className='w-6 h-6 fill-current'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <rect x='4' y='5' width='16' height='2' />
                                <rect x='4' y='11' width='16' height='2' />
                                <rect x='4' y='17' width='16' height='2' />
                            </svg>
                        </button>
                    </div>

                    {/* Header: Right side */}
                    <div className='flex items-center space-x-3'>
                        <div>
                            <button
                                className={`w-8 h-8 flex items-center justify-center hover:bg-gray-100 lg:hover:bg-gray-200 dark:hover:bg-gray-700/50 dark:lg:hover:bg-gray-800 rounded-full ml-3 ${
                                    searchModalOpen &&
                                    'bg-gray-200 dark:bg-gray-800'
                                }`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSearchModalOpen(true);
                                }}
                                aria-controls='search-modal'
                            >
                                <span className='sr-only'>Search</span>
                                <svg
                                    className='fill-current text-gray-500/80 dark:text-gray-400/80'
                                    width={16}
                                    height={16}
                                    viewBox='0 0 16 16'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path d='M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7ZM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5Z' />
                                    <path d='m13.314 11.9 2.393 2.393a.999.999 0 1 1-1.414 1.414L11.9 13.314a8.019 8.019 0 0 0 1.414-1.414Z' />
                                </svg>
                            </button>
                            <SearchModal
                                id='search-modal'
                                searchId='search'
                                modalOpen={searchModalOpen}
                                setModalOpen={setSearchModalOpen}
                            />
                        </div>
                        <Notifications align='right' />

                        {/* INBOX  */}
                        <NavLink to='http://localhost:5173/inbox'>
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
                                    d='M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z'
                                />
                            </svg>
                        </NavLink>
                        {/* END INBOX  */}

                        <Help align='right' />
                        <ThemeToggle />
                        {/*  Divider */}
                        <hr className='w-px h-6 bg-gray-200 border-none dark:bg-gray-700/60' />
                        <UserMenu align='right' />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;