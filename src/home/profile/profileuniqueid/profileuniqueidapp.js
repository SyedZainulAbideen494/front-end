import React, { useState, useCallback, useEffect, Fragment } from "react";
import Profileuniqueidlist from "./profileuniqueidlist";
import { useNavigate } from "react-router-dom";

const Profileuniqueidapp = (props) => {
  const nav = useNavigate();
  const [auth, setauth] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setauth(true);
    } else {
      setauth(false);
    }
  }, []);
  if (auth === false) {
    nav("/login");
  }
  const [uniqueid, setuniqueid] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchusershandler = useCallback(async () => {
    const token = localStorage.getItem("token");
    setloading(true);
    const response = await fetch("http://localhost:8080/users/", {
      headers: {
        Authorization: token,
      },
    });
    const data = await response.json();
    const transformeduser = data.user.map((userdata) => {
      return {
        unique_id: userdata.unique_id,
      };
    });
    setuniqueid(transformeduser);
    setloading(false);
  }, []);

  useEffect(() => {
    fetchusershandler();
  }, []);

  return (
    <Fragment>
      <section>
        {!loading && <Profileuniqueidlist uniqueid={uniqueid} />}
        {loading && <p>Loading..</p>}
      </section>
    </Fragment>
  );
};

export default Profileuniqueidapp;
