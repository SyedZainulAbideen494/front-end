import React, { Fragment, useState, useCallback, useReducer, useEffect } from "react"
import './template1.css'
import Axios from 'axios';
import { useParams, Link } from "react-router-dom";

const Template1inmain = (props) => {
  const [items, setItems] = useState([]);
const [loading, setLoading] = useState(false);
const [isFollowing, setIsFollowing] = useState(false);
const params = useParams();
const [name2, setName2] = useState([]);
const [followerCount, setFollowerCount] = useState(0);
const [user, setUser] = useState([])
const [userInfo, setUserInfo] = useState([])
const [averageRating, setAverageRating] = useState(null);

const shop_id = props.shop_id


useEffect(() => {
  const fetchAverageRating = async () => {
    try {
      const response = await Axios.get(`http://localhost:8080/api/average-rating/${shop_id}`);
      const averageRating = response.data.averageRating.toFixed(1); // Format to one decimal place
      setAverageRating(averageRating);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  fetchAverageRating();
}, [shop_id]);

const toggleFollow = async () => {
  const token = localStorage.getItem("token");
  try {
    await Axios.post(
      "http://localhost:8080/followpage",
      {
        shop_id: props.shop_id,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    // After following, check the updated follow status
    const response = await fetch(`http://localhost:8080/check-followpage/${followerId}/${followedId}`);
    const data = await response.json();
    setIsFollowing(data.isFollowing);
  } catch (error) {
    console.error(error);
  }
};

const toggleunFollow = async () => {
  const token = localStorage.getItem("token");
  try {
    await Axios.post(
      "http://localhost:8080/unfollowpage",
      {
        id: props.shop_id,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    // After unfollowing, check the updated follow status
    const response = await fetch(`http://localhost:8080/check-followpage/${followerId}/${followedId}`);
    const data = await response.json();
    setIsFollowing(data.isFollowing);
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
        "http://localhost:8080/user/id/editbtndiaplay2",
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

const followedId = props.shop_id;
const followerId = name2[0]?.user_id;

useEffect(() => {
  // Fetch data from the server to check if the profile is following
  fetch(`http://localhost:8080/check-followpage/${followerId}/${followedId}`)
    .then((response) => response.json())
    .then((data) => setIsFollowing(data.isFollowing))
    .catch((error) => console.error('Error:', error));
}, [followerId, followedId]);


  const fetchprodshandler = useCallback(async () => {
    setLoading(true);
    const response = await fetch("http://localhost:8080/main/shop/logo", {
      headers: {
        Authorization: props.shop_id,
      },
    });
    const data = await response.json();
    const transformedItems = data.shops.map((itemsdata) => {
      return {
        logo: `http://localhost:8080/images/${itemsdata.logo}`,
      };
    });
    setItems(transformedItems);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchprodshandler();
  }, []);

  const Linkno = (props) => {
    if (props.temp1 !== null) {
      return "/mystore1";
    } else if (props.temp2 !== null) {
      return "/mystore2";
    } else if (props.temp3 !== null) {
      return "/mystore3";
    } else if (props.temp4 !== null) {
      return "/mystore4";
    } else if (props.temp5 !== null) {
      return "/mystore5";
    } else if (props.temp6 !== null) {
      return "/mystore6";
    } else if (props.temp7 !== null) {
      return "/mystore7";
    } 
    else if (props.temp8 !== null) {
      return "/mystore8";
    } 
  };

  const fetchuserdetails = useCallback(async () => {
    setLoading(true);
    const response = await fetch("http://localhost:8080/shop/main/user/details/profile", {
      headers: {
        Authorization: props.user_id,
      },
    });
    const data = await response.json();
    const transformedItems = data.shops.map((itemsdata) => {
      return {
        porfilepic: `http://localhost:8080/images/${itemsdata.porfilepic}`,
        first_name: itemsdata.first_name,
        last_name: itemsdata.last_name
      };
    });
    setUserInfo(transformedItems);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchuserdetails();
  }, []);


  useEffect(() => {
    const fetchFollowerCount = async () => {
      try {
        const response = await fetch(`http://localhost:8080/products-count/${shop_id}`);
        const data = await response.json();
        setFollowerCount(data.followerCount);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchFollowerCount();
  }, [params.user_id]);
  

  return (
    <Fragment>
   <div className="shop-container">
      <div className="shop-card">
        <div className="shop-header">
          <img src={items[0]?.logo} alt={props.shop_name} className="shop-logo" />
          <div className="shop-header-details">
          <Link
        to={`${Linkno(props)}/${props.shop_id}/${props.shop_name}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
              {props.shop_name}
            </Link>
            <Link to={`/user/${props.user_id}`}  style={{ textDecoration: 'none', color: 'black' }}> 
            <span className="shop-owner">Shop by {userInfo[0]?.first_name}</span>
            </Link>
          </div>
        </div>
        <div className="shop-image">
          <img src={items[0]?.image} alt={items.shop_name} />
        </div>
        <div className="shop-actions">
          <button className={`follow-button ${isFollowing ? 'following' : ''}`} onClick={isFollowing ? toggleunFollow : toggleFollow}>
            {isFollowing ? 'Following' : 'Follow'}
          </button>
        </div>
        <div className="shop-footer">
          <div className="shop-rating">
            <span className="star-icon">⭐</span>
            {averageRating}
          </div>
          <div className="shop-follower-count">{followerCount} Products</div>
        </div>
      </div>
    </div>
  </Fragment>
  );
}
export default Template1inmain;