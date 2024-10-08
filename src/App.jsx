import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./sections/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
