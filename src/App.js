import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../../learn-router/src/pages/Home";
import NotFoundPage from "../../learn-router/src/pages/NotFoundPage";
import Detail from "./pages/Detail";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home />, errorElement: <NotFoundPage /> },
    { path: "/:id", element: <Detail />, errorElement: <NotFoundPage /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
