import React, { useState, useCallback, useEffect, Fragment } from "react";
import Profilenamelist from "./profilenamelist";

const Profilenameapp = (props) => {
  const [name, setname] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchusershandler = useCallback(async () => {
    setloading(true);
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
        first_name: userdata.first_name,
        last_name: userdata.last_name,
      };
    });
    setname(transformeduser);
    setloading(false);
  }, []);

  useEffect(() => {
    fetchusershandler();
  }, []);

  return (
    <Fragment>
      <section>
        {!loading && <Profilenamelist name={name} />}
        {loading && <p>Loading..</p>}
      </section>
    </Fragment>
  );
};

export default Profilenameapp;
