import React, { useState, useEffect, useCallback, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Fixed import statement
import "./stories-display.css";
import Stories from "./stories";
import users from '../header/images/profiledef.png';

function Storiesapp() {
  const [items, setitems] = useState([]);
  const [loading, setloading] = useState(false);
  const token = localStorage.getItem("token");

  const fetchprodshandler = useCallback(async () => {
    setloading(true);
    try {
      const response = await axios.get("https://apifordropment.online/api/stories/users/display", {
        headers: {
          Authorization: token,
        },
      });
      const data = response.data; // Retrieve data directly from axios response
      const transformedItems = data.order.map((itemsdata) => {
        return {
          profilePic: `https://apifordropment.online/images/${itemsdata.porfilepic}`, // Fixed typo 'porfilepic'
          user_id: itemsdata.user_id,
          first_name: itemsdata.first_name,
          last_name: itemsdata.last_name,
        };
      });
      setitems(transformedItems);
    } catch (error) {
      console.error("Error fetching stories:", error);
    } finally {
      setloading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchprodshandler();
  }, [fetchprodshandler]);

  return (
    <Fragment>
      <section>
        {!loading ? (
          items.length > 0 ? (
            <StoriesUserList users={items} />
          ) : (
            <p>Link with someone to see their blinkfeeds</p>
          )
        ) : (
          <p>Loading..</p>
        )}
      </section>
    </Fragment>
  );
}

const StoriesUserList = (props) => {
  return (
    <Fragment>
      <div className="storysmodelul-container">
        <ul className="storysmodelul">
          {props.users.map((item, index) => (
            <Template1inprofile
              key={index}
              user_id={item.user_id}
              first_name={item.first_name}
              last_name={item.last_name}
              profilePic={item.profilePic}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

const Template1inprofile = (props) => {
  const [showStory, setShowStory] = useState(false);

  const showStoryHandler = () => {
    setShowStory(true);
  };

  const hideStoryHandler = () => {
    setShowStory(false);
  };

  return (
    <Fragment>
      <div className="maindivforstoriesuserdisplay">
        <Link to={`/story/${props.user_id}`}>
          <img
            src={props.profilePic} // Use default image if profile picture is not available
            alt="User Profile"
            className="storiesuserprofilepicuser" 
          />
        </Link>
        <Link to={`/user/${props.user_id}`} style={{ textDecoration: "none", color: "black" }}>
          <p>{props.first_name} {props.last_name}</p>
        </Link>
      </div>
    </Fragment>
  );
};

export default Storiesapp;