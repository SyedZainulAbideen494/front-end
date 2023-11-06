import React, {
  useState,
  useEffect,
  useCallback,
  Fragment,
  axios,
} from "react";
import Template3list from "./template1list";
import Template1mainlist from "./template1list";

function AllTemplate1app() {
  const [items, setitems] = useState([]);
  const [loading, setloading] = useState(false);
  const token = localStorage.getItem("token");
  const fetchprodshandler = useCallback(async () => {
    setloading(true);
    const response = await fetch("http://localhost:8080/all/shops/main/page", {
      headers: {
        Authorization: token,
      },
    });
    const data = await response.json();
    const transformedItems = data.shops.map((itemsdata) => {
      return {
        shop_id: itemsdata.shop_id,
        shop_name: itemsdata.shop_name,
        temp: itemsdata.temp,
        logo: `http://localhost:8080/images/${itemsdata.logo}`,
        shop_owner: itemsdata.shop_owner,
        user_id: itemsdata.user_id
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
        {!loading && <Template1mainlist shops={items} />}
        {loading && <p>Loading..</p>}
      </section>
    </Fragment>
  );
}

export default AllTemplate1app;
