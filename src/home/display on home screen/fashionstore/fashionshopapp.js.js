import React, {
  useState,
  useEffect,
  useCallback,
  Fragment,
  axios,
} from "react";
import FashionShopslist from "./fashionshoplist";
import FashionShopslistonhome from "./fashionshoplist";

function FashionShopapponhome() {
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
        shop_tagline: itemsdata.shop_tagline,
        shop_abouthead: itemsdata.shop_abouthead,
        shop_blockhead2: itemsdata.shop_blockhead2,
        shop_block2: itemsdata.shop_block2,
        shop_blockhead3: itemsdata.shop_blockhead3,
        shop_block3: itemsdata.shop_block3,
        user_id: itemsdata.user_id,
        images: `http://localhost:8080/images/${itemsdata.images}`,
        temp2: itemsdata.temp2
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
        {!loading && <FashionShopslistonhome shops={items} />}
        {loading && <p>Loading..</p>}
      </section>
    </Fragment>
  );
}

export default FashionShopapponhome;
