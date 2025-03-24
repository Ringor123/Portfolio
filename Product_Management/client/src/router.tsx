import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products, { loader as productsLoader, action as updateAvailabilityAction } from "./pages/Products";
import NewProduct, {action as newProductAction} from "./pages/NewProduct";
import EditProduct, {loader as editProductLoader, action as editProductAction} from "./pages/EditProduct";
import { action as deleteProductAction } from "./components/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [  //This is the Outlet for the Layout component
        {
            index: true,
            element: <Products/>,
            loader: productsLoader,
            action: updateAvailabilityAction
        },
        {
            path: "products/new",
            element: <NewProduct />,
            action: newProductAction
        },
        {
          path: "products/edit/:id",
          element: <EditProduct />,
          loader: editProductLoader,
          action: editProductAction
        },
        {
          path: "products/delete/:id",
          action: deleteProductAction
        }
    ]
  },
]);
