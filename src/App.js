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
import Template2websitepreview from "./home/template2/template2websitepreview";
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
import Userdisplay from "./home/user/userdisplay";
import Usersindetails from "./home/user/usersdetails";
import Mainpage from "./home/mainpage/mainpage";
import ChatMessageapp from "./home/chat/mainchat";
import SalesReportApp from "./home/sales/chatsreport";
import AddProductsForm from "./home/additemsform/additemsform";
import AddStories from "./home/stories/addstories";
import Stories from "./home/stories/stories";
import SelectNoSection from "./home/custom-shop/custom-shop-selection";
import Step1build from "./home/custom-shop/build-step1";
import Step2build from "./home/custom-shop/build-step2";
import Step3build from "./home/custom-shop/build-step3";
import Step4build from "./home/custom-shop/build-step4";
import Step5build from "./home/custom-shop/build-step5";
import StepFooterBuild from "./home/custom-shop/build-footer";
import Step6build from "./home/custom-shop/build-step6";
import Step7build from "./home/custom-shop/build-step7";
import Step8build from "./home/custom-shop/build-step8";
import Step9build from "./home/custom-shop/build-step9";
import Step10build from "./home/custom-shop/build-step10";
import Step11build from "./home/custom-shop/build-step11";
import Step12build from "./home/custom-shop/build-step12";
import CustomShopForm from "./home/custom-shop/custom-shop-form";
import NavBarsForm from "./home/custom-shop/navigation-bars/navbarform";
import HeadersForm from "./home/custom-shop/headers-parts/headerform";
import Section1Form from "./home/custom-shop/sections-parts/sectionsform";
import Footerform from "./home/custom-shop/footer-parts/foothersform";
import CustomShop from "./home/custom-shop/customshop";
import Section4Form from "./home/custom-shop/sections-parts/sectionsform-section4";
import Section5Form from "./home/custom-shop/sections-parts/sectionsform-section5";
import Section6Form from "./home/custom-shop/sections-parts/sectionsform-section6";
import SubscriptionFormInner from "./home/payment/payment";
import BotApp from "./home/chatbot/botapp";
import CustomShopPreview from "./home/custom-shop/preview-custom-build";
import FinishCustomShopBuild from "./home/custom-shop/finish-page-custom-shop-";
import Dashboard from "./home/adminview/adminview";
import AdminProducts from "./home/adminview/admin-orders";
import AdminProduct from "./home/adminview/admin-products";
import MyProfile from "./home/myprofile/myprofile";
import EditMyProfile from "./home/myprofile/edit-my-profile";
import MainBlog from "./home/blog/main-blog";
import Blog1 from "./home/blog/blog1";
import Blog2 from "./home/blog/blog2";
import Blog3 from "./home/blog/blog3";
import ChatPage from "./home/mainpage/chat-page";
import LoginPageSuccess from "./home/auth/successfull-login";
import DropmentAdminmain from "./home/dropment-admin/dropmentadmin-main";
import AdminOverview from "./home/adminview/over-view-admin";
import Passwordreset from "./home/passwordreset/password-reset";
import ResetPassword from "./home/passwordreset/password-reset-page";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/cart", element: <Mycart /> },
  { path: "/login", element: <Login /> },
  { path: "/signin", element: <Signin /> },
  { path: "/aboutus", element: <Storeabout /> },
  { path: "/shop-products", element: <Myshopproducts /> },
  { path: "/orders/:id/:shop_id/:title", element: <Orderform /> },
  { path: "/profile", element: <MyProfile /> },
  { path: "/Plansss", element: <Plans /> },
  { path: "/Addshoppage1", element: <Addshopniche /> },
  { path: "/Dropshipping", element: <Dropshipping /> },
  {
    path: "/products/:id/:shop_id",
    element: <Prodsright />,
  },
  { path: "/Addproducts", element: <Addproductstodatabase /> },
  { path: "/Add/temp1/form", element: <Addtemplate1form /> },
  {path: '/mystore1/:shop_id/:shop_name/', element: <Template1website/>},
  {
    path: "/temp1preview",
    element: <Template1websitepreview />,
  },
  {
    path: "/saleschat/:orders_id",
    element: <Saleschat />,
  },
  { path: "/orders/", element: <Order /> },
  { path: "/temp3preview", element: <Template3websitepreview /> },
  { path: "/Add/temp3/form", element: <Addtemplate3form /> },
  {
    path: "/mystore3/:shop_id/:shop_name/",
    element: <Template3website />,
  },
  { path: "/temp2preview", element: <Template2websitepreview /> },
  {path: "/temp5preview", element: <Template5websitepreview /> },
  {path: '/Add/temp5/form', element: <Addtemplate5form/>},
  {path: '/mystore5/:shop_id/:shop_name', element: <Template5website/>},
  {path: '/temp4preview', element: <Template4websitepreview/>},
  {path: '/Plans', element: <SubscriptionFormInner/>},
  {path: '/Add/temp4/form', element: <Addtemplate4form/>},
  {path: '/mystore4/:shop_id/:shop_name', element: <Template4website/>},
  {path: '/temp6preview', element: <Template6websitepreview/>},
  {path: '/Add/temp6/form', element: <Addtemplate6form/>},
  {path: '/mystore6/:shop_id/:shop_name', element: <Template6website/>},
  {path: '/temp2preview', element: <Template2websitepreview/>},
  {path: '/Add/temp2/form', element: <Addtemplate2form/>},
  {path: '/temp3preview', element: <Template3websitepreview/>},
  {path: '/mystore2/:shop_id/:shop_name/', element: <Template2website/>},
  {path: '/search', element: <Search/>},
  {path: '/temp7preview', element: <Template7websitepreview/>},
  {path: '/Add/temp7/form', element: <Addtemplate7form/>},
  {path: '/mystore7/:shop_id/:shop_name/', element: <Template7website/>},
  {path: '/temp8preview', element: <Template8websitepreview/>},
  {path: '/Add/temp8/form', element: <Addtemplate8form/>},
  {path: '/mystore8/:shop_id/:shop_name/', element: <Template8website/>},
  {path: '/user/:user_id', element: <Usersindetails/>},
  {path: '/home', element:  <AdminOverview/>},
  {path: '/chat/:chat_id/:user1/:user2/', element: <ChatMessageapp/>},
  {path: '/sales/report/:shop_id', element: <SalesReportApp/>},
  {path: '/add/product/:shop_id', element: <AddProductsForm/>},
  {path: '/add/BlinkFeed', element: <AddStories/>},
  {path: '/story/:user_id', element: <Stories/>},
  {path: '/custom/shop/build/page1', element:<SelectNoSection/>},
  {path: '/build/:build/step1/:shop_id/:build', element: <Step1build/>},
  {path: '/build/:build/step1/form/:shop_id/:number', element: <NavBarsForm/>},
  {path: '/build/:build/step2/form/:shop_id/:number', element: <HeadersForm/>},
  {path: '/build/:build/step2/:shop_id/:build', element: <Step2build/>},
  {path: '/build/:build/step3/:shop_id/:build', element: <Step3build/>},
  {path: '/build/:build/step3/form/:shop_id/:number', element: <Section1Form/>},
  {path: '/build/:build/step4/:shop_id/:build', element: <Step4build/>},
  {path: '/build/:build/step4/form/:shop_id/:number', element: <Section4Form/>},
  {path: '/build/:build/step5/:shop_id/:build', element: <Step5build/>},
  {path: '/build/:build/step5/form/:shop_id/:number', element: <Section5Form/>},
  {path: '/build/:build/step6/:shop_id/:build', element: <Step6build/>},
  {path: '/build/:build/step6/form/:shop_id/:number', element: <Section6Form/>},
  {path: '/build/:build/step7/:shop_id/:build', element: <Step7build/>},
  {path: '/build/:build/step8/:shop_id/:build', element: <Step8build/>},
  {path: '/build/:build/step9/:shop_id/:build', element: <Step9build/>},
  {path: '/build/:build/step10/:shop_id/:build', element: <Step10build/>},
  {path: '/build/:build/step11/:shop_id/:build', element: <Step11build/>},
  {path: '/build/:build/step12/:shop_id/:build', element: <Step12build/>},
  {path: '/build/:build/footer/:shop_id/:build', element: <StepFooterBuild/>},
  {path: '/build/:build/preview/:shop_id/:build', element: <CustomShopPreview/>},
  {path: '/build/:build/footer/form/:shop_id/:number', element: <Footerform/>},
  {path: '/preview/:build/:shop_id/shop/congratulations', element: <FinishCustomShopBuild/>},
  {path: '/build/:build/:shop_id/form/custom', element: <CustomShopForm/>},
  {path: '/mystore/:shop_id/:shop_name', element: <CustomShop/>},
  {path: '/support', element: <BotApp/>},
  {path: '/admin/:shop_id', element: <Dashboard/>},
  {path: '/admin/Orders/:shop_id', element: <AdminProducts/>},
  {path: '/admin/products/:shop_id', element: <AdminProduct/>},
  {path: '/edit/myprofile', element: <EditMyProfile/>},
  {path: '/blog', element: <MainBlog/>},
  {path: '/chats', element:<ChatPage/>},
  {path: '/login/success', element: <LoginPageSuccess/>},
  {path: '/dropment/admin/for/owner', element: <DropmentAdminmain/>},
  {path: '/forgot-password', element: <Passwordreset/>},
  {path: '/resetpassword', element: <ResetPassword/>},
  {path: '/blog/Unlocking-Success:-Leveraging-Customer-Data-to-Optimize-Your-Dropment-Store', element: <Blog1/>},
  {path: '/blog/Mastering-Social-Media:-Proven-Marketing-Tips-for-Dropment-Shop-Owner', element: <Blog2/>},
  {path: '/blog/The-Power-of-Storytelling:-Crafting-Irresistible-Blinkfeeds-for-Your-Dropment-Store', element: <Blog3/>}
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
