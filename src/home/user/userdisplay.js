import React, { useState, useEffect, useCallback } from 'react';
import './user.css'; // Import the CSS file
import { Link, useParams } from 'react-router-dom'; // Import Link from React Router
import { Axios } from 'axios';

const Userdisplay = (props) => {
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [followerCount, setFollowerCount] = useState(0);
  const [shopsCount, setShopsCount] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false);
  const params = useParams();
  const [name2, setName2] = useState([]);
  const [user, setUser] = useState([])

  const fetchuserdetails = useCallback(async () => {
    setLoading(true);
    const response = await fetch("https://apifordropment.online/shop/main/user/details/profile", {
      headers: {
        Authorization: props.user_id,
      },
    });
    const data = await response.json();
    const transformedItems = data.shops.map((itemsdata) => {
      return {
        profilepic: `https://apifordropment.online/images/${itemsdata.porfilepic}`,
        first_name: itemsdata.first_name,
        last_name: itemsdata.last_name,
        unique_id: itemsdata.unique_id,
        bio: itemsdata.bio
      };
    });
    setUserInfo(transformedItems);
    setLoading(false);
  }, [props.user_id]);

  useEffect(() => {
    fetchuserdetails();
  }, [fetchuserdetails]);

  useEffect(() => {
    const fetchFollowerCount = async () => {
      try {
        const response = await fetch(`https://apifordropment.online/follower-count/${props.user_id}`);
        const data = await response.json();
        setFollowerCount(data.followerCount);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchFollowerCount();
  }, [props.user_id]);

  

  useEffect(() => {
    const fetchFollowerCount = async () => {
      try {
        const response = await fetch(`https://apifordropment.online/shops-count/${props.user_id}`);
        const data = await response.json();
        setShopsCount(data.followerCount);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchFollowerCount();
  }, [props.user_id]);


  const toggleFollow = async () => {
    const token = localStorage.getItem("token");
    try {
      // Send a request to your backend to follow the user
      await Axios.post(
        "https://apifordropment.online/followdis",
        {
          user_id: props.user_id,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
  
      // After following, set the isFollowing state to true
      setIsFollowing(true);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleUnfollow = async () => {
    const token = localStorage.getItem("token");
    try {
      // Send a request to your backend to unfollow the user
      await Axios.post(
        "https://apifordropment.online/unfollowdis",
        {
          user_id: props.user_id,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
  
      // After unfollowing, set the isFollowing state to false
      setIsFollowing(false);
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    const fetchUser2sHandler = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          "https://apifordropment.online/user/id/editbtndiaplay2",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        const data = await response.json();
        const transformedUser2 = data.user.map((userdata) => {
          return {
            user_id: userdata.user_id,
          };
        });
        setName2(transformedUser2);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchUser2sHandler();
  }, []);
  
  const followedId = props.user_id;
  const followerId = name2[0]?.user_id;
  
  useEffect(() => {
    // Fetch data from the server to check if the profile is following
    fetch(`https://apifordropment.online/check-follow/${followerId}/${followedId}`)
      .then((response) => response.json())
      .then((data) => setIsFollowing(data.isFollowing))
      .catch((error) => console.error('Error:', error));
  }, [followerId, followedId]);


  return (
    <div className="user-card">
    {loading ? (
      'Loading...'
    ) : (
      <div className="user-post">
        <div className="user-post-header">
          <div className="user-post-image">
            <img src={userInfo[0]?.profilepic} alt="User Profile" className="user-profile-pic" />
          </div>
          <div className="user-post-details">
            <Link to={`/user/${props.user_id}`} className="user-post-username">
              {userInfo[0]?.first_name} {userInfo[0]?.last_name}
            </Link>
            <p className="user-unique-id">{userInfo[0]?.unique_id}</p>
          </div>
        </div>
        <p className="user-bio">{userInfo[0]?.bio}</p>
        <div className="user-post-actions">
          <Link to={`/user/${props.user_id}`} className="profile-link-button">
            Visit Profile
          </Link>
        </div>
        <div className="user-post-footer">
          <div className="user-post-likes">
            <span className="heart-icon">Links</span> {followerCount}
          </div>
          <div className="user-post-comments">
            <span className="comment-icon">Shop</span> {shopsCount}
          </div>
        </div>
      </div>
    )}
  </div>
  );
};

export default Userdisplay;