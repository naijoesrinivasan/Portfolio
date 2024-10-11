import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./sections/Home";
import Error from "./sections/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />
    },
    {
      path: "*",
      element: <Error />
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
