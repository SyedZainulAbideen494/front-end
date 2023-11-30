import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const [bio, setbio] = useState("")

  const firstnameHandler = (event) => {
    setfirstname(event.target.value);
  };

  const bioHandler = (event) => {
    setbio(event.target.value);
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
  const nav = useNavigate();

  const verifyEmail = async (email) => {
    try {
      const response = await Axios.get(
        `https://api.quickemailverification.com/v1/verify?email=${email}&apikey=YOUR_API_KEY`
      );
      if (response.data.result === "valid") {
        console.log("Email is valid!");
        return true;
      } else {
        console.log("Email is not valid!");
        return false;
      }
    } catch (error) {
      console.error("Error verifying email:", error);
      return false;
    }
  };

  const register = async () => {
    try {
      const isEmailValid = await verifyEmail(email);

      if (!isEmailValid) {
        console.log("Invalid email. Registration failed!");
        // Handle invalid email address, display error message, etc.
        return;
      }

      const userData = {
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
        bio: bio,
      };

      const response = await Axios.post("http://localhost:8080/addUser", userData);

      if (response.status === 200) {
        console.log("User registration successful!");
        nav("/login");
      } else {
        console.log("User registration failed!");
        // Handle registration failure, display error message, etc.
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
      // Handle other types of errors, such as network errors or server errors.
    }
  };


  return (
    <Fragment>
      <form className="signup_form">
        <h2 className="sign-heading">Sign Up</h2>
        <div className="signup_info">
          <div className="inp">
            <label htmlFor="unique_id">
              unique id
              <br />
            </label>
            <input
              type="text"
              id="unique_id"
              name="unique_id"
              value={unique_id}
              onChange={unique_idHandler}
              placeholder="Enter Unique ID"
              required
            />
          </div>
          <div className="inp">
            <label htmlFor="fname">First Name</label>
            <br />
            <input
              type="text"
              id="fname"
              name="fname"
              value={first_name}
              onChange={firstnameHandler}
              placeholder="Enter First Name"
              required
            />
          </div>
          <div className="inp">
            <label htmlFor="lname">Last Name</label>
            <br />
            <input
              type="text"
              id="lname"
              name="lname"
              value={last_name}
              onChange={lastnameHandler}
              placeholder="Enter Last Name"
              required
            />
          </div>
          <div className="inp">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={emailHandler}
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="inp">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={passwordHandler}
              placeholder="Enter Password"
              required
            />
          </div>
          <div className="inp">
            <label htmlFor="phoneno">Phone No</label>
            <br />
            <input
              type="text"
              id="phoneno"
              name="phoneno"
              value={phoneno}
              onChange={phoneNohandler}
              placeholder="Enter Phone No"
              required
            />
          </div>
          <div className="inp">
            <label htmlFor="age">Age</label>
            <br />
            <input
              type="text"
              id="age"
              name="age"
              value={age}
              onChange={ageHandler}
              placeholder="Enter Age"
              required
            />
          </div>
          <div className="inp">
            <label htmlFor="bio">Bio</label><br/>
            <input
              type="text"
              id="bio"
              name="bio"
              value={bio}
              onChange={bioHandler}
              placeholder="bio"
              required
            />
          </div>
          <div className="inp">
            <label htmlFor="occupation">Occupation</label>
            <br />
            <input
              type="text"
              id="occupation"
              name="occupation"
              value={occupation}
              onChange={occupationHandler}
              placeholder="Enter Occupation"
              required
            />
          </div>
          <div className="inp">
            <label htmlFor="streetadrs">Street Address</label>
            <br />
            <input
              type="text"
              id="streetadrs"
              name="streetadrs"
              value={streetadrs}
              onChange={streetaddress}
              placeholder="Enter Street Address"
              required
            />
          </div>
          <div className="inp">
            <label htmlFor="city">City</label>
            <br />
            <input
              type="text"
              id="city"
              name="city"
              value={city}
              onChange={cityadrs}
              placeholder="Enter City"
              required
            />
          </div>
          <div className="inp">
            <label htmlFor="state">State</label>
            <br />
            <input
              type="text"
              id="state"
              name="state"
              value={state}
              onChange={stateadrs}
              placeholder="Enter State"
              required
            />
          </div>
          <div className="inp">
            <label htmlFor="zipcode">Zip Code</label>
            <br />
            <input
              type="text"
              id="zipcode"
              name="zipcode"
              value={zipcode}
              onChange={zipcodeadrs}
              placeholder="Enter Zip Code"
              required
            />
          </div>
          <div className="inp">
            <label htmlFor="country">Country</label><br/>
            <input
              type="text"
              id="country"
              name="country"
              value={country}
              onChange={counrtyadrs}
              placeholder="Enter Country"
              required
            />
          </div>
        </div>
        <div className="submit-btn">
          <button type="submit" className="btn btn-primary" onClick={register}>
            Sign Up
          </button>
          <Cancelbtn />
        </div>
        <div className="already">
          <p>
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </form>
    </Fragment>
  );
};

export default Signinform;
