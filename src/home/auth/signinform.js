import { Fragment } from "react";
import { Router, Link } from "react-router-dom";
import Orderform from "../items.js/orderform";
import React, { useState } from "react";
import Cancelbtn from "./cancelbtn";
import "./auth.css";
import Axios from "axios";

const Signinform = () => {
  const [phoneno, setphoneno] = useState("");
  const [id, setid] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [first_name, setfirstname] = useState("");
  const [last_name, setlastname] = useState("");
  const [occupation, setoccupation] = useState("");
  const [age, setage] = useState("");
  const [streetadrs, setstreetsdrs] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [zipcode, setzipcode] = useState("");
  const [country, setcountry] = useState("");
  const [unique_id, setunique_id] = useState("");

  const firstnameHandler = (event) => {
    setfirstname(event.target.value);
  };

  const idhandler = (event) => {
    setid(event.target.value);
  };

  const unique_idHandler = (event) => {
    setunique_id(event.target.value);
  };

  const lastnameHandler = (event) => {
    setlastname(event.target.value);
  };

  const emailHandler = (event) => {
    setemail(event.target.value);
  };

  const passwordHandler = (event) => {
    setpassword(event.target.value);
  };

  const phoneNohandler = (event) => {
    setphoneno(event.target.value);
  };

  const ageHandler = (event) => {
    setage(event.target.value);
  };

  const occupationHandler = (event) => {
    setoccupation(event.target.value);
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

  const counrtyadrs = (event) => {
    setcountry(event.target.value);
  };

  const zipcodeadrs = (event) => {
    setzipcode(event.target.value);
  };
  Axios.defaults.withCredentials = true;
  const register = () => {
    Axios.post("https://backend-zain-production.up.railway.app/addUser", {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      unique_id: unique_id,
      occupation: occupation,
      age: age,
      phoneno: phoneno,
      streetadrs: streetadrs,
      city: city,
      state: state,
      zipcode: zipcode,
      country: country,
    });
  };

  return (
    <Fragment>
      <div className="signinform">
        <div className="inp">
          <label>
            <h3>First name</h3>
          </label>
          <br />
          <input
            type="text"
            required
            placeholder="First name"
            value={first_name}
            onChange={firstnameHandler}
          />
        </div>
        <div className="inp">
          <label>
            <h3>Last name</h3>
          </label>
          <br />
          <input
            type="text"
            required
            placeholder="Last name"
            value={last_name}
            onChange={lastnameHandler}
          />
        </div>
        <div className="inp">
          <label>
            <h3>Email</h3>
          </label>
          <br />
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={emailHandler}
          />
        </div>
        <div className="inp">
          <label>
            <h3>Password</h3>
          </label>
          <br />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={passwordHandler}
          />
        </div>
        <div className="inp">
          <label>
            <h3>Unique Id</h3>
          </label>
          <br />
          <input
            type="text"
            required
            placeholder="Unique Id"
            value={unique_id}
            onChange={unique_idHandler}
          />
        </div>
        <div className="opt">
          <label>
            <h3>occupation</h3>
          </label>
          <br />
          <select value={occupation} onChange={occupationHandler}>
            <option>Entrepreneur</option>
            <option>Freelancer</option>
            <option>Employee</option>
            <option>Dropshipping</option>
            <option>Local shop owner</option>
            <option>Other</option>
          </select>
        </div>
        <div className="opt">
          <label>
            <h3>Age</h3>
          </label>
          <br />
          <select value={age} onChange={ageHandler}>
            <option>12 - 18 years</option>
            <option>19- 25 years</option>
            <option>26- 35 years</option>
            <option>36- 44 years</option>
            <option>45- 50 years</option>
            <option>51 - 65+ years</option>
          </select>
        </div>
        <div className="inp">
          <label>
            <h3>Phone number</h3>
          </label>
          <br />
          <input type="number" value={phoneno} onChange={phoneNohandler} />
        </div>
        <div className="inp">
          <label>
            <h3>Address</h3>
          </label>
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
          <br />
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
        <div className="signinformbtn">
          <span>
            <Cancelbtn />
          </span>

          <span className="signinbtn">
            <Link to="/login">
              <button onClick={register}>Sign in</button>
            </Link>
          </span>
        </div>
        <div className="logint">
          <p>Alredy have an account?</p>
          <div className="loginct">
            <Link to="/login">
              <p>Login</p>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Signinform;
