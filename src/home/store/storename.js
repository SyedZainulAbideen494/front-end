import { Fragment } from "react";
import "./webstore.css";
import StorenameMap from "./storenamemap";

const Storename = (props) => {
  return (
    <Fragment>
      <div className="store-name-ul">
        <ul>
          {props.storename.map((storename) => (
            <StorenameMap shop_name={storename.shop_name} />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Storename;
