import logo from "./logo.svg";
import "./App.css";
import { ProductList } from "./features/product-list/components/ProductList";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Signup from "./features/auth/components/Signup";
import SignupPage from "./pages/SignupPage";
import Cart from "./features/cart/Cart";
import CartPage from "./pages/CartPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CheckoutPage from "./pages/CheckoutPage";
import ProductDetail from "./features/product-list/components/ProductDetail";
import ProductDetailPage from "./pages/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/checkout",
    element: <CheckoutPage></CheckoutPage>,
  },
  {
    path: "/productdetail",
    element: <ProductDetailPage></ProductDetailPage>,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
