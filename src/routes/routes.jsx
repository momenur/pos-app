import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../pages/products/Products";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Products />,
      },
    ],
  },
]);
export default route;
