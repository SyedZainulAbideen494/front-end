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
import Saleschat from "./home/sales/saleschat";
import Order from "./home/order/order";
import Template3website from "./home/template3/template3website";
import Temp1rpeview from "./home/preview templates/temp1";
import Addtemplate3form from "./home/template3/addtemplate3";
import Temp2preview from "./home/preview templates/temp2";
import Template3preview from "./home/preview templates/temp3";
import Template5websitepreview from "./home/template5/template5websitepreview";
import Template5website from "./home/template5/template5website";
import Addtemplate5form from "./home/template5/addtemplate5";
import PaymentApp from "./home/payment/payment";
import Addtemplate4form from "./home/template4/addtemplate4";
import Template4website from "./home/template4/template4website";
import Template6websitepreview from "./home/template5 copy/template6websitepreview";
import Template1websitepreview from "./home/template1/template1websitepreview";
import Template4websitepreview from "./home/template4/temp4preview";
import Addtemplate6form from "./home/template5 copy/addtemplate5";
import Template6website from "./home/template5 copy/template6website";
import Addtemplate1form from "./home/template1/addtemplate1";
import Template1website from "./home/template1/template1website";
import Template2websitepreview from "./home/template2/template2websitepreview";
import Addtemplate2form from "./home/template2/addtemplate2";
import Template3websitepreview from "./home/template3/template3websitepreview";
import Template2website from "./home/template2/template2website";
import Search from "./home/search/search";
import Template7websitepreview from "./home/template7/template5websitepreview";
import Addtemplate7form from "./home/template7/addtemplate5";
import Template7website from "./home/template7/template5website";
import Template8websitepreview from "./home/template8/template8websitepreview";
import Addtemplate8form from "./home/template8/addtemplate8";
import Template8website from "./home/template8/template8website";
import SubscriptionForm from "./home/payment/payment";

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
  { path: "/Plansss", element: <Plans /> },
  { path: "/Addshoppage1", element: <Addshopniche /> },
  { path: "/Dropshipping", element: <Dropshipping /> },
  {
    path: "/products/:id/:title/:price/:shop_id",
    element: <Prodsright />,
  },
  { path: "/Addproducts", element: <Addproductstodatabase /> },
  { path: "/Add/shop/template1/form", element: <Addtemplate1form /> },
  {path: '/mystore1/:shop_id/:shop_name/', element: <Template1website/>},
  {
    path: "/temp1preview",
    element: <Template1websitepreview />,
  },
  {
    path: "/saleschat/:orders_id",
    element: <Saleschat />,
  },
  { path: "/orders", element: <Order /> },
  { path: "/prevewtemp3", element: <Template3website /> },
  { path: "/addtemplate3form", element: <Addtemplate3form /> },
  {
    path: "/mystore3/:shop_id/:shop_name/",
    element: <Template3website />,
  },
  { path: "/previewtemplate2", element: <Temp2preview /> },
  {path: "/temp5preview", element: <Template5websitepreview /> },
  {path: '/addShopTemp5', element: <Addtemplate5form/>},
  {path: '/mystore5/:shop_id/:shop_name', element: <Template5website/>},
  {path: '/template4/preview', element: <Template4websitepreview/>},
  {path: '/Plans', element: <SubscriptionForm/>},
  {path: '/Add/Tempate4/Form', element: <Addtemplate4form/>},
  {path: '/mystore4/:shop_id/:shop_name', element: <Template4website/>},
  {path: '/Template6/preview', element: <Template6websitepreview/>},
  {path: '/Add/template6/form', element: <Addtemplate6form/>},
  {path: '/mystore6/:shop_id/:shop_name', element: <Template6website/>},
  {path: '/Preview/Template2', element: <Template2websitepreview/>},
  {path: '/Add/template2/form', element: <Addtemplate2form/>},
  {path: '/preview/template3', element: <Template3websitepreview/>},
  {path: '/mystore2/:shop_id/:shop_name/', element: <Template2website/>},
  {path: '/search', element: <Search/>},
  {path: '/template7/preview', element: <Template7websitepreview/>},
  {path: '/Add/Template7/Form', element: <Addtemplate7form/>},
  {path: '/mystore7/:shop_id/:shop_name/', element: <Template7website/>},
  {path: '/preview/template8', element: <Template8websitepreview/>},
  {path: '/add/template8/form', element: <Addtemplate8form/>},
  {path: '/mystore8/:shop_id/:shop_name/', element: <Template8website/>},
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
