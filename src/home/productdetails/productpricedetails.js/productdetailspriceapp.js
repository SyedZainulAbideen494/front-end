import React, { useState, useCallback, useEffect, Fragment } from "react";
import Productdeatilspricelist from "./productdeatilspricelist";

const Productdetailspriceapp = (props) => {
  const [price, setprice] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchimagehandler = useCallback(async () => {
    setloading(true);
    const response = await fetch("http://localhost:8080/Productlandingpage");
    const data = await response.json();
    const transformeduser = data.items.map((itemsdata) => {
      return {
        price: itemsdata.price,
      };
    });
    setprice(transformeduser);
    setloading(false);
  }, []);

  useEffect(() => {
    fetchimagehandler();
  }, []);

  return (
    <Fragment>
      <section>
        {!loading && <Productdeatilspricelist price={price} />}
        {loading && <p>Loading..</p>}
      </section>
    </Fragment>
  );
};

export default Productdetailspriceapp;
