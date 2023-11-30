import React, {
  useState,
  useEffect,
  useCallback,
  Fragment,
  axios,
} from "react";
import { Link } from "react-router-dom";
import "./StoryUpload.css";
import Stories from "./stories";
import users from '../header/images/profiledef.png'

function Storiesapp() {
  const [items, setitems] = useState([]);
  const [loading, setloading] = useState(false);
  const token = localStorage.getItem("token");

  const fetchprodshandler = useCallback(async () => {
    setloading(true);
    const response = await fetch("http://localhost:8080/api/stories/users/display", {
      headers: {
        Authorization: token,
      },
    });
    const data = await response.json();
    const transformedItems = data.order.map((itemsdata) => {
      return {
        profilePic: itemsdata.porfilepic ? `http://localhost:8080/images/${itemsdata.porfilepic}` : null,
        user_id: itemsdata.user_id,
        first_name: itemsdata.first_name,
        last_name: itemsdata.last_name,
      };
    });
    setitems(transformedItems);
    setloading(false);
  }, []);

  useEffect(() => {
    fetchprodshandler();
  }, []);

  return (
    <Fragment>
      <section>
        {!loading && <StoriesUserList users={items} />}
        {loading && <p>Loading..</p>}
      </section>
    </Fragment>
  );
}

const StoriesUserList = (props) => {
  return (
    <Fragment>
      <div className="storysmodelul-container">
        <ul className="storysmodelul">
          {props.users.map((item) => (
            <Template1inprofile
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
  const hiseStoryHandler = () => {
    setShowStory(false);
  };
  return (
    <Fragment>
      <div className="maindivforstoriesuserdisplay">
        <Link to={`/story/${props.user_id}`}>
        <img
  src={props[0]?.profilepic || users} // Use default image if profile picture is not available
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