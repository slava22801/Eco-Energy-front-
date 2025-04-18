import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import Registration from './pages/registration.jsx'
import Admin from './pages/admin.jsx'
import Login from './pages/login.jsx'



const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/register", element: <Registration/>},
  {path: "/admin", element: <Admin/>},
  {path: "/login", element: <Login/>}
]) // Пути сайта (Главная, Регистрация и т.д.)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
