import React, {
  useState,
  useEffect,
  useCallback,
  Fragment,
  axios,
} from "react";
import Productlist from "./productslist";
import { useParams } from "react-router-dom";

function Productsinshopapp() {
  const [items, setitems] = useState([]);
  const [loading, setloading] = useState(false);
  const params = useParams();
  const fetchprodshandler = useCallback(async () => {
    setloading(true);

    const shop_id = params.shop_id;
    const response = await fetch("http://localhost:8080/use/shops/products", {
      headers: {
        Authorization: shop_id,
      },
    });
    const data = await response.json();
    const transformedItems = data.items.map((itemsdata) => {
      return {
        id: itemsdata.id,
        title: itemsdata.title,
        price: itemsdata.price,
        amount: itemsdata.quantity,
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
        {!loading && <Productlist items={items} />}
        {loading && <p>Loading..</p>}
      </section>
    </Fragment>
  );
}

export default Productsinshopapp;
