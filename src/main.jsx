import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>{/*
      <div className="top-0 flex flex-row w-full bg-black">
        <div className="mr-auto p-4">Hewwo</div>
        <div className="ml-auto p-4">Settings</div>
      </div>*/}
      <App/>
    </>
  </React.StrictMode>,
)
