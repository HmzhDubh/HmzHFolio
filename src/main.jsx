import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import './index.css'
import App from './App.jsx'

import Layout from './components/Layout.jsx'
import DashboardLayout from './components/DashboardLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import Contact from './pages/ContactPage.jsx'
import ProjectDetailsPage from './pages/ProjectDetailsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import GalleryPage from './pages/GalleryPage.jsx'
import ProjectsDashboardPage from './pages/dashboards/Projects.jsx'
import PhotosDashboardPage from './pages/dashboards/Photos.jsx'
import MessagesDashboardPage from './pages/dashboards/Messages.jsx'
import ExperienceDashboardPage from './pages/dashboards/Experience.jsx'
import TechStackDashboardPage from './pages/dashboards/TechStack.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <HomePage />},
            { path: '/projects', element: <ProjectsPage />,},
            { path: '/projects/:id', element: <ProjectDetailsPage />, },
            { path: 'about', element: <AboutPage />, },
            { path: 'gallery', element: <GalleryPage />, },
            { path: 'contact', element: <Contact />, },
            { path: 'dashboard', element: <DashboardLayout />,
                children:[
                    { index: true, element: <ProjectsDashboardPage /> },
                    { path: '/dashboard/photos', element: <PhotosDashboardPage /> },
                    { path: '/dashboard/messages', element: <MessagesDashboardPage /> },
                    { path: '/dashboard/experience', element: <ExperienceDashboardPage /> },
                    { path: '/dashboard/tech-stack', element: <TechStackDashboardPage /> },

                ]
            },

        ],
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
