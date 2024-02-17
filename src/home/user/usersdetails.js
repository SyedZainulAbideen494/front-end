import React, { useState, useEffect, Fragment, useCallback, } from 'react';
import { Link, useParams, } from 'react-router-dom';
import Axios from 'axios';
import './Userdisplay.css'
import pic from '../header/images/profiledef.png'
import Template1userapp from './template1/template1app';
import Template2userapp from './template2/template2app';
import Template3userapp from './template3/template3app';
import Template4userapp from './template4/template4app';
import Template5userapp from './template5/template5app';
import Template6userapp from './template5 copy/template6app';
import Template7userapp from './template7/template5app';
import Template8userapp from './template8/template8app';
import { Spinner } from 'react-bootstrap';
import Spinnerui from '../UI/spinner';

function UserProfile() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const [name2, setName2] = useState([]);
  const [followerCount, setFollowerCount] = useState(0);
  const [user, setUser] = useState([])
  const [userInfo, setUserInfo] = useState([])

  const toggleFollow = async () => {
    const token = localStorage.getItem("token");
    try {
      await Axios.post(
        "https://apifordropment.online/follow",
        {
          id: params.user_id,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      // After following, check the updated follow status
      const response = await fetch(`https://apifordropment.online/check-follow/${followerId}/${followedId}`);
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
        "https://apifordropment.online/unfollow",
        {
          id: params.user_id,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      // After unfollowing, check the updated follow status
      const response = await fetch(`https://apifordropment.online/check-follow/${followerId}/${followedId}`);
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
            first_name: userdata.first_name
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

  const followedId = params.user_id;
  const followerId = name2[0]?.user_id;

  useEffect(() => {
    // Fetch data from the server to check if the profile is following
    fetch(`https://apifordropment.online/check-follow/${followerId}/${followedId}`)
      .then((response) => response.json())
      .then((data) => setIsFollowing(data.isFollowing))
      .catch((error) => console.error('Error:', error));
  }, [followerId, followedId]);


  useEffect(() => {
    const fetchFollowerCount = async () => {
      try {
        const response = await fetch(`https://apifordropment.online/follower-count/${params.user_id}`);
        const data = await response.json();
        setFollowerCount(data.followerCount);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchFollowerCount();
  }, [params.user_id]);

  const fetchuserdetails = useCallback(async () => {
    setLoading(true);
    const response = await fetch("https://apifordropment.online/user/profile/details", {
      headers: {
        Authorization: params.user_id,
      },
    });
    const data = await response.json();
    const transformeduserinfo = data.order.map((itemsdata) => {
      return {
        user_id: itemsdata.user_id,
        first_name: itemsdata.first_name,
        last_name: itemsdata.last_name,
        bio: itemsdata.bio,
        unique_id: itemsdata.unique_id,
        profilepic: `https://apifordropment.online/images/${itemsdata.porfilepic}`,
        Phone: itemsdata.phoneno
      };
    });
    setUserInfo(transformeduserinfo);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchuserdetails();
  }, []);

  const chatHandler = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await Axios.post(
        "https://apifordropment.online/start/chat",
        {
          user_id: params.user_id,
          first_name1: name2[0]?.first_name,
          first_name2: userInfo[0]?.first_name
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
  
      if (response.status === 200) {
        // Chat started successfully, perform the redirection
        const { chat_id, user1, user2 } = response.data;
  
        window.location.href = `/chat/${chat_id}/${user1}/${user2}`;
      } else {
        // Handle other response statuses (e.g., 401, 500) here.
        console.error("An error occurred:", response.data);
      }
    } catch (error) {
      // Handle network or other errors here.
      console.error("An error occurred:", error);
    }
  };


  const ChatButton = () => {
    const [chatPriv, setChatPriv] = useState('none');
  
    useEffect(() => {
      async function fetchData() {
        try {
          // Fetch token from local storage
          const token = localStorage.getItem('token');
  
          // Check if token exists
          if (!token) {
            console.error('Token not found in local storage');
            return;
          }
  
          const response = await Axios.get(`https://apifordropment.online/api/users/${params.user_id}`, {
            headers: {
              Authorization: token, // Pass token in the Authorization header
            },
          });
          setChatPriv(response.data.chat_priv);
        } catch (error) {
          console.error('Error fetching user chat privacy:', error);
        }
      }
      fetchData();
    }, [params.user_id]);
  
    const handleChatButtonClick = () => {
      // Replace the phone number with the desired number
      const phoneNumber = userInfo[0]?.Phone;
    
      // Form the WhatsApp URL
      const whatsappUrl = `https://wa.me/${phoneNumber}`;
    
      // Open the WhatsApp chat in a new window/tab
      window.open(whatsappUrl);
    };
  
    return (
      <div>
        {(chatPriv === 'all' || chatPriv === 'who_follow_me') && ( // Check both conditions
          <button className='homebtnprofilesusrs' onClick={handleChatButtonClick}>Chat</button>
        )}
      </div>
    );
  };

  
  
  return (<Fragment>
  <div className='headerforprofiles'>
    <header>
    <div className='btnprofiles'>
    <Link to='/'>
    <button className='homebtnprofilesusrs'>Home</button>
    </Link>
    {isFollowing === null ? (
      <Spinnerui/>
    ) : isFollowing ? (
      <button onClick={toggleunFollow} className='unfollowbtn'>unlink</button>
    ) : (
      <button onClick={toggleFollow} className='followbtn'>Link</button>
    )} 
    <ChatButton/>
  <div className='folloiwngandunfloowingbtn'>
        <button>Linked {followerCount}</button>
      </div>
  </div>
  </header>
</div>
<div className='profilesectionusers'>
  <section>
  <div className='imgprof'>
    <img src={userInfo[0]?.profilepic}/>
  </div>
  </section>
  <section>
    <div className='detailsaboutusersection'>
      <div className='nameofuser'>
      <h2>{userInfo[0]?.first_name}</h2><h2 className='lastnameuserdetails'>{userInfo[0]?.last_name}</h2><br/>
      <h3>{userInfo[0]?.unique_id}</h3>
      </div>
      <div className='biouserdetils'>
        <h3>{userInfo[0]?.bio}</h3>
      </div>
    </div>
   
  </section> 
</div>
<section className='shopssecuserporfileinusers'>
<hr/>
<div className='all-shop-profile'>
  <h2>Stores owned by {userInfo[0]?.first_name}</h2>
  </div>
<hr/>
    <div className='allshopsecuser'>
      <Template1userapp/>
    </div>
  </section>
    </Fragment>
  );
}

export default UserProfile;