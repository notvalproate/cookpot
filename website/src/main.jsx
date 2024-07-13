import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './state/store.js';

import './index.css';

import Discover from './components/pages/discover/Discover';
import Login from './components/pages/login/Login';
import Search from './components/pages/search/Search';
import MyRecipes from './components/pages/myrecipes/MyRecipes';

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
        element: <Search/>,
    },
    {
        path: '/myrecipes',
        element: <MyRecipes/>,
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/**',
        element: <div>Not Found</div>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);
