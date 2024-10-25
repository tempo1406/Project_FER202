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
import Inbox from './pages/Inbox';

import Information from './pages/Information';
import Signin from './pages/Signin';
import Register from './pages/Register';
import TabInfoStudent from './components/TabInfoStudent';
import TabClass from './components/TabClass';
import AllRoute from './components/AllRoute';
function App() {
    const location = useLocation();

    useEffect(() => {
        document.querySelector('html').style.scrollBehavior = 'auto';
        window.scroll({ top: 0 });
        document.querySelector('html').style.scrollBehavior = '';
    }, [location.pathname]); // triggered on route change

    return (
        <>
            <AllRoute />
        </>
    );
}

export default App;
