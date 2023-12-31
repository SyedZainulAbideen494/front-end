import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import Shopsinprofile from "./shopsini";

const Shopslistonhome = (props) => {
  return (
    <Fragment>
      <div className="productmodelul">
        <ul>
          {props.shops.map((item) => (
            <Link
              to={`/mystore/${item.shop_id}/${item.shop_name}/${item.shop_owner}/${item.shop_about}/${item.shop_prods}/${item.user_id}/${item.temp1}`}
            >
              <Shopsinprofile
                shop_id={item.shop_id}
                shop_name={item.shop_name}
                shop_owner={item.shop_owner}
                shop_about={item.shop_about}
                shop_tagline={item.shop_tagline}
                user_id={item.user_id}
                shop_prods={item.shop_prods}
                temp1={item.temp1}
              />
            </Link>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Shopslistonhome;
