
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './App.css';
import Layout from './Components/Layout/Layout'
import Notfound from './Components/Notfound/Notfound';
import HomePage from './Components/Pages/HomePage/HomePage';
import AdsPage from './Components/Pages/AdsPage/AdsPage';
import ContactusPage from './Components/Pages/ContactusPage/ContactusPage';
import AdsDeatails from './Components/AdsDeatails/AdsDeatails';
import Commission from './Components/Commission/Commission';
import Profile from './Components/Profile/Profile';
import PersonalData from './Components/PersonalData/PersonalData';
import Archives from './Components/Archives/Archives';
import ChatsProfile from './Components/ChatsProfile/ChatsProfile';
import LogoutProfile from './Components/LogoutProfile/LogoutProfile';
import Login from './Components/Login/Login';
import AuthLayout from './Components/AuthLayout/AuthLayout';



const router = createBrowserRouter([
  {path: "", element: <Layout />, children:[
    {index: true, element: <HomePage />},
    {path: "AdsPage", element: <AdsPage />},
    {path: "AdsDeatails", element: <AdsDeatails />},
    {path: "ContactusPage", element: <ContactusPage />},
    {path: "Commission", element: <Commission />},
    {path: "/Profile", element: <Profile />, children: [
      {index: true, element: <Navigate to="PersonalData" replace />},
      {path: "PersonalData", element: <PersonalData /> },
      {path: "Archives", element: <Archives /> },
      {path: "ChatsProfile", element: <ChatsProfile /> },
      {path: "LogoutProfile", element: <LogoutProfile /> },
    ]},
    {path: "*", element: <Notfound />},
  ]},

  //* auth صفحات الـ
  {path: "", element: <AuthLayout />, children: [
    { path: "Login", element: <Login /> },
    ],
  },
]);


function App() {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
