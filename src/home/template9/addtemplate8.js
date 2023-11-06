import React, { Fragment, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import './template8.css'

const Addtemplate9form = (props) => {
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
  const [temp8, settemp8] = useState('')
  const [salestext, setsalestext] = useState('')

  const addshophandler = () => {
    const token = localStorage.getItem("token");
    Axios.post(
      "http://localhost:8080/addShops/template8",
      {
        shop_name: shop_name,
        shop_owner: shop_owner,
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
        temp8: temp8,
        salestext: salestext,
        shop_tagline: shop_tagline
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
            <h3>Enter owner name</h3>
          </label>
          <br />
          <input
            required
            placeholder="Enter owner name"
            onChange={(e) => {
              setowner(e.target.value);
            }}
          />
        </div>
        <div className="inp">
          <label>
            <h3>text 7</h3>
          </label>
          <br />
          <input
            required
            placeholder="Enter text 7"
            onChange={(e) => {
              setshp_keyhead1(e.target.value);
            }}
          />
        </div>
        <div className="inp">
          <label>
            <h3>Text 8</h3>
          </label>
          <br />
          <input
            required
            placeholder="Enter text 8"
            onChange={(e) => {
              setshop_key1(e.target.value);
            }}
          />
          </div>
          <div className="inp">
          <label>
            <h3>text 9</h3>
          </label>
          <br />
          <input
            required
            placeholder="Enter text 9"
            onChange={(e) => {
              setshop_keyhead2(e.target.value);
            }}
          />
        </div>
        <div className="inp">
          <label>
            <h3>Text 10</h3>
          </label>
          <br />
          <input
            required
            placeholder="Text 10"
            onChange={(e) => {
              setshop_key2(e.target.value);
            }}
          />
          </div>
          <div className="inp">
          <label>
            <h3>text 11</h3>
          </label>
          <br />
          <input
            required
            placeholder="text 11"
            onChange={(e) => {
              setshop_keyhead3(e.target.value);
            }}
          />
        </div>
        <div className="inp">
          <label>
            <h3>Text 12</h3>
          </label>
          <br />
          <input
            required
            placeholder="Text 12"
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
            <h3>text 3</h3>
          </label>
          <br />
          <input
            required
            placeholder="text 3"
            onChange={(e) => {
              setshop_blockheading1(e.target.value);
            }}
          />
        </div>
        <div className="inp">
          <label>
            <h3>Text 4</h3>
          </label>
          <br />
          <input
            required
            placeholder="Text 4"
            onChange={(e) => {
              setshop_block1(e.target.value);
            }}
          />
          </div>
          <div className="inp">
          <label>
            <h3>Text 1</h3>
          </label>
          <br />
          <input
            required
            placeholder="Text 4"
            onChange={(e) => {
              setsalestext(e.target.value);
            }}
          />
          </div>
          <div className="inp">
          <label>
            <h3>Text 2</h3>
          </label>
          <br />
          <input
            required
            placeholder="Text 2"
            onChange={(e) => {
              setshop_tagline(e.target.value);
            }}
          />
        </div>
        <div className="inp">
          <label>
            <h3>Text 5</h3>
          </label>
          <br />
          <input
            required
            placeholder="Text 5"
            onChange={(e) => {
              setshop_blockheading2(e.target.value);
            }}
          />
        </div>
        <div className="inp">
          <label>
            <h3>text 6</h3>
          </label>
          <br />
          <input
            required
            placeholder="text 6"
            onChange={(e) => {
              setshop_block2(e.target.value);
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
        <div className="inp">
          <label>
            <h3>Enter Any text to confirm</h3>
          </label>
          <br />
          <input
            required
            placeholder="Enter Any text to confirm"
            onChange={(e) => {
              settemp8(e.target.value);
            }}
          />
        </div>
        <hr />
        <div className="addnewstorebtn">
          <button onClick={addshophandler}>Add new store</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Addtemplate9form;
