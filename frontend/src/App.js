import React from 'react'
import Register from "./pages/register/Register"
import Login from './pages/login/Login'
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom"
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import NavBar from "./components/navbar/NavBar"
import LeftBar from "./components/leftbar/LeftBar"
import { useSelector } from "react-redux"
const App = () => {
    const { user } = useSelector(state => state.auth)
    /* const ProtectedRoute = ({ children }) => {
         if (user) {
             return children
         } else {
             <Navigate to="/login" />
         }
 
     }*/
    const Layout = () => {
        return (
            <div>
                <NavBar />
                <div style={{ display: "flex" }}>
                    <LeftBar />
                    <Outlet />
                </div>
            </div>
        )
    }
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/profile/:id",
                    element: <Profile />
                }
            ],
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        }
    ])
    return (
        <div>
            <RouterProvider
                router={router}
            />
        </div>
    )
}

export default App
