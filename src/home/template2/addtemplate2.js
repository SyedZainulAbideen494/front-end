import React, { Fragment, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Template2websitepreview from "./template2websitepreview";

const Addtemplate1form = (props) => {
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
  const [temp2, settemp2]= useState('')
  const [insta, setinsta] = useState("")
  const [salestext, setsalestext] = useState('')
  const [uniqueIdentifier, setUniqueIdentifier] = useState('');
  const addshophandler = () => {
    const token = localStorage.getItem("token");
    Axios.post(
      "https://apifordropment.online/addShops/template2",
      {
        shop_name: shop_name,
        shop_owner: shop_owner,
        shop_tagline: shop_tagline,
        shop_blockhead1: shop_blockhead1,
        shop_blockhead2: shop_blockhead2,
        shop_blockhead3: shop_blockhead3,
        shop_block1: shop_block1,
        shop_block2: shop_block2,
        shop_block3: shop_block3,
        shop_keyhead1: shop_keyhead1,
        shop_key1: shop_key1,
        shop_keyhead2: shop_keyhead2,
        shop_key2: shop_key2,
        shop_keyhead3: shop_keyhead3,
        shop_key3: shop_key3,
        shop_email: shop_email,
        shop_phone: shop_phone,
        insta: insta,
        salestext: salestext,
        temp2: 'temp2',
        uniqueIdentifier: uniqueIdentifier
      },
      {
        headers: {
          Authorization: token,
        },
      }
    )
      .then(response => {
        window.location.href = '/profile'
        console.log(response.data); // Output the success message
      })
      .catch(error => {
        // Handle error, e.g., show an error message
        console.error('Error adding shop:', error.response.data); // Output the error message
      });
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
            <h3>Enter instagram Id</h3>
          </label>
          <br />
          <input
            required
            placeholder="Enter instagram Id"
            onChange={(e) => {
              setinsta(e.target.value);
            }}
          />
        </div>
        <div className="inp">
          <label>
            <h3>Hero section text 1</h3>
          </label>
          <br />
          <input
            required
            placeholder="Enter sales text"
            onChange={(e) => {
              setsalestext(e.target.value);
            }}
          />
        </div>
        <div className="inp">
          <label>
            <h3>Hero section text 2</h3>
          </label>
          <br />
          <input
            required
            placeholder="Enter Tagling"
            onChange={(e) => {
              setshop_tagline(e.target.value);
            }}
          />
        </div>
        <div className="inp">
          <label>
            <h3>Catogary 1</h3>
          </label>
          <br />
          <input
            required
            placeholder="Catogary 1"
            onChange={(e) => {
              setshp_keyhead1(e.target.value);
            }}
          />
        </div>
      
        <div className="inp">
          <label>
            <h3>Catogary 2</h3>
          </label>
          <br />
          <input
            required
            placeholder="Catogary 2"
            onChange={(e) => {
              setshop_keyhead2(e.target.value);
            }}
          />
        </div>
       
        <div className="inp">
          <label>
            <h3>Catogary 3</h3>
          </label>
          <br />
          <input
            required
            placeholder="Catogary 3"
            onChange={(e) => {
              setshop_keyhead3(e.target.value);
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
        <hr />
        <div className="addnewstorebtn">
          <button onClick={addshophandler}>Add new store</button>
        </div>
      </div>
      <Template2websitepreview />
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

export default Addtemplate1form;