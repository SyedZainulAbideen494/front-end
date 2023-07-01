import React, { useState, useCallback, useEffect, Fragment } from "react";
import Shoplist from "./shopslist";

const Shopsapp = (props) => {
  const [shop, setshop] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchusershandler = useCallback(async () => {
    setloading(true);
    const token = localStorage.getItem("token");
    setloading(true);
    const response = await fetch("http://localhost:8080/users/profile/shops", {
      headers: {
        Authorization: token,
      },
    });

    const data = await response.json();
    const transformedshop = data.shops.map((shopdata) => {
      return {
        shop_name: shopdata.shop_name,
      };
    });
    setshop(transformedshop);
    setloading(false);
  }, []);

  useEffect(() => {
    fetchusershandler();
  }, []);

  return (
    <Fragment>
      <section>
        {!loading && <Shoplist shop={shop} />}
        {loading && <p>Loading..</p>}
      </section>
    </Fragment>
  );
};

export default Shopsapp;
