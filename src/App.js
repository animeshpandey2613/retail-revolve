import "./App.css";
import Intro from "./Pages/Intro";
import SearchPage from "./Pages/SearchPage";
import FormHandler from "./Pages/AuthPages/FormHandler";
import Description from "./Pages/ProductDescription";
import WholesellerDescription from "./Pages/WholesellerDescription";
import AllOrders from "./Pages/AllOrders";
import AddProducts from "./Pages/AddProducts";
import ManageProducts from "./Pages/ManageProducts";
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
      path: "/search/description/product/:id",
      element: <Description />,
    },
    {
      path: "/search/description/wholeseller/:id",
      element: <WholesellerDescription />,
    },
    {
      path: "/allorders",
      element: <AllOrders />,
    },
    {
      path: "/addProducts",
      element: <AddProducts />,
    },
    {
      path: "/manageProducts",
      element: <ManageProducts />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
