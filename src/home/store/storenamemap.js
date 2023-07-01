import { Fragment } from "react";

const StorenameMap = (props) => {
  return (
    <Fragment>
      <li>
        <div className="store-name-h1">
          <h1>{props.shop_name}</h1>
        </div>
      </li>
    </Fragment>
  );
};

export default StorenameMap;
