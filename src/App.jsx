import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./Home";
import Create from "./Create";
import Layout from "./components/layout/Layout";
import Error from "./components/ui/Error";
import Update from "./Update";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/create",
          element: <Create />,
        },
        {
          path: "/edit/:id",
          element: <Update />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
