import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import Home from "./pages/Home.jsx"
import Test from "./pages/Test.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/test",
    element: <Test />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
