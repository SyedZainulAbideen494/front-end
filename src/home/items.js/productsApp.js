import React, {
  useState,
  useEffect,
  useCallback,
  Fragment,
  axios,
} from "react";
import Productlist from "./productslist";

function Productsapp() {
  const [items, setitems] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchprodshandler = useCallback(async () => {
    setloading(true);
<<<<<<< HEAD
    const response = await fetch("http://localhost:8080/products/product");
=======
    const response = await fetch("http://154.41.229.94/products/product");
>>>>>>> 710d2b62ca1c32ff36724303fbbb32e30581dd1c
    const data = await response.json();
    const transformedItems = data.items.map((itemsdata) => {
      return {
        id: itemsdata.id,
        title: itemsdata.title,
        price: itemsdata.price,
        amount: itemsdata.quantity,
        shop_id: itemsdata.shop_id,
        images: `http://154.41.229.94/images/${itemsdata.images}`,
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

export default Productsapp;
