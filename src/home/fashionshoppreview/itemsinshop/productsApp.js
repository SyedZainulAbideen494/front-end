import React, {
  useState,
  useEffect,
  useCallback,
  Fragment,
  axios,
} from "react";
import Productinstorelist from "./productsinstorelist";

function Productsinstoreapp() {
  const [items, setitems] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchprodshandler = useCallback(async () => {
    setloading(true);
    const response = await fetch("http://localhost:8080/products/product");
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
        {!loading && <Productinstorelist items={items} />}
        {loading && <p>Loading..</p>}
      </section>
    </Fragment>
  );
}

export default Productsinstoreapp;
