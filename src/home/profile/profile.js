import React, { Fragment, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import ProfileHeader from "./profileheader/profileheader";
import ProfilePicApp from "./profilepic/profilepicapp";
import ProfileNameApp from "./profilename/profilenameapp";
import ProfileUniqueIdApp from "./profileuniqueid/profileuniqueidapp";
import AddShopImg from "../addnewshop/addnewshopadding";
import Template1App from "../template1/template1app";


const Profile = (props) => {
  return (
    <Fragment>
      <div className="profileheaderinmyprofilesection">
        <ProfileHeader />
      </div>
      <div className="profilepic">
        <ProfilePicApp />
      </div>
      <div className="profilename">
        <ProfileNameApp />
      </div>
      <div className="uniqueid">
        <ProfileUniqueIdApp />
      </div>
      <div className="shops">
        <div className="shopownertxtprofile">
          <hr />
          <h2>Shops Owned</h2>
          <AddShopImg />
          <hr />
        </div>
        <div className="customshop-in-profile">
        </div>
        <Template1App />
      </div>
    </Fragment>
  );
};

export default Profile;