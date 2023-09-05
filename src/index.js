import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FormPage from './pages/FormPage';
import GridPage from './pages/GridPage';
import CartPage from "./pages/CartPage"
import LoginPage from './pages/LoginPage';
import { Provider } from 'react-redux';
import Store from './redux/Store';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import RegistrationPage from './pages/RegistrationPage';

const router = createBrowserRouter([
  {
    path:"/",
    element: <FormPage/>
  }, 
  {
    path:"/grid",
    element: <GridPage/>
  }, 
  {
    path:"/cart",
    element: <CartPage/>
  },
  {
    path:"/login",
    element:<LoginPage/>
  },
  {
    path:"/registration",
    element:<RegistrationPage/>
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
