import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Center from './pages/Center';
import Classes from './pages/Classes';
import Teachers from './pages/Teachers';
import Student from './pages/Student';
import Setting from './pages/Setting';

function App() {
    const location = useLocation();

    useEffect(() => {
        document.querySelector('html').style.scrollBehavior = 'auto';
        window.scroll({ top: 0 });
        document.querySelector('html').style.scrollBehavior = '';
    }, [location.pathname]); // triggered on route change

    return (
        <>
            <Routes>
                <Route exact path='/' element={<Dashboard />} />
                <Route exact path='/center' element={<Center />} />
                <Route exact path='/classes' element={<Classes />} />
                <Route exact path='/teacher' element={<Teachers />} />
                <Route exact path='/student' element={<Student />} />
                <Route exact path='/setting' element={<Setting />} />
            </Routes>
        </>
    );
}

export default App;
