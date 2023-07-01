import React, { useState } from "react";
import axios from "axios";

const Edititemform = () => {
  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const [amount, setamount] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put("http://localhost:8080/updateprods", {
        title: title,
        price: price,
        amount: amount,
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage("Error updating data.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          placeholder="Enter title"
        />
        <input
          type="text"
          value={price}
          onChange={(e) => setprice(e.target.value)}
          placeholder="price"
        />
        <input
          type="text"
          value={amount}
          onChange={(e) => setamount(e.target.value)}
          placeholder="amount"
        />
        <button type="submit">Update</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Edititemform;
