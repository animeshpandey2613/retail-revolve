import "./App.css";
import Intro from "./Pages/Intro";
import SearchPage from "./Pages/SearchPage";
import FormHandler from "./Pages/AuthPages/FormHandler";
import Description from "./Pages/Description";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Intro />,
    },
    {
      path: "/form/:type",
      element: <FormHandler />,
    },
    {
      path: "/search",
      element: <SearchPage />,
    },
    {
      path: "/search/description/:id",
      element: <Description />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
