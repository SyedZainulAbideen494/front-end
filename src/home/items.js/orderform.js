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

  console.log(items[0]?.id)

  const token = localStorage.getItem("token");

  const nameHandler = (event) => {
    setname(event.target.value);
  };

  const phoneNohandler = (event) => {
    setphoneno(event.target.value);
  };

  const emailhandler = (event) => {
    setemail(event.target.value);
  };

  const streetaddress = (event) => {
    setstreetsdrs(event.target.value);
  };

  const cityadrs = (event) => {
    setcity(event.target.value);
  };

  const stateadrs = (event) => {
    setstate(event.target.value);
  };

  const zipcodeadrs = (event) => {
    setzipcode(event.target.value);
  };

  const counrtyadrs = (event) => {
    setcountry(event.target.value);
  };

  useEffect(() => {
    const fetchUsers2Handler = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          "https://apifordropment.online/user/details/orders/for/details",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        const data = await response.json();
        const transformedUser2 = data.products.map((userdata) => {
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

  console.log(items)

  const orderhandler = async (event) => {
    event.preventDefault();
    try {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString(); // Using ISO format directly
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
          product: items[0]?.title,
          shop_id: params.shop_id,
          occupation: name2[0]?.occupation,
          age: name2[0]?.age,
          orderDateTime: formattedDate,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log("Order placed successfully:", response.data);
      openPaymentLink(items);
    } catch (error) {
      console.error("Error placing order:", error);
      // Handle error scenarios
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
      <form onSubmit={orderhandler}>
        <h2>{items[0]?.title}</h2>
        <label>Name</label>
        <input type="text" value={user} onChange={nameHandler} required/>
        <label>Phone number</label>
        <input type="number" value={phoneno} onChange={phoneNohandler} required/>
        <label>Address</label>
        <input
          type="text"
          placeholder="Street Address"
          value={streetadrs}
          onChange={streetaddress}
          required
        />
        <input type="text" placeholder="City" value={city} onChange={cityadrs} required/>
        <input
          type="text"
          placeholder="State/Province"
          value={state}
          onChange={stateadrs}
          required
        />
        <input
          type="number"
          placeholder="Zip Code/Postal"
          value={zipcode}
          onChange={zipcodeadrs}
          required
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={counrtyadrs}
          required
        />
        <div className="btn">
          <button type="submit" onClick={() => {
            
    openPaymentLink();
}}>Next</button>
<Link to='/home'>
<button>Cancel</button>
</Link>
        </div>
      </form>
    </div>
  );
};

export default Orderform;