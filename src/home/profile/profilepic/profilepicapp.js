import React, { useState, useCallback, useEffect, Fragment } from "react";
import "./profilepic.css";
import Profilepiclist from "./profilepiclist";

const Profilepicapp = (props) => {
  const [image, setimage] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchimagehandler = useCallback(async () => {
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
        image: userdata.image,
      };
    });
    setimage(transformeduser);
    setloading(false);
  }, []);

  useEffect(() => {
    fetchimagehandler();
  }, []);

  return (
    <Fragment>
      <section>
        {!loading && <Profilepiclist image={image} />}
        {loading && <p>Loading..</p>}
      </section>
    </Fragment>
  );
};

export default Profilepicapp;
