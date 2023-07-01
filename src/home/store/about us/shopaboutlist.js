import { Fragment } from "react";
import Aboutus from "./aboutuspg";

const Storeaboutlist = (props) => {
  return (
    <Fragment>
      <div className="store-name-ul">
        <ul>
          {props.storedata.map((store) => (
            <Aboutus
              shop_name={store.shop_name}
              shop_id={store.shop_id}
              shop_owner={store.shop_owner}
              shop_about={store.shop_about}
              shop_products_about={store.shop_products_about}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Storeaboutlist;
