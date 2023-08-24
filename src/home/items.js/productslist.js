import { Fragment } from "react";
import Products from "./products";
import "./homedis.css";
import { Link, useParams } from "react-router-dom";
import "./items.css";

const Productlist = (props) => {
  return (
    <Fragment>
      <div className="productmodelul">
        <ul>
          {props.items.map((item) => (
            <Link
              to={`/products/${item.id}/${item.title}/${item.price}/${item.shop_id}`}
            >
              <Products
                id={item.id}
                title={item.title}
                amount={item.amount}
                price={item.price}
                shop_id={item.shop_id}
                images={item.images}
                payment={item.payment}
                usd={item.usd}
                EUR={item.EUR}
                GBP={item.GBP}
                JPY={item.JPY}
                CAD={item.CAD}
                AUD={item.AUD}
                CHF={item.CHF}
                CNY={item.CNY}
                INR={item.INR}
                BRL={item.BRL}
                RUB={item.RUB}
                KRW={item.KRW}
                SGD={item.SGD}
                NZD={item.NZD}
                MXN={item.MXN}
                HKD={item.HKD}
                TRY={item.TRY}
                ZAR={item.ZAR}
                SEK={item.SEK}
                NOK={item.NOK}
              />
            </Link>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Productlist;
