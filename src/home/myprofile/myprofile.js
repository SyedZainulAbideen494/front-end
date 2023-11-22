import React,{Fragment, useCallback, useState, useEffect} from "react";
import dropment from '../header/images/drop2_logo.png'
import './myprofile.css'
import { Link } from "react-router-dom";
import Template1app from "../template1/template1app";

const MyProfile = () => {
    const [img, setimage] = useState([]);
    const [loading, setloading] = useState(false);
  
    const fetchimagehandler = useCallback(async () => {
      setloading(true);
      const token = localStorage.getItem("token");
      setloading(true);
      const response = await fetch("http://localhost:8080/users/", {
        headers: {
          Authorization: token,
        },
      });
      const data = await response.json();
      const transformeduser = data.user.map((userdata) => {
        return {
          profilePic: `http://localhost:8080/images/${userdata.porfilepic}`,
          first_name: userdata.first_name,
          last_name: userdata.last_name,
          unique_id: userdata.unique_id,
          occupation: userdata.occupation,
          bio: userdata.bio,
          user_id: userdata.user_id        
        };
      });
      setimage(transformeduser);
      setloading(false);
    }, []);
  
    useEffect(() => {
      fetchimagehandler();
    }, []);
    const [followerCount, setFollowerCount] = useState(0);

    useEffect(() => {
      async function fetchFollowerCount() {
        try {
          const response = await fetch(`http://localhost:8080/follower-count/${img[0]?.user_id}`);
          if (response.ok) {
            const data = await response.json();
            setFollowerCount(data.followerCount);
          } else {
            throw new Error('Failed to fetch follower count');
          }
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchFollowerCount();
    }, []);
      return (
        <div className="profile-container">
        {/* Header Section */}
        <div className="header">
          <Link to="/edit/myprofile">
          <button className="edit-button">Edit</button>
          </Link>
          <Link to='/Addshoppage1'>
          <button className="add-shop-button">Add Shop</button>
          </Link>
          {/* Other buttons or elements */}
        </div>
  
        {/* Main Profile Section */}
        <div className="main-section">
          <div className="profile-info">
            <img src={img[0]?.profilePic} alt="Profile" className="profile-image" />
            <div className="profile-details">
              <h2>{`${img[0]?.first_name} ${img[0]?.last_name}`}</h2>
              <p>ID: {img[0]?.unique_id}</p>
              <p>Followers: {followerCount}</p>
              <p>Bio: {img[0]?.bio}</p>
              {/* Additional necessary details can be displayed here */}
            </div>
          </div>
  
          {/* Shops Section */}
          <div className="shops">
            <h3>All Shops</h3>
            <div className="shop-list">
              <Template1app/>
            </div>
          </div>
        </div>
      </div>
      );
    };

export default MyProfile