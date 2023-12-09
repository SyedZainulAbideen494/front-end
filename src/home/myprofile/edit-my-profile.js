import React,{useCallback, useState} from "react";
import axios from "axios";
import './my-profile-edit.css'
import Addimage1 from "./profilepicupdate";
import { Link } from "react-router-dom";

const EditMyProfile = () => {
    const [formData, setFormData] = useState({
        unique_id: '',
        first_name: '',
        last_name: '',
        country: '',
        state: '',
        city: '',
        street_address: '',
        zipcode: '',
        occupation: '',
        bio: '',
        profilepic: '',
        phoneno: ''
        // Add other fields here...
      });
      const [successMessage, setSuccessMessage] = useState("");
    
      const token = localStorage.getItem("token");
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const profileId = "profile_id"; // Replace with actual profile ID
          await axios.put(`http://localhost:8080/edit/profile/my`, formData, {
            headers: {
              Authorization: token // Include the token in the request headers
            }
          });
          setSuccessMessage("Profile updated successfully!");
        } catch (error) {
          // Handle error
          console.error("Error updating profile:", error);
        }
      };



      const handleRemoveprofilepic = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const HandleSubmitremoveProfilePic = async (e) => {
        e.preventDefault();
        try {
          await axios.put(`http://localhost:8080/api/remove/profile/picture`, {
            headers: {
              Authorization: token // Include the token in the request headers
            }
          });
          setSuccessMessage("Profile updated successfully!");
        } catch (error) {
          // Handle error
          console.error("Error updating profile:", error);
        }
      };
      


    
      return (
        <div className="profile-edit-container">
        <div className="header-edit-my-profile">
          <h2>Edit Profile</h2>
          <Link to="/profile">
            <button className="back-button">Back</button>
          </Link>
        </div>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="unique_id">Unique ID:</label>
            <input
              type="text"
              id="unique_id"
              name="unique_id"
              value={formData.unique_id}
              onChange={handleInputChange}
            />
  
          <label>
            First Name:
            <input type="text" name="first_name" value={formData.first_name} onChange={handleInputChange} />
          </label>
          <label>
            Last Name:
            <input type="text" name="last_name" value={formData.last_name} onChange={handleInputChange} />
          </label>
          <label>
            Country:
            <input type="text" name="country" value={formData.country} onChange={handleInputChange} />
          </label>
          <label>
            State:
            <input type="text" name="state" value={formData.state} onChange={handleInputChange} />
          </label>
          <label>
            City:
            <input type="text" name="city" value={formData.city} onChange={handleInputChange} />
          </label>
          <label>
            Street Address:
            <input type="text" name="street_address" value={formData.street_address} onChange={handleInputChange} />
          </label>
          <label>
            Zipcode:
            <input type="text" name="zipcode" value={formData.zipcode} onChange={handleInputChange} />
          </label>
          <label>
            Occupation:
            <input type="text" name="occupation" value={formData.occupation} onChange={handleInputChange} />
          </label>
          <label>
            Bio:
            <textarea name="bio" value={formData.bio} onChange={handleInputChange} />
          </label>
          <label>
            Phone Number:
            <input type="text" name="phoneno" value={formData.phoneno} onChange={handleInputChange} />
          </label>
          <button type="submit" className="update-button">Update Profile</button>
        </form>

        <div className="remove-profile-container">
          <p>Remove Profile Picture:</p>
          <button onClick={HandleSubmitremoveProfilePic} className="remove-button">Remove</button>
          {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
      </div>
    </div>
      );
}

export default EditMyProfile