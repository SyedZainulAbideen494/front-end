import React, { useState, useCallback, useEffect, Fragment } from "react";
import Productdeatilsimglist from "./productimglist";

const Productdetailsimgapp = (props) => {
  const [image, setimage] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchimagehandler = useCallback(async () => {
    setloading(true);
    const response = await fetch("http://localhost:8080//Productlandingpage");
    const data = await response.json();
    const transformeduser = data.items.map((itemsdata) => {
      return {
        image: itemsdata.image,
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
        {!loading && <Productdeatilsimglist img={image} />}
        {loading && <p>Loading..</p>}
      </section>
    </Fragment>
  );
};

export default Productdetailsimgapp;
