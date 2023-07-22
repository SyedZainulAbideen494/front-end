import React, { Fragment, useState, useRef } from "react";
import "./addshop.css";
import { Link } from "react-router-dom";
import Axios from "axios";

const Addshopform1 = (props) => {
  const [shop_name, setname] = useState("");
  const [shop_owner, setowner] = useState("");
  const [shop_about, setstoredetails] = useState("");
  const [shop_prods, setprodsdetails] = useState("");

  const token = localStorage.getItem("token");

  const addshophandler = () => {
    Axios.post(
      "http://154.41.229.94/addShops",
      {
        shop_name: shop_name,
        shop_owner: shop_owner,
        shop_about: shop_about,
        shop_prods: shop_prods,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  };

  return (
    <Fragment>
      <div className="form1">
        <div className="shopnameform">
          <div className="backbtn">
            <Link to="/">
              <button>Back</button>
            </Link>
          </div>
          <div className="formtxthead">
            <h4>Add a new shop</h4>
          </div>
          <div className="table">
            <label>
              <p>Enter Shop Name</p>
            </label>
            <br />
            <div className="inpupt">
              <input
                required
                placeholder="Enter Shop Name"
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="table">
          <label>
            <p>Enter owner/owners Name/Names</p>
          </label>
          <br />
          <div className="inpupt"></div>
          <input
            placeholder="Enter owner's name"
            required
            onChange={(e) => {
              setowner(e.target.value);
            }}
          />
        </div>
        <div className="table">
          <label>
            <p>Enter Some details about your store</p>
          </label>
          <br />
          <div className="inpupt">
            <input
              placeholder="Enter Some details about your store"
              required
              onChange={(e) => {
                setstoredetails(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="table">
          <label>
            <p>Enter some details about ehat you sell on your store</p>
          </label>
          <br />
          <div className="inpupt">
            <input
              placeholder="Enter some details about ehat you sell on your store"
              required
              onChange={(e) => {
                setprodsdetails(e.target.value);
              }}
            />
          </div>
        </div>
        <hr />
        <div className="addnewstorebtn">
          <button onClick={addshophandler}>Add new store</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Addshopform1;
