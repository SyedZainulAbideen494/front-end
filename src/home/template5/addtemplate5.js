import React, { Fragment, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import './template5.css'
import Template5websitepreview from "./template5websitepreview";

const Addtemplate5form = (props) => {
  const [shop_name, setname] = useState("");
  const [shop_owner, setowner] = useState("");
  const [shop_tagline, setshop_tagline] = useState("");
  const [shop_blockhead2, setshop_blockheading2] = useState("");
  const [shop_blockhead3, setshop_blockheading3] = useState("");
  const [shop_blockhead1, setshop_blockheading1] = useState("");
  const [shop_block1, setshop_block1] = useState("");
  const [shop_block2, setshop_block2] = useState("");
  const [shop_block3, setshop_block3] = useState("");
  const [shop_key1, setshop_key1] = useState("");
  const [shop_keyhead1, setshp_keyhead1] = useState("");
  const [shop_key2, setshop_key2] = useState("");
  const [shop_keyhead2, setshop_keyhead2] = useState("");
  const [shop_key3, setshop_key3] = useState("");
  const [shop_keyhead3, setshop_keyhead3] = useState("");
  const [shop_email, setshop_email] = useState("");
  const [shop_phone, setshop_phone] = useState("");
  const [insta, setinsta] = useState("")
  const [temp5, settemp5] = useState('')
  const [uniqueIdentifier, setUniqueIdentifier] = useState('');

  const addshophandler = () => {
    const token = localStorage.getItem("token");
    Axios.post(
      "https://apifordropment.online/addShops/template5",
      {
        shop_name,
        shop_owner,
        shop_blockhead1,
        shop_blockhead2,
        shop_blockhead3,
        shop_block1,
        shop_block2,
        shop_block3,
        shop_keyhead1,
        shop_key1,
        shop_keyhead2,
        shop_key2,
        shop_keyhead3,
        shop_key3,
        shop_email,
        shop_phone,
        insta,
        temp5, // removed quotes to pass variable instead of string 'temp5'
        uniqueIdentifier,
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
    <div className="form1 dark-theme">
      <div className="backbtn">
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
      <div className="formtxthead">
        <h2>Add a new shop</h2>
      </div>
        <div className="inp">
          <label>
            <h3>Enter Shop Name</h3>
          </label>
          <br />
          <input
            required
            placeholder="Enter Shop Name"
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </div>
        <div className="inp">
          <label>
            <h3>Enter Shop domain (unique)</h3>
          </label>
          <br />
          <input
            required
            placeholder="Enter Shop domain (unique)"
            onChange={(e) => {
              setUniqueIdentifier(e.target.value);
            }}
          />
        </div>
        <div className="inp">
          <label>
            <h3>Enter Shop key point heading 1</h3>
          </label>
          <br />
          <input
            required
            placeholder="Enter Shop key point heading 1"
            onChange={(e) => {
              setshp_keyhead1(e.target.value);
            }}
          />
        </div>
        <div className="inp">
          <label>
            <h3>Enter Shop key point 1</h3>
          </label>
          <br />
          <input
            required
            placeholder="Enter Shop key point 1"
            onChange={(e) => {
              setshop_key1(e.target.value);
            }}
          />
        </div>
        <div className="inp">
          <label>
            <h3>Enter Shop key point heading 2</h3>
          </label>
          <br />
          <input
            required
            placeholder="Enter Shop key point heading 2"
            onChange={(e) => {
              setshop_keyhead2(e.target.value);
            }}
          />
        </div>
        <div className="inp">
          <label>
            <h3>Enter Shop key point 2</h3>
          </label>
          <br />
          <input
            required
            placeholder="Enter Shop key point 2"
            onChange={(e) => {
              setshop_key2(e.target.value);
            }}
          />
        </div>
        <div className="inp">
          <label>
            <h3>Enter Shop key point heading 3</h3>
          </label>
          <br />
          <input
            required
            placeholder="Enter Shop key point heading 3"
            onChange={(e) => {
              setshp_keyhead1(e.target.value);
            }}
          />
        </div>
        <div className="inp">
          <label>
            <h3>Enter Shop key point 3</h3>
          </label>
          <br />
          <input
            required
            placeholder="Enter Shop key point 3"
            onChange={(e) => {
              setshop_key3(e.target.value);
            }}
          />
        </div>
        <div className="inp">
          <label>
            <h3>Enter Shop email</h3>
          </label>
          <br />
          <input
            required
            placeholder="Enter Shop email"
            onChange={(e) => {
              setshop_email(e.target.value);
            }}
          />
        </div>
        <div className="inp">
          <label>
            <h3>Enter Shop phone number</h3>
          </label>
          <br />
          <input
            required
            placeholder="Enter Shop phone number"
            onChange={(e) => {
              setshop_phone(e.target.value);
            }}
          />
        </div>
        <div className="inp">
          <label>
            <h3>Enter Shop about block 1</h3>
          </label>
          <br />
          <input
            required
            placeholder="Enter Shop about block 1"
            onChange={(e) => {
              setshop_block1(e.target.value);
            }}
          />
        </div>
        <div className="inp">
          <label>
            <h3>Enter Your instagram ID</h3>
          </label>
          <br />
          <input
            required
            placeholder="Enter Your instagram ID"
            onChange={(e) => {
              setinsta(e.target.value);
            }}
          />
        </div>
        <hr />
        <div className="addnewstorebtn">
          <button onClick={addshophandler}>Add new store</button>
        </div>
      </div>
      <Template5websitepreview />
      <style>
        {`
          /* CSS for dark theme */
          .dark-theme {
            background-color: #1e1e1e;
            color: #fff;
            padding: 20px;
            /* Add more styles as needed */
          }
          .dark-theme input {
            background-color: #333;
            color: #fff;
            border: 1px solid #555;
            margin-bottom: 10px;
            padding: 8px;
            width: 100%;
            box-sizing: border-box;
            /* Add more styles as needed */
          }
          /* Add more specific styles for labels, buttons, etc. */
        `}
      </style>
    </Fragment>
  );
};

export default Addtemplate5form;
