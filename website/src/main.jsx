import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Hello world!</div>,
        errorElement: <div>Error</div>
    },
    {
        path: '/home',
        element: <div>Home</div>
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
