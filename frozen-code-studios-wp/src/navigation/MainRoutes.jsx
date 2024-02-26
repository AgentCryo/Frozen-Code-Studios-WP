import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '../components/MainLayout';
import { Home } from '../pages/Home';
import Place_Taker from '../pages/Place_Taker';
import Meet_the_Team from '../pages/Meet_the_Team';

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
        },
    ],
  },
]);

export const MainRoutes = () => {
  return <RouterProvider router={router} />;
};
