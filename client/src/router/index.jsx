import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import MainLayout from '../layouts/MainLayout'
import AboutUs from '../pages/AboutUs'
import EveenOrganics from '../pages/EveenOrganics'
import Sale from '../pages/Sale'
import StoreLocation from '../pages/StoreLocation'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'pages',
        children: [
          {
            path: 'about-us',
            element: <AboutUs />,
          },
          {
            path: 'store-location',
            element: <StoreLocation />,
          },
        ],
      },
      {
        path: 'collections',
        children: [
          {
            path: 'eveen-organics',
            element: <EveenOrganics />,
          },
          {
            path: 'sale',
            element: <Sale />,
          },
        ],
      },
    ],
  },
])

export default router
