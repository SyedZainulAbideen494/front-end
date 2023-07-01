import { Fragment } from "react";
import React, { useState } from "react";
import "./items.css";
import { Link } from "react-router-dom";
import Placeorder from "./placeorder";

const Orderform = (props) => {
  const [user, setname] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [email, setemail] = useState("");
  const [streetadrs, setstreetsdrs] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [zipcode, setzipcode] = useState("");
  const [country, setcountry] = useState("");
  const [placeord, setplaceord] = useState(false);
  const [itemdetails, setitemdetails] = useState("");

  const data = () => {
    setitemdetails(props.prodsdetails);
  };

  const openplaceordHandler = () => {
    setplaceord(true);
  };

  const closeplaceordHandler = () => {
    setplaceord(false);
  };

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

  const onOrderSubmitHandler = (event) => {
    event.preventDefault();

    const orderDeatails = {
      name: user,
      Phone: phoneno,
      Email: email,
      Address: streetadrs,
      city,
      state,
      zipcode,
      country,
      itemdetails,
    };

    console.log(orderDeatails);
  };

  return (
    <Fragment>
      <div className="formorder">
        <form onSubmit={onOrderSubmitHandler}>
          <div className="name">
            <h2>{props.prodsdetails}</h2>
            <label>Name</label>
            <br />
            <input type="text" value={user} onChange={nameHandler} />
          </div>
          <div className="phone">
            <label>Phone number</label>
            <br />
            <input type="number" value={phoneno} onChange={phoneNohandler} />
          </div>
          <div className="email">
            <label>Email</label>
            <br />
            <input type="email" value={email} onChange={emailhandler} />
          </div>
          <div className="address">
            <label>Address</label>
            <br />
            <input
              type="text"
              placeholder="street address"
              value={streetadrs}
              onChange={streetaddress}
            />
            <br />
            <input
              type="text"
              placeholder="city"
              value={city}
              onChange={cityadrs}
            />
            <input
              type="text"
              placeholder="state/ province"
              value={state}
              onChange={stateadrs}
            />
            <br />
            <input
              type="number"
              placeholder="Zip code/ postal"
              value={zipcode}
              onChange={zipcodeadrs}
            />
            <br />
            <input
              type="text"
              placeholder="country"
              value={country}
              onChange={counrtyadrs}
            />
          </div>
          <div className="btn">
            <span className="closebtn">
              <Link to="/">
                <button>Close</button>
              </Link>
            </span>
            <span className="placeordbtn">
              <button onClick={openplaceordHandler} type="submit">
                Place order
              </button>
            </span>
          </div>
        </form>
      </div>
      {placeord && <Placeorder onClose={closeplaceordHandler} />}
    </Fragment>
  );
};

export default Orderform;
