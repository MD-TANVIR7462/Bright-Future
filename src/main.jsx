import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Featured from './Components/Home/Featured';
import Details from './Components/details/Details';

const router =createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('/brands.json')
      },

      {
        path:'/Details/:CardId',
        element:<Details></Details>,
       

      }
    
    ]
 
      }


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
