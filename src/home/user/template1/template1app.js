import React, {
  useState,
  useEffect,
  useCallback,
  Fragment,
  axios,
} from "react";
import Template3list from "./template1list";
import Template1userlist from "./template1list";
import { useParams } from "react-router-dom";
import Spinnerui from "../../UI/spinner";

function Template1userapp() {
  const [items, setitems] = useState([]);
  const [loading, setloading] = useState(false);
  const params= useParams()
  const token = localStorage.getItem("token");
  const fetchprodshandler = useCallback(async () => {
    setloading(true);
    const response = await fetch("https://apifordropment.online/user/template1", {
      headers: {
        Authorization: params.user_id,
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
        temp: itemsdata.temp,
        insta: itemsdata.insta,
        salestext: itemsdata.salestext
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
        {!loading && <Template1userlist shops={items} />}
        {loading && <Spinnerui/>}
      </section>
    </Fragment>
  );
}

export default Template1userapp;
