import { Fragment, useCallback, useState, useEffect } from "react";
import Storeaboutlist from "./shopaboutlist";

const Storeabout = (props) => {
  const [store, setstore] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchusershandler = useCallback(async () => {
    setloading(true);
    const response = await fetch("http://localhost:8080/user/shops");
    const data = await response.json();
    const transformeduser = data.shops.map((userdata) => {
      return {
        shop_name: userdata.shop_name,
        shop_owner: userdata.shop_owner,
        shop_id: userdata.shop_id,
        shop_about: userdata.shop_about,
        shop_products_about: userdata.shop_products_about,
      };
    });
    setstore(transformeduser);
    setloading(false);
  }, []);

  useEffect(() => {
    fetchusershandler();
  }, []);

  return (
    <Fragment>
      <section>
        {!loading && <Storeaboutlist storedata={store} />}
        {loading && <p>Loading..</p>}
      </section>
    </Fragment>
  );
};

export default Storeabout;
