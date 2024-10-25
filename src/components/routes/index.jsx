import Center from '../../pages/Center';
import Classes from '../../pages/Classes';
import Dashboard from '../../pages/Dashboard';
import Student from '../../pages/Student';
import Teachers from '../../pages/Teachers';
import Layout from '../Layout/Layout';
import TabAllCenters from '../TabAllCenter';
import TabWalterGibson from '../TabWalterGibson';
import TabClass from '../TabClass';
import TabTeacherInfo from '../TabTeacherInfo';
import TabInfoStudent from '../TabInfoStudent';
import Setting from '../../pages/Setting';
import { elements } from 'chart.js';
import TabListTeacher from '../TabListTeacher';

export const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Dashboard />
            },
            {
                path: 'center',
                element: <Center />,
                children: [
                    {
                        path: '',
                        element: <TabAllCenters />
                    },
                    {
                        path: 'walterGibson',
                        element: <TabWalterGibson />
                    },
                    {
                        path: 'class',
                        element: <TabClass />
                    },
                    {
                        path: 'studentInfo',
                        element: <TabTeacherInfo />
                    },
                    {
                        path: 'teacherInfo',
                        element: <TabTeacherInfo />
                    }
                ]
            },
            {
                path: 'classes', // Route for Classes
                element: <Classes />,
                children: [
                    {
                        path: '',
                        element: <TabWalterGibson />
                    },
                    {
                        path: 'class',
                        element: <TabClass />
                    },
                    {
                        path: 'studentInfo',
                        element: <TabInfoStudent />
                    },
                    {
                        path: 'teacherInfo',
                        element: <TabTeacherInfo />
                    }
                ]
            },
            {
                path: 'teacher',
                element: <Teachers />,
                children: [
                    {
                        path: '',
                        element: <TabListTeacher />
                    },
                    {
                        path: 'teacherInfo',
                        element: <TabTeacherInfo />
                    }
                ]
            },
            {
                path: 'student',
                element: <Student />
            },
            {
                path: 'setting',
                element: <Setting />
            }
        ]
    }
];