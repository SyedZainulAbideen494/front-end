import { Fragment, useState, useCallback, useEffect } from "react";
import "./order-form.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Placeorder from "./placeorder";
import back from '../header/images/icons8-back-24.png'
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
          payment: itemsdata.payment,
          usd: itemsdata.usd,
        EUR: itemsdata.EUR,
        GBP: itemsdata.GBP,
        JPY: itemsdata.JPY,
        CAD: itemsdata.CAD,
        AUD: itemsdata.AUD,
        CHF: itemsdata.CHF,
        CNY: itemsdata.CNY,
        INR: itemsdata.INR,
        BRL: itemsdata.BRL,
        RUB: itemsdata.RUB,
        KRW: itemsdata.KRW,
        SGD: itemsdata.SGD,
        NZD: itemsdata.NZD,
        MXN: itemsdata.MXN,
        HKD: itemsdata.HKD,
        TRY: itemsdata.TRY,
        ZAR: itemsdata.ZAR,
        SEK: itemsdata.SEK,
        NOK: itemsdata.NOK,
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
            country: userdata.country
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
  const Pricing = () => {
    if (name2[0]?.country === "India") {
      return <h3>{items[0]?.INR} ₹</h3>;
    } else if (name2[0]?.country === "europe") {
      return <h3>{items[0]?.EUR} €</h3>;
    } else if (name2[0]?.country === "united kingdom") {
      return <h3>{items[0]?.GBP} £</h3>;
    } else if (name2[0]?.country === "japan") {
      return <h3>{items[0]?.JPY} ¥</h3>;
    } else if (name2[0]?.country === "canada") {
      return <h3>{items[0]?.CAD} CAD</h3>;
    } else if (name2[0]?.country === "australia") {
      return <h3>{items[0]?.AUD} AUD</h3>;
    } else if (name2[0]?.country === "switzerland") {
      return <h3>{items[0]?.CHF} Fr</h3>;
    } else if (name2[0]?.country === "china") {
      return <h3>{items[0]?.CNY} ¥</h3>;
    } else if (name2[0]?.country === "brazil") {
      return <h3>{items[0]?.BRL} R$</h3>;
    } else if (name2[0]?.country === "south korea") {
      return <h3>{items[0]?.KRW} ₩</h3>;
    } else if (name2[0]?.country === "singapore") {
      return <h3>{items[0]?.SGD} SGD</h3>;
    } else if (name2[0]?.country === "new zealand") {
      return <h3>{items[0]?.NZD} NZD</h3>;
    } else if (name2[0]?.country === "mexico") {
      return <h3>{items[0]?.MXN} MXN</h3>;
    } else if (name2[0]?.country === "hong kong") {
      return <h3>{items[0]?.HKD} HKD</h3>;
    } else if (name2[0]?.country === "turkey") {
      return <h3>{items[0]?.TRY} ₺</h3>;
    } else if (name2[0]?.country === "south africa") {
      return <h3>{items[0]?.ZAR} R</h3>;
    } else if (name2[0]?.country === "sweden") {
      return <h3>{items[0]?.SEK} kr</h3>;
    } else if (name2[0]?.country === "norway") {
      return <h3>{items[0]?.NOK} kr</h3>;
    } else {
      return <h3>{items[0]?.USD} $</h3>;
    }
  };

  const [name, setName] = useState([]);

  const fetchUsersHandler = useCallback(async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    
    try {
      const response = await fetch("https://apifordropment.online/users/", {
        headers: {
          Authorization: token,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data.");
      }

      const data = await response.json();
      const transformedUsers = data.user.map((userData) => {
        return {
          first_name: userData.first_name,
          last_name: userData.last_name,
          country: userData.country,
        };
      });

      setName(transformedUsers);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsersHandler();
  }, [fetchUsersHandler]);
  return (
    <div className="formorder-main-div">
      <div className="fororder-header">
        <header>
          <div className="formorder-btns">
            <Link to='/home'>
            <button><img src={back}/></button>
            </Link>
          </div>
          <div className="formorder-txt">
            <h2>Checkout</h2>
          </div>
        </header>
      </div>
       
        <div className="orderform">
          <section className="item-details-orderform">
            <div className="orderform-txt1head">
            <h3>Order Details</h3>
            </div>
          <img src={items[0]?.images} alt={title} className='product-img-orderform' />
      <div className={items[0]?.productDetails}>
        <h2>{items[0]?.title}</h2>
        <p>Price: <Pricing/></p>
      </div>
          </section>
          <section className="orderform-checkoutinfo">
  <form onSubmit={orderHandler}>
    <div className="form-group" style={{textAlign: 'center'}}>
      <h2>Shipping Information</h2>
    </div>
    <div className="form-group">
      <input
        type="text"
        required
        placeholder="Name"
        onChange={e => setname(e.target.value)}
      />
    </div>
    <div className="form-group">
      <input
        type="tel"
        required
        placeholder="Phone number"
        onChange={e => setphoneno(e.target.value)}
      />
    </div>
    <div className="form-group">
      <input
        type="email"
        required
        placeholder="Email"
        onChange={e => setemail(e.target.value)}
      />
    </div>
    <div className="form-group">
      <input
        type="text"
        required
        placeholder="Country"
        onChange={e => setcountry(e.target.value)}
      />
    </div>
    <div className="form-group">
      <input
        type="text"
        required
        placeholder="State"
        onChange={e => setstate(e.target.value)}
      />
    </div>
    <div className="form-group">
      <input
        type="text"
        required
        placeholder="City"
        onChange={e => setcity(e.target.value)}
      />
    </div>
    <div className="form-group">
      <input
        type="text"
        required
        placeholder="Street Address"
        onChange={e => setstreetsdrs(e.target.value)}
      />
    </div>
    <div className="form-group">
      <input
        type="text"
        required
        placeholder="Zipcode"
        onChange={e => setzipcode(e.target.value)}
      />
    </div>
    <button type="submit">Place Order</button>
  </form>
</section>
        </div>
      
    </div>
  );
};

export default Orderform;