import React, { useState, useCallback, useEffect, Fragment } from "react";
import Userinfolist from "./userinfolist";

const Userapp = (props) => {
  const [user, setuser] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchusershandler = useCallback(async () => {
    setloading(true);
    const response = await fetch("http://localhost:8080/users");
    console.log(response);
    const data = await response.json();
    const transformeduser = data.user.map((userdata) => {
      return {
        id: userdata.user_id,
        first_name: userdata.first_name,
        last_name: userdata.last_name,
        image: userdata.image,
        unique_id: userdata.unique_id,
      };
    });
    setuser(transformeduser);
    setloading(false);
  }, []);

  useEffect(() => {
    fetchusershandler();
  }, []);

  return (
    <Fragment>
      <section>
        {!loading && <Userinfolist users={user} />}
        {loading && <p>Loading..</p>}
      </section>
    </Fragment>
  );
};

export default Userapp;
