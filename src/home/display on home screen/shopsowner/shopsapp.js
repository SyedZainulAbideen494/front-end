import React, {
  useState,
  useEffect,
  useCallback,
  Fragment,
  axios,
} from "react";
import Shopslist from "./shoplistinprofile";
import Shopslistonhome from "./shoplistinprofile";

function Shopapponhome() {
  const [items, setitems] = useState([]);
  const [loading, setloading] = useState(false);

  const token = localStorage.getItem("token");
  const fetchprodshandler = useCallback(async () => {
    setloading(true);
    const response = await fetch("http://localhost:8080/users/profile/shops", {
      headers: {
        Authorization: token,
      },
    });
    const data = await response.json();
    const transformedItems = data.shops.map((itemsdata) => {
      return {
        shop_id: itemsdata.shop_id,
        shop_name: itemsdata.shop_name,
        shop_owner: itemsdata.shop_owner,
        shop_about: itemsdata.shop_about,
        shop_prods: itemsdata.shop_prods,
        user_id: itemsdata.user_id,
        temp1: itemsdata.temp1
      };
    });
    setitems(transformedItems);
    setloading(false);
  }, []);

  useEffect(() => {
    fetchprodshandler();
  }, []);

  return (
    <Fragment>
      <section>
        {!loading && <Shopslistonhome shops={items} />}
        {loading && <p>Loading..</p>}
      </section>
    </Fragment>
  );
}

export default Shopapponhome;
