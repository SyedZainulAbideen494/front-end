import React, { Fragment, useState, useEffect } from "react";
import Profilenameapp from "./profilename/profilenameapp";
import Profileuniqueidapp from "./profileuniqueid/profileuniqueidapp";
import Profilepicapp from "./profilepic/profilepicapp";
import Fav from "./faviorties/favicon";
import Profileheader from "./profileheader/profileheader";
import Profilepic from "./profilepic/profilepic";
import Shopsinprofile from "../shopsowner/shopsini";
import "./profile.css";
import Shopsapp from "./shopsowned/shopsapp";
import Shopapp from "../shopsowner/shopsapp";
import Addshopform1 from "../addnewshop/addshopform1";
import Addshopimg from "../addnewshop/addnewshopadding";
import FashionShopapp from "../fashionstore/fashionshopapp.js";
import Template3website from "../template3/template3website";
import Template3app from "../template3/template3app";
import { useNavigate } from "react-router-dom";

const Profile = (props) => {
  return (
    <Fragment>
      <div className="profileheaderinmyprofilesection">
        <Profileheader />
      </div>
      <div className="profilepic">
        <Profilepicapp />
      </div>
      <div className="profilename">
        <Profilenameapp />
      </div>
      <div className="uniqueid">
        <Profileuniqueidapp />
      </div>
      <div className="shops">
        <div className="shopownertxtprofile">
          <hr />
          <h2>Shops Owned</h2>
          <hr />
        </div>
        <Shopapp />
        <Template3app />
        <Addshopimg />
      </div>
    </Fragment>
  );
};

export default Profile;
