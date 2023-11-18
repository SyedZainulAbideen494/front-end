import React, { Fragment, useState, useCallback, useEffect } from "react";
import "./profilepic.css";
import pic from '../../header/images/profiledef.png';
import  Axios  from "axios";

const Profilepic = (props) => {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
      const token = localStorage.getItem("token");

  const fetchImageHandler = useCallback(async () => {
    setLoading(true);

    
    try {
      const response = await fetch("http://localhost:8080/users/", {
        headers: {
          Authorization: token,
        },
      });
      
      if (!response.ok) {
        throw new Error("Failed to fetch user data.");
      }

      const data = await response.json();
      const transformedUser = data.user.map((userData) => {
        return {
          profilePic: `http://localhost:8080/images/${userData.porfilepic}`, // Ensure it's 'profilepic' here
        };
      });
      setImage(transformedUser);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchImageHandler();
  }, []);

  const Addimage6 = (props) => {
    const [image, setImage] = useState(null);
   
    const shopId = props.shop_id; // Assuming you're passing shopId as a prop
   
   
    const Addimage1Handler = (e) => {
      e.preventDefault();
   
      const formData = new FormData();
      formData.append("image", image);
   
      Axios.post("http://localhost:8080/addprofilepic", formData, {
        headers: {
          Authorization: token,
        },
      })
        .then((response) => {
          console.log(response.data);
          // Handle success
        })
        .catch((error) => {
          console.error("Error adding product:", error);
          // Handle error
        });
    };
   
    return (
      <div>
        <h2>ADD profile picture</h2>
        <form onSubmit={Addimage1Handler}>
   
          <label>ADD profile picture</label>
          <input
            type="file"
            placeholder="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
   
          <button type="submit">Add Image</button>
        </form>
      </div>
    );
   };

  return (
    <Fragment>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img
          src={image.length > 0 ? image[0].profilePic || pic : pic}
          alt="Profile Picture"
          className="profile-pic"
        />  
      )}
    </Fragment>
  );
};

export default Profilepic;
