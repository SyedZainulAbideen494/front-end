import React, { useState } from "react";
import axios from "axios";

const Editstoreform = () => {
  const [shop_name, setshop_name] = useState([]);
  const [shop_owner, setshop_owner] = useState([]);
  const [shop_about, setshop_about] = useState([]);
  const [shop_prods, setshop_prods] = useState([]);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put("http://localhost:8080/updateshop1", {
        shop_name: shop_name,
        shop_owner: shop_owner,
        shop_about: shop_about,
        shop_prods: shop_prods,
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
          value={shop_name}
          onChange={(e) => setshop_name(e.target.value)}
          placeholder="Enter title"
        />
        <input
          type="text"
          value={shop_owner}
          onChange={(e) => setshop_owner(e.target.value)}
          placeholder="price"
        />
        <input
          type="text"
          value={shop_about}
          onChange={(e) => setshop_about(e.target.value)}
          placeholder="amount"
        />
        <input
          type="text"
          value={shop_prods}
          onChange={(e) => setshop_prods(e.target.value)}
          placeholder="amount"
        />
        <button type="submit">Update</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Editstoreform;
