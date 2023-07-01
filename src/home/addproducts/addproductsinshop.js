import React, { Fragment, useState } from "react";
import "./addprods.css";

const Addproductstodatabas = (props) => {
  const [id, setid] = useState("");
  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const [amount, setamount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/addProducts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, price, amount }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Fragment>
      <div className="additemform">
        <div className="txt1212">
          <h2>ADD NEW ITEM</h2>
        </div>
        <div className="backbtn1212">
          <button onClick={props.onClick}>Close</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="lable">
            <label>Product Title</label>
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="Product title"
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />
          </div>
          <br />
          <div className="lable">
            <label>Product Price</label>
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="Product price"
              value={price}
              onChange={(e) => setprice(e.target.value)}
            />
          </div>
          <br />
          <div className="lable">
            <label>Product Quantity</label>
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="Product amount"
              value={amount}
              onChange={(e) => setamount(e.target.value)}
            />
          </div>
          <br />
          <div className="addprodsbtn">
            <button type="submit">Add Product</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Addproductstodatabas;
