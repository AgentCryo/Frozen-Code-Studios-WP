import { FirebaseProvider } from '../providers/FirebaseProvider';
import { AuthProvider } from '../providers/AuthProvider';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Children } from 'react';

import { MainLayout } from '../components/MainLayout';
import { Home } from '../pages/Home';

import Place_Taker from '../pages/Place_Taker';
import Meet_the_Team from '../pages/Meet_the_Team';
import Devlogs from '../pages/Devlogs'
import User_Suggestions from '../pages/User_Suggestions';
import Bug_Reports from '../pages/Bug_Reports';
import Games_FCS from '../pages/Games_FCS';
import Comunity_Guidlines from '../pages/Comunity_Guidlines';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    path: '/',
    children: [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: 'place_taker',
            element: <Place_Taker />,
        },
        {
            path: 'meet_the_team',
            element: <Meet_the_Team />,
        },
        {
            path: 'devlogs',
            element: <Devlogs />,
            children: [

            ],
        },
        {
            path: 'user_suggestions',
            element: <User_Suggestions />,
            children: [

            ],
        },
        {
            path: 'bug_reports',
            element: <Bug_Reports />,
            children: [

            ],
        },
        {
            path: 'games_fcs',
            element: <Games_FCS />,
            children: [

            ],
        },
        {
            path: 'comunity_guidlines',
            element: <Comunity_Guidlines/>,
        }
    ],
  },
]);

export const MainRoutes = () => {
    return (
        <FirebaseProvider>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </FirebaseProvider>
    );
};
