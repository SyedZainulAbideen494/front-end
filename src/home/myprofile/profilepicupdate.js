import React,{useCallback, useState} from "react";
import axios from "axios";
const Addimage1 = (props) => {
    const [image, setImage] = useState(null);
   
    const token = localStorage.getItem('token')
   
    const Addimage1Handler = (e) => {
      e.preventDefault();
   
      const formData = new FormData();
      formData.append("image", image);
   
      axios.post("http://localhost:8080/add/profile/pic", formData, {
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
      <div className="ImagesEditsectionElement">

        <form onSubmit={Addimage1Handler}>
   
          <label>Add your logo</label>
          <input
            type="file"
            placeholder="Logo"
            onChange={(e) => setImage(e.target.files[0])}
          />
   
          <button type="submit">Add Image</button>
        </form>
      </div>
    );
   };

   export default Addimage1