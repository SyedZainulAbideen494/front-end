import React, { Fragment, useState, useCallback, useEffect } from "react";
import "./addshop.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import { FaLock } from 'react-icons/fa';


const Addshopniche = () => {
  const [img, setimage] = useState([]);
  const [loading, setloading] = useState(false);
  const [followerCount, setFollowerCount] = useState(0);
  const addCustomShopHandler = () => {
    const token = localStorage.getItem('token');
    Axios.post(
      "https://apifordropment.online/add/custom/shop",
      null,  // Request body should be null or an empty object if there's no data to send
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then((response) => {
      window.location.href = `/profile`;
    })
    .catch((error) => {
      // Handle errors here
    });
  };

  const fetchimagehandler = useCallback(async () => {
    setloading(true);
    const token = localStorage.getItem("token");
    setloading(true);
    const response = await fetch("https://apifordropment.online/users/", {
      headers: {
        Authorization: token,
      },
    });
    const data = await response.json();
    const transformeduser = data.user.map((userdata) => {
      return {
        profilePic: `https://apifordropment.online/images/${userdata.porfilepic}`,
        first_name: userdata.first_name,
        last_name: userdata.last_name,
        unique_id: userdata.unique_id,
        occupation: userdata.occupation,
        bio: userdata.bio,
        user_id: userdata.user_id,
      };
    });
    setimage(transformeduser);
    setloading(false);
  }, []);

  useEffect(() => {
    fetchimagehandler();
  }, []);
  return (
 <div className="container-shop-builder">
     <div className="header-shop-builder">
  <div className="headerButtons-shop-builder" style={{textAlign: 'center'}}>
    <Link to="/profile" style={{ textDecoration: 'none' }}>
      <button className="navButton-shop-builder">Profile</button>
    </Link>
    <Link to="/home" style={{ textDecoration: 'none' }}>
      <button className="navButton-shop-builder">Home</button>
    </Link>
  </div>
</div>

      <div className="content-shop-builder">
        <div className="quote-shop-builder">
          <p className="quoteText-shop-builder">Start Your journey {img[0]?.first_name} {img[0]?.last_name}</p>
        </div>
        
        <div className="templates-shop-builder">
          <div className="templat-shop-buildere">
            <Link to="/custom/shop/build/page1" style={{ textDecoration: 'none' }}>
              <button className="setupButton-shop-builder">Setup Shop</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addshopniche;