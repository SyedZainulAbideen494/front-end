import React, { Fragment, useState } from "react";
import { useParams, json, useLoaderData } from "react-router-dom";
import Shopsright from "./shopsright";
import Shopsinprofile from "./shopsini";

function Productsdeatilspage() {
  const data = useLoaderData();

  return (
    <Fragment>
      <Productsrights shops={data.shops} />
    </Fragment>
  );
}

const Productsrights = (props) => {
  return (
    <Fragment>
      {props.map.shops((itemdata) => (
        <Shopsright
          shop_id={itemdata.shop_id}
          shop_name={itemdata.shop_name}
          shop_about={itemdata.shop_about}
          shop_prods={itemdata.shop_prods}
          user_id={itemdata.user_id}
        />
      ))}
    </Fragment>
  );
};

export default Productsdeatilspage;

export async function loader({ request, params }) {
  const id = params.id;

  const response = await fetch("http://localhost:8080/user/shops" + id);

  if (!response.ok) {
    throw json(
      { message: "could not find product" },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
