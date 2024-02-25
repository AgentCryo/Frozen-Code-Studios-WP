import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '../components/MainLayout';
import { Home } from '../pages/Home';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';

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
        path: 'page1',
        element: <Page1 />,
      },
      {
        path: 'page2',
        element: <Page2 />,
      },
    ],
  },
]);

export const MainRoutes = () => {
  return <RouterProvider router={router} />;
};
