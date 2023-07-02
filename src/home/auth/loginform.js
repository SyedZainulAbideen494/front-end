import { Link, useNavigate } from "react-router-dom";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Cancelbtn from "./cancelbtn";
import "./auth.css";
import Axios from "axios";
const Loginform = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loginstatus, setloginstatus] = useState(false);

  const navigate = useNavigate();

  const userauthentication = () => {
    Axios.get("https://backend-zain-production.up.railway.app/userAuth", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post("https://backend-zain-production.up.railway.app/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (!response.data.auth) {
        navigate("/login");
      } else {
        navigate("/");
        localStorage.setItem("token", response.data.token);
      }
    });
  };

  const userAuth = () => {
    Axios.get("https://backend-zain-production.up.railway.app/isUserAuth");
  };

  return (
    <Fragment>
      <div className="loginform">
        <div className="emailinp">
          <label>
            <h3>Email</h3>
          </label>
          <br />
          <input
            type="email"
            required
            placeholder="email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </div>
        <div className="password">
          <label>
            <h3>Password</h3>
          </label>
          <br />
          <input
            type="password"
            required
            placeholder="password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        <div className="btnloginform">
          <span>
            <Link to="/">
              <Cancelbtn />
            </Link>
          </span>
          <span className="loginbtn">
            <button onClick={login}>Login</button>
          </span>
        </div>
        <div className="logintt">
          <p>Don't have an account?</p>

          <div className="loginct">
            <Link to="/signin">
              <p>Sign up</p>
            </Link>
          </div>
        </div>
      </div>
      {loginstatus && <button onClick={userAuth}>check123</button>}
    </Fragment>
  );
};

export default Loginform;
