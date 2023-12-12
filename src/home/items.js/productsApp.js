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
    const response = await fetch("https://apifordropment.online/products/product");
    const data = await response.json();
    const transformedItems = data.items.map((itemsdata) => {
      return {
        id: itemsdata.id,
        title: itemsdata.title,
        price: itemsdata.price,
        amount: itemsdata.quantity,
        shop_id: itemsdata.shop_id,
        images: `https://apifordropment.online/images/${itemsdata.images}`,
        payment: itemsdata.payment,
        usd: itemsdata.usd,
        EUR: itemsdata.EUR,
        GBP: itemsdata.GBP,
        JPY: itemsdata.JPY,
        CAD: itemsdata.CAD,
        AUD: itemsdata.AUD,
        CHF: itemsdata.CHF,
        CNY: itemsdata.CNY,
        INR: itemsdata.INR,
        BRL: itemsdata.BRL,
        RUB: itemsdata.RUB,
        KRW: itemsdata.KRW,
        SGD: itemsdata.SGD,
        NZD: itemsdata.NZD,
        MXN: itemsdata.MXN,
        HKD: itemsdata.HKD,
        TRY: itemsdata.TRY,
        ZAR: itemsdata.ZAR,
        SEK: itemsdata.SEK,
        NOK: itemsdata.NOK,
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
