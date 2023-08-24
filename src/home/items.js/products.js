import { Fragment, useContext, useState, useCallback, useEffect } from "react";
import "./homedis.css";
import "./items.css";
import { Link } from "react-router-dom";
import Itemproductform from "./itemproductform";
import Cartcontext from "../header/cart/cartcontext";
import "./homedis.css";

const Products = (props) => {
  const Pricing = ({ country }) => {
    if (country === "India") {
      return <h3>{props.INR} ₹</h3>;
    } else if (country === "europe") {
      return <h3>{props.EUR} €</h3>;
    } else if (country === "united kingdom") {
      return <h3>{props.GBP} £</h3>;
    } else if (country === "japan") {
      return <h3>{props.JPY} ¥</h3>;
    } else if (country === "canada") {
      return <h3>{props.CAD} CAD</h3>;
    } else if (country === "australia") {
      return <h3>{props.AUD} AUD</h3>;
    } else if (country === "switzerland") {
      return <h3>{props.CHF} Fr</h3>;
    } else if (country === "china") {
      return <h3>{props.CNY} ¥</h3>;
    } else if (country === "brazil") {
      return <h3>{props.BRL} R$</h3>;
    } else if (country === "south korea") {
      return <h3>{props.KRW} ₩</h3>;
    } else if (country === "singapore") {
      return <h3>{props.SGD} SGD</h3>;
    } else if (country === "new zealand") {
      return <h3>{props.NZD} NZD</h3>;
    } else if (country === "mexico") {
      return <h3>{props.MXN} MXN</h3>;
    } else if (country === "hong kong") {
      return <h3>{props.HKD} HKD</h3>;
    } else if (country === "turkey") {
      return <h3>{props.TRY} ₺</h3>;
    } else if (country === "south africa") {
      return <h3>{props.ZAR} R</h3>;
    } else if (country === "sweden") {
      return <h3>{props.SEK} kr</h3>;
    } else if (country === "norway") {
      return <h3>{props.NOK} kr</h3>;
    } else {
      return <h3>{props.USD} $</h3>;
    }
  };

  const [name, setName] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsersHandler = useCallback(async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    
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
    <div className="productmodeltemp3">
      {name.map((user, index) => (
        <li key={index}>
          <div className="productimgtemp3">
            <img src={props.images} alt="Product Image" />
          </div>
          <div className="product__titletemp3">
            <h2>{props.title}</h2>
          </div>
          <Pricing country={user.country} />
        </li>
      ))}
    </div>
  );
};

export default Products;
