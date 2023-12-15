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
          await axios.put(`https://apifordropment.online/edit/profile/my`, formData, {
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



      const HandleSubmitremoveProfilePic = async (e) => {
        e.preventDefault();
        try {
          await axios.put(
            'https://apifordropment.online/api/remove/profile/picture',
            null, // Set data as null since it's a PUT request
            {
              headers: {
                Authorization: token // Include the token in the request headers
              }
            }
          );
          setSuccessMessage('Profile updated successfully!');
        } catch (error) {
          // Handle error
          console.error('Error updating profile:', error);
        }
      };
      
        const [image, setImage] = useState(null);
       
       
        const Addimage1Handler = (e) => {
          e.preventDefault();
       
          const formData = new FormData();
          formData.append("image", image);
       
          axios.post("https://apifordropment.online/add/profile/pic", formData, {
            headers: {
              Authorization: token
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
              placeholder="Unique ID"
            />
  
          <label>
            First Name:
            <input type="text" placeholder="First Name" name="first_name" value={formData.first_name} onChange={handleInputChange} />
          </label>
          <label>
            Last Name:
            <input type="text" name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleInputChange} />
          </label>
          <label>
            Country:
            <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleInputChange} />
          </label>
          <label>
            State:
            <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleInputChange} />
          </label>
          <label>
            City:
            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleInputChange} />
          </label>
          <label>
            Street Address:
            <input type="text" name="street_address" placeholder="Street Address" value={formData.street_address} onChange={handleInputChange} />
          </label>
          <label>
            Zipcode:
            <input type="text" name="zipcode" placeholder="Zipcode" value={formData.zipcode} onChange={handleInputChange} />
          </label>
          <label>
            Occupation:
            <input type="text" name="occupation" placeholder="Occupation" value={formData.occupation} onChange={handleInputChange} />
          </label>
          <label>
            Bio:
            <textarea name="bio" value={formData.bio} placeholder="Bio" onChange={handleInputChange} />
          </label>
          <label>
            Phone Number:
            <input type="text" name="phoneno" placeholder="Phone Number" value={formData.phoneno} onChange={handleInputChange} />
          </label>
          <button type="submit" className="remove-button">Update Profile</button>
        </form>

        <div className="remove-profile-container">
        <div className="ImagesEditsectionElement">
        <button onClick={HandleSubmitremoveProfilePic} className="remove-button-rm">Remove Profile Picture</button>
    <form onSubmit={Addimage1Handler} className="add-profile-pic-area">

      <label>Add Profile Picture</label>
      <input
        type="file"
        placeholder="Logo"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button type="submit" className="remove-button">Add Image</button>
    </form>
  </div>
          {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
      </div>
    </div>
      );
}

export default EditMyProfile