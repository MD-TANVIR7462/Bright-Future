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
import Error from './Components/Error/Error';
import ApplyJobs from './Components/ApplyedJobs/ApplyJobs/ApplyJobs';

const router =createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('/brands.json')
      },

      {
        path:'/Details/:CardId',
        element:<Details></Details>,
       loader:()=>fetch('/brands.json')

      },
      {
        path:'/Applyjobs',
        element:<ApplyJobs></ApplyJobs>,
        loader:()=>fetch('/brands.json')
      }
    
    ]
 
      }


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
