import React,{useState, Fragment} from "react";
import './item-edit.css'
import { useParams } from "react-router-dom";
import Axios from "axios";

const ItemEdit = () => {
    const Edititemform = () => {
        const params = useParams();
      
        const [title, settitle] = useState("");
        const [price, setprice] = useState("");
        const [amount, setamount] = useState("");
        const [message, setMessage] = useState("");
      
        const handleSubmit = async (e) => {
          e.preventDefault();
      
          try {
            const response = await Axios.put(
              "https://apifordropment.online/updateprods",
              {
                title: title,
                price: price,
                amount: amount,
              },
              {
                headers: {
                  Authorization: params.id,
                },
              }
            );
            setMessage(response.data.message);
          } catch (error) {
            console.error(error);
            setMessage("Error updating data.");
          }
        };
      
        return (
          <div className="product-edit-main">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={title}
                onChange={(e) => settitle(e.target.value)}
                placeholder="Enter title"
              />
              <button type="submit">Update</button>
              
            </form>
            <Addimges/>
            <p>{message}</p>
          </div>
        );
      };
      
      const Addimges = () => {
        return<Fragment>
              <Addimage2/>
              <Addimage3/>
              <Addimage4/>
              <Addimage5/>
              <Addimage6/>
        </Fragment>
      }
      
      const Addimage2 = (props) => {
        const [image, setImage] = useState(null);
       
        const shopId = props.shop_id; // Assuming you're passing shopId as a prop
       
        const params = useParams();
       
        const Addimage1Handler = (e) => {
          e.preventDefault();
       
          const formData = new FormData();
          formData.append("image", image);
       
          Axios.post("https://apifordropment.online/addprodsimg2", formData, {
            headers: {
              Authorization: params.id,
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
          <div className="product-edit-img-section">
            <h2>ADD Image 2</h2>
            <form onSubmit={Addimage1Handler}>
       
              <label>Image 2</label>
              <input
                type="file"
                placeholder="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
       
              <button type="submit">Add Product</button>
            </form>
          </div>
        );
       };
       
       const Addimage3 = (props) => {
        const [image, setImage] = useState(null);
       
        const shopId = props.shop_id; // Assuming you're passing shopId as a prop
       
        const params = useParams();
       
        const Addimage1Handler = (e) => {
          e.preventDefault();
       
          const formData = new FormData();
          formData.append("image", image);
       
          Axios.post("https://apifordropment.online/addprodsimg3", formData, {
            headers: {
              Authorization: params.id,
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
          <div className="product-edit-img-section">
            <h2>ADD Image 3</h2>
            <form onSubmit={Addimage1Handler}>
       
              <label>Image 3</label>
              <input
                type="file"
                placeholder="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
       
              <button type="submit">Add Product</button>
            </form>
          </div>
        );
       };
       
       const Addimage4 = (props) => {
        const [image, setImage] = useState(null);
       
        const shopId = props.shop_id; // Assuming you're passing shopId as a prop
       
        const params = useParams();
       
        const Addimage1Handler = (e) => {
          e.preventDefault();
       
          const formData = new FormData();
          formData.append("image", image);
       
          Axios.post("https://apifordropment.online/addprodsimg4", formData, {
            headers: {
              Authorization: params.id,
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
          <div className="product-edit-img-section">
            <h2>ADD Image 4</h2>
            <form onSubmit={Addimage1Handler}>
       
              <label>Image 4</label>
              <input
                type="file"
                placeholder="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
       
              <button type="submit">Add Product</button>
            </form>
          </div>
        );
       };
       
       const Addimage5 = (props) => {
        const [image, setImage] = useState(null);
       
        const shopId = props.shop_id; // Assuming you're passing shopId as a prop
       
        const params = useParams();
       
        const Addimage1Handler = (e) => {
          e.preventDefault();
       
          const formData = new FormData();
          formData.append("image", image);
       
          Axios.post("https://apifordropment.online/addprodsimg5", formData, {
            headers: {
              Authorization: params.id,
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
          <div className="product-edit-img-section">
            <h2>ADD Image 5</h2>
            <form onSubmit={Addimage1Handler}>
       
              <label>Image 5</label>
              <input
                type="file"
                placeholder="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
       
              <button type="submit">Add Product</button>
            </form>
          </div>
        );
       };
       
       const Addimage6 = (props) => {
        const [image, setImage] = useState(null);
       
        const shopId = props.shop_id; // Assuming you're passing shopId as a prop
       
        const params = useParams();
       
        const Addimage1Handler = (e) => {
          e.preventDefault();
       
          const formData = new FormData();
          formData.append("image", image);
       
          Axios.post("https://apifordropment.online/addprodsimg6", formData, {
            headers: {
              Authorization: params.id,
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
          <div className="product-edit-img-section">
            <h2>ADD Image 6</h2>
            <form onSubmit={Addimage1Handler}>
       
              <label>Image 6</label>
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
      
      return<Edititemform/>
       
}

export default ItemEdit