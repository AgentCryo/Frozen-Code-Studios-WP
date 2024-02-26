import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '../components/MainLayout';
import { Home } from '../pages/Home';
import Page1 from '../pages/Place_Taker';
import Page2 from '../pages/Meet_the_Team';

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
    ],
  },
]);

export const MainRoutes = () => {
  return <RouterProvider router={router} />;
};
