import { Children } from 'react';

import Dashboard from '../pages/Dashboard';
import Layout from '../components/Layout/Layout';

export const routes = [
    {
        path: '/',
        element: <Layout />,
        Children: [
            {
                path: '/',
                element: <Dashboard />
            }
        ]
    }
];
