import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import Root from "./pages/Root";
import Detail from "./pages/Detail";
import Videos from "./pages/Videos";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Videos /> },
        { path: "/videos", element: <Videos /> },
        { path: "/videos/:keyword", element: <Videos /> },
        { path: "/videos/watch/:videoId", element: <Detail /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
