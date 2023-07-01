import "./index.css";
import "./App.css";
import Mycart from "./home/header/cart/mycart";
import Home from "./home/header/home";
import Signin from "./home/auth/signin";
import Login from "./home/auth/login";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Params,
} from "react-router-dom";
import Aboutus from "./home/store/about us/aboutuspg";
import Myshopproducts from "./home/store/myshopproducts";
import Webstore from "./home/store/store";
import Orderform from "./home/items.js/orderform";
import Profile from "./home/profile/profile";
import Storeabout from "./home/store/about us/shopaboutapp";
import Plans from "./home/plans/plans";
import Productdeatils from "./home/productdetails/productdeatils";
import Addshopform1 from "./home/addnewshop/addshopform1";
import ItemsDetails from "./home/items opened/itemsdetails";
import Productdetailsapp from "./home/items opened/prodsdetailsright";
import Dropshipping from "./home/dropshipping mode/dropshipping";
import Prodsright from "./home/items opened/prodsdetailsright";
import Productsdeatilspage from "./home/items opened/itemdetailspage";
import Shopsright from "./home/shopsowner/shopsright";
import Addproductstodatabase from "./home/addproducts/addproductsinshop";
import Addshopniche from "./home/addnewshop/addshopniche";
import Addfashionshopform from "./home/fashionstore/addfashionshopform";
import Fashionshop from "./home/fashionstore/fashionshop";
import Fashionshoppreview from "./home/fashionshoppreview/fashionshop";
import Saleschat from "./home/sales/saleschat";
import Order from "./home/order/order";
import Template3website from "./home/template3/template3website";
import Addtemplate3form from "./home/template3/addtemplate3";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/cart", element: <Mycart /> },
  { path: "/login", element: <Login /> },
  { path: "/signin", element: <Signin /> },
  {
    path: "/mystore/:shop_id/:shop_name/:shop_owner/:shop_about/:shop_prods/:user_id",
    element: <Shopsright />,
  },
  { path: "/aboutus", element: <Storeabout /> },
  { path: "/shop-products", element: <Myshopproducts /> },
  { path: "/orderproduct", element: <Orderform /> },
  { path: "/profile", element: <Profile /> },
  { path: "/Plans", element: <Plans /> },
  { path: "/Addshoppage1", element: <Addshopniche /> },
  { path: "/Dropshipping", element: <Dropshipping /> },
  {
    path: "/products/:id/:title/:price/:shop_id/",
    element: <Prodsright />,
  },
  { path: "/Addproducts", element: <Addproductstodatabase /> },
  { path: "/Defaultstore", element: <Addshopform1 /> },
  { path: "/AddFAshionShopForm", element: <Addfashionshopform /> },
  {
    path: "/mystore/fashion/:shop_id/:shop_name/:shop_owner/:shop_about/:shop_tagline/:shop_abouthead/:shop_block2/:shop_blockheading2/:shop_blockheading3/:shop_block3/:user_id",
    element: <Fashionshop />,
  },
  {
    path: "/temp1preview",
    element: <Fashionshoppreview />,
  },
  {
    path: "/saleschat/:orders_id/:name/:Phone/:Email/:streetadrs/:city/:state/:zipcode/:country/:id/:product/:sender_id/:shop_id/:message",
    element: <Saleschat />,
  },
  { path: "/orders", element: <Order /> },
  { path: "/prevewtemp3", element: <Template3website /> },
  { path: "/addtemplate3form", element: <Addtemplate3form /> },
  {
    path: "/mystore/template3/:shop_id/:shop_name/:shop_owner/:shop_tagline/:shop_block2/:shop_blockhead2/:shop_blockhead3/:shop_block3/:user_id/:shop_blockhead1/:shop_block1/:shop_keyhead1/:shop_key1/:shop_keyhead2/:shop_key2/:shop_keyhead3/:shop_key3/:shop_email/:shop_phone",
    element: <Template3website />,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
