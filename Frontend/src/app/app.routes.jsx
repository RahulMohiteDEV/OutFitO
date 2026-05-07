import {createBrowserRouter } from 'react-router-dom'
import Register from '../features/auth/pages/Register'
import Login from '../features/auth/pages/Login'
import CreatePage from '../features/products/pages/CreatePage';


 const routes  = createBrowserRouter([
    {
         path: '/',
         element: <h1>Home</h1>
    },

    {
        path: '/register',
        element: <Register />
    },

    {
        path: '/login',
        element: <Login />

    },
    {
        path:'/create-product',
        element:<CreatePage/>
    }
])

export default routes;