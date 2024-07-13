import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import './index.css';

import Discover from './components/pages/discover/Discover';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Discover/>,
        errorElement: <div>Error 404</div>,
    },
    {
        path: '/discover',
        element: <Discover/>,
    },
    {
        path: '/search',
        element: <div>Search</div>
    },
    {
        path: '/myrecipes',
        element: <div>My Recipes</div>
    },
    {
        path: '/login',
        element: <div>Login</div>
    },
    {
        path: '/**',
        element: <div>Not Found</div>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
