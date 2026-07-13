
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
import { AuthProvider } from './Components/context/AuthContext';
import StatisticsPage from './Components/provider-pages/StatisticsPage/StatisticsPage';
import AdsPageProvider from './Components/provider-pages/AdsPages/AdsPage';
import CreateAdvertisement from './Components/provider-pages/CreateAddvertisement/CreateAddvertisement';
import FormHorseAd from './Components/provider-pages/Forms/FormHorseAd';
import FormShelterAd from './Components/provider-pages/Forms/FormShelterAd';
import FormTransferAd from './Components/provider-pages/Forms/FormTransferAd';
import FormSuppliesAd from './Components/provider-pages/Forms/FormSuppliesAd';
import FormTrainingAd from './Components/provider-pages/Forms/FormTrainingAd';
import TransferFund from './Components/provider-pages/TransferFund/TransferFund';
import CommissionPayment from './Components/provider-pages/CommissionPayment/CommissionPayment';
import TypePayment from './Components/provider-pages/TypePayment/TypePayment';





const router = createBrowserRouter([
  {path: "/", element: <Layout />, children:[  
    {index: true, element: <HomePage />},
    {path: "AdsPage", element: <AdsPage />},
    {path: "AdsDeatails/:id", element: <AdsDeatails />},
    {path: "ContactusPage", element: <ContactusPage />},
    {path: "Commission", element: <Commission />},
    {path: "statistics", element: <StatisticsPage />},
    {path: "adsPageProvider", element: <AdsPageProvider />},
    {path: "create-ad", element: <CreateAdvertisement /> },
    { path: "create-ad/horses", element: <FormHorseAd /> },
    { path: "create-ad/shelter", element: <FormShelterAd /> },
    { path: "create-ad/transfer", element: <FormTransferAd /> },
    { path: "create-ad/supplies", element: <FormSuppliesAd /> },
    { path: "create-ad/training", element: <FormTrainingAd /> },
    { path: "commissionPayment", element: <CommissionPayment /> },
    { path: "payment-type", element: <TypePayment /> },
    { path: "transferFunds", element: <TransferFund /> },
    {path: "Profile", element: <Profile />, children: [
      {index: true, element: <Navigate to="PersonalData" replace />},
      {path: "PersonalData", element: <PersonalData /> },
      {path: "Archives", element: <Archives /> },
      {path: "ChatsProfile", element: <ChatsProfile /> },
      {path: "LogoutProfile", element: <LogoutProfile /> },
    ]},
    {path: "*", element: <Notfound />},
  ]},

  {path: "/", element: <AuthLayout />, children: [  
    { path: "Login", element: <Login /> },
  ]},
]);


function App() {
  return (
    <AuthProvider>  
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
