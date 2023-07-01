import React, { Fragment, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Addfashionshopform = (props) => {
  const [shop_name, setname] = useState("");
  const [shop_owner, setowner] = useState("");
  const [shop_abouthead, setshop_abouthead] = useState("");
  const [shop_about, setstoredetails] = useState("");
  const [shop_tagline, setshop_tagline] = useState("");
  const [shop_blockhead2, setshop_blockheading2] = useState("");
  const [shop_blockhead3, setshop_blockheading3] = useState("");
  const [shop_block2, setshop_block2] = useState("");
  const [shop_block3, setshop_block3] = useState("");
  const [image, setimage] = useState("");

  const addShopHandler = () => {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("image", image);
    formData.append("shop_name", shop_name);
    formData.append("shop_owner", shop_owner);
    formData.append("shop_abouthead", shop_abouthead);
    formData.append("shop_about", shop_about);
    formData.append("shop_tagline", shop_tagline);
    formData.append("shop_blockhead2", shop_blockhead2);
    formData.append("shop_blockhead3", shop_blockhead3);
    formData.append("shop_block2", shop_block2);
    formData.append("shop_block3", shop_block3);

    Axios.post("http://localhost:8080/addShops/Fashion", formData, {
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response.data);
        // Handle success if needed
      })
      .catch((error) => {
        console.error(error);
        // Handle error if needed
      });
  };
  const handleImageChange = (e) => {
    setimage(e.target.files[0]);
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
            <h3>Enter a heading for detail block number 1</h3>
          </label>
          <br />
          <input
            required
            placeholder="Enter a heading for detail block number 1"
            onChange={(e) => {
              setshop_abouthead(e.target.value);
            }}
          />
        </div>
        <div className="inp">
          <label>
            <h3>Enter details about your shop for block 1</h3>
          </label>
          <br />
          <textarea
            required
            rows="4"
            cols="50"
            placeholder="Enter details about your shop for block 1"
            onChange={(e) => {
              setstoredetails(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="inp">
          <label>
            <h3>Enter shop tagline</h3>
          </label>
          <br />
          <input
            required
            placeholder="Enter shop tagline"
            onChange={(e) => {
              setshop_tagline(e.target.value);
            }}
          />
        </div>
        <div className="inp">
          <label>
            <h3>Enter a heading for detail block number 2</h3>
          </label>
          <br />
          <input
            required
            placeholder="Enter a heading for detail block number 2"
            onChange={(e) => {
              setshop_blockheading2(e.target.value);
            }}
          />
        </div>
        <div className="inp">
          <label>
            <h3>Enter details for block 2</h3>
          </label>
          <br />
          <textarea
            required
            rows="4"
            cols="50"
            placeholder="Enter details for block 2"
            onChange={(e) => {
              setshop_block2(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="inp">
          <label>
            <h3>Enter a heading for detail block number 3</h3>
          </label>
          <br />
          <input
            required
            placeholder="Enter a heading for detail block number 3"
            onChange={(e) => {
              setshop_blockheading3(e.target.value);
            }}
          />
        </div>
        <div className="inp">
          <label>
            <h3>Enter details for block 3</h3>
          </label>
          <br />
          <textarea
            required
            rows="4"
            cols="50"
            placeholder="Enter details for block 3"
            onChange={(e) => {
              setshop_block3(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="inp">
          <label>
            <h3>Upload shop logo</h3>
          </label>
          <br />
          <input type="file" onChange={handleImageChange} />
        </div>
        <button className="submitbtn" onClick={addShopHandler}>
          Submit
        </button>
      </div>
    </Fragment>
  );
};

export default Addfashionshopform;
