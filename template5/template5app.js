import React, {
  useState,
  useEffect,
  useCallback,
  Fragment,
  axios,
} from "react";
import Template3list from "./template5list";

function Template4app() {
  const [items, setitems] = useState([]);
  const [loading, setloading] = useState(false);
  const token = localStorage.getItem("token");
  const fetchprodshandler = useCallback(async () => {
    setloading(true);
    const response = await fetch("http://localhost:8080/user/shops/template3", {
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
        shop_tagline: itemsdata.shop_tagline,
        shop_blockhead2: itemsdata.shop_blockhead2,
        shop_block2: itemsdata.shop_block2,
        shop_blockhead3: itemsdata.shop_blockhead3,
        shop_block3: itemsdata.shop_block3,
        user_id: itemsdata.user_id,
        shop_blockhead1: itemsdata.shop_blockhead1,
        shop_block1: itemsdata.shop_block1,
        shop_keyhead1: itemsdata.shop_keyhead1,
        shop_key1: itemsdata.shop_key1,
        shop_keyhead2: itemsdata.shop_keyhead2,
        shop_key2: itemsdata.shop_key2,
        shop_keyhead3: itemsdata.shop_keyhead3,
        shop_key3: itemsdata.shop_key3,
        shop_email: itemsdata.shop_email,
        shop_phone: itemsdata.shop_phone,
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
        {!loading && <Template3list shops={items} />}
        {loading && <p>Loading..</p>}
      </section>
    </Fragment>
  );
}

export default Template4app;
