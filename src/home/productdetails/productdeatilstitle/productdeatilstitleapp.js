import React, { useState, useCallback, useEffect, Fragment } from "react";
import Productdeatilstitlelist from "./productdetailstitlelist";

const Productdetailstitleapp = (props) => {
  const [title, settitle] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchimagehandler = useCallback(async () => {
    setloading(true);
    const response = await fetch("http://localhost:8080/Productlandingpage");
    const data = await response.json();
    const transformeduser = data.items.map((itemsdata) => {
      return {
        title: itemsdata.title,
      };
    });
    settitle(transformeduser);
    setloading(false);
  }, []);

  useEffect(() => {
    fetchimagehandler();
  }, []);

  return (
    <Fragment>
      <section>
        {!loading && <Productdeatilstitlelist title={title} />}
        {loading && <p>Loading..</p>}
      </section>
    </Fragment>
  );
};

export default Productdetailstitleapp;
