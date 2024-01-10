import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./csb.css";

const SelectNoSection = () => {
  const addShopHandler = (section) => {
    const token = localStorage.getItem("token");

    Axios.post(
      `https://apifordropment.online/add/custom/shop`,
      {
        section: section,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    )
      .then((response) => {
        if (response.status === 200 && response.data.shop_id) {
          const shop_id = response.data.shop_id;

          // Redirect to the shop_id route based on the received shop_id and selected section
          window.location.href = `/build/${section}/preview/${shop_id}`;
        } else {
          console.log("Operation failed or no shop_id received");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="dark-box-container">
    <div className="dark-header-section">
      <Link to="/Addshoppage1" className="dark-go-back-button" style={{textDecoration: 'none'}}>
        Go Back
      </Link>
      <h2 className="dark-section-heading">
        
      </h2>
    </div>
    <div className="dark-section-buttons">
      <button className="dark-section-button" onClick={() => addShopHandler(7)}>
        Custom Shop
      </button>
    </div>
  </div>
  );
};

export default SelectNoSection;