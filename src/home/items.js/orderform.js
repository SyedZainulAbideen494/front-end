import { Fragment, useState, useCallback, useEffect } from "react";
import "./items.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Placeorder from "./placeorder";
import Axios from "axios"; // Change this line to import Axios properly

const Orderform = (props) => {
  const [user, setname] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [email, setemail] = useState("");
  const [streetadrs, setstreetsdrs] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [zipcode, setzipcode] = useState("");
  const [country, setcountry] = useState("");
  const [id, setid] = useState("");
  const [title, setitle] = useState("");
  const [shop_id, setshop_id] = useState("");
  const [paymentlink, setPaymentLink] = useState("");
  const [items, setItems] = useState([]);
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [name2, setName2] = useState([]);

  useEffect(() => {
    const fetchProdshandler = async () => {
      try {
        const response = await fetch(`https://apifordropment.online/prods/details/orders/for/details`, {
          headers: {
            Authorization: params.id,
          },
        });
        const data = await response.json();
        const transformedItems = data.products.map((itemsdata) => ({
          images: `https://apifordropment.online/images/${itemsdata.images}`,
          images2: `https://apifordropment.online/images/${itemsdata.images2}`,
          images3: `https://apifordropment.online/images/${itemsdata.images3}`,
          images4: `https://apifordropment.online/images/${itemsdata.images4}`,
          images5: `https://apifordropment.online/images/${itemsdata.images5}`,
          images6: `https://apifordropment.online/images/${itemsdata.images6}`,
          title: itemsdata.title,
          description: itemsdata.description,
          id: itemsdata.id,
          shop_id: itemsdata.shop_id,
          payment: itemsdata.payment
        }));
        setItems(transformedItems);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchProdshandler(); // Initial fetch
  
    // Fetch when params.id changes
    if (params.id) {
      fetchProdshandler();
    }
  }, [params.id]);

  const token = localStorage.getItem("token");


  useEffect(() => {
    const fetchUsers2Handler = async () => {
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
            email: userdata.email,
            age: userdata.age,
            occupation: userdata.occupation,
          };
        });
        setName2(transformedUser2);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers2Handler();
  }, []);

  const orderHandler = async (e) => {
    e.preventDefault();
    try {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding leading zero if needed
      const day = String(currentDate.getDate()).padStart(2, '0'); // Adding leading zero if needed
      
      const hours = String(currentDate.getHours()).padStart(2, '0'); // Adding leading zero if needed
      const minutes = String(currentDate.getMinutes()).padStart(2, '0'); // Adding leading zero if needed
      const seconds = String(currentDate.getSeconds()).padStart(2, '0'); // Adding leading zero if needed
      
      const formattedDate = `${year}-${month}-${day}`;
      const formattedTime = `${hours}:${minutes}:${seconds}`;
      
      // Combine date and time in ISO format
      const dateTimeISO = `${formattedDate} ${formattedTime}`;

      
      const response = await Axios.post(
        "https://apifordropment.online/place/order",
        {
          name: user,
          Phone: phoneno,
          Email: name2[0]?.email,
          streetadrs: streetadrs,
          city: city,
          state: state,
          zipcode: zipcode,
          country: country,
          id: params.id,
          product: items[0]?.title, // Use items instead of params
          shop_id: items[0]?.shop_id, // Use items instead of params
          occupation: name2[0]?.occupation,
          age: name2[0]?.age,
          sender_id: name2[0]?.user_id,
          orderDateTime: formattedDate, // Use formatted date
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const openPaymentLink = () => {
    const paymentLink = items?.[0]?.payment;
    if (paymentLink) {
      window.open(paymentLink, "_blank");
    } else {
      console.error("Payment link not available");
      // Handle scenario where payment link is not available
    }
  };
  return (
    <div className="formorder">
       <form onSubmit={(e) => {
                e.preventDefault(); // Ensure form doesn't trigger default browser action
                orderHandler(); // Call the function to handle shop data submission
              }}>
        <h2>{items[0]?.title}</h2>
        <label>Name</label>
        <input
              required
              placeholder="name"
              onChange={e => setname(e.target.value)}
            />
        <label>Phone number</label>
        <input
              required
              placeholder="Phone number"
              onChange={e => setphoneno(e.target.value)}
            />
        <label>Address</label>
        <input
              required
              placeholder="Street address"
              onChange={e => setstreetsdrs(e.target.value)}
            />
        <input
              required
              placeholder="City"
              onChange={e => setcity(e.target.value)}
            />
         <input
              required
              placeholder="State"
              onChange={e => setstate(e.target.value)}
            />
         <input
              required
              placeholder="zipcode"
              onChange={e => setzipcode(e.target.value)}
            />
         <input
              required
              placeholder="country"
              onChange={e => setcountry(e.target.value)}
            />
        <div className="btn">
          <button type="submit">Next</button>
<Link to='/home'>
<button>Cancel</button>
</Link>
        </div>
      </form>
    </div>
  );
};

export default Orderform;