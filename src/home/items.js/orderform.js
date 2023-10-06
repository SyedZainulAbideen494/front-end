import { Fragment, useState, useCallback, useEffect } from "react";
import "./items.css";
import { Link, useParams } from "react-router-dom";
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

  const fetchProdshandler = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:8080/prods/details/orders/for/details`, {
        headers: {
          Authorization: params.id,
        },
      });
      const data = await response.json();
      const transformedItems = data.products.map((itemsdata) => ({
        images: `http://localhost:8080/images/${itemsdata.images}`,
        images2: `http://localhost:8080/images/${itemsdata.images2}`,
        images3: `http://localhost:8080/images/${itemsdata.images3}`,
        images4: `http://localhost:8080/images/${itemsdata.images4}`,
        images5: `http://localhost:8080/images/${itemsdata.images5}`,
        images6: `http://localhost:8080/images/${itemsdata.images6}`,
        title: itemsdata.title,
        price: itemsdata.price,
        description: itemsdata.description,
        id: itemsdata.id,
        shop_id: itemsdata.shop_id,
        payment: itemsdata.payment
      }));
      setItems(transformedItems);
    } catch (error) {
      console.error(error);
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
          "http://localhost:8080/user/details/orders/for/details",
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

  const orderhandler = () => {
    console.log("Order Handler Called");
    console.log("user:", user);
    console.log("phoneno:", phoneno);
    console.log("name2:", name2);
    console.log("items:", items);
    console.log("shop_id:", shop_id);
    Axios.post(
      "http://localhost:8080/place/order",
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
        product: params.title,
        shop_id: params.shop_id,
        occupation: name2[0]?.occupation,
        age: name2[0]?.age,
        sender_id: name2[0]?.user_id,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    ).then(() => {
      // Open the payment link in a new tab or window
      window.open(items[0]?.payment, "_blank");
    });
  };

  return (
    <div className="formorder">
      <form onSubmit={orderhandler}>
        <h2>{items[0]?.title}</h2>
        <label>Name</label>
        <input type="text" value={user} onChange={nameHandler} />
        <label>Phone number</label>
        <input type="number" value={phoneno} onChange={phoneNohandler} />
        <label>Address</label>
        <input
          type="text"
          placeholder="Street Address"
          value={streetadrs}
          onChange={streetaddress}
        />
        <input type="text" placeholder="City" value={city} onChange={cityadrs} />
        <input
          type="text"
          placeholder="State/Province"
          value={state}
          onChange={stateadrs}
        />
        <input
          type="number"
          placeholder="Zip Code/Postal"
          value={zipcode}
          onChange={zipcodeadrs}
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={counrtyadrs}
        />
        <div className="btn">
          <button onClick={props.onhidehanlder}>Close</button>
          <button type="submit">Place Order</button>
        </div>
      </form>
    </div>
  );
};

export default Orderform;