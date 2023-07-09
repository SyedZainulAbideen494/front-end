import React, { Fragment, useState } from "react";
import Prodsright from "./prodsdetailsright";
import { useParams, json, useLoaderData } from "react-router-dom";

function Productsdeatilspage() {
  const data = useLoaderData();

  return (
    <Fragment>
      <Productsrights items={data.items} />
    </Fragment>
  );
}

const Productsrights = (props) => {
  return (
    <Fragment>
      {props.map.items((itemdata) => (
        <Prodsright
          id={itemdata.id}
          title={itemdata.title}
          price={itemdata.price}
          amount={itemdata.amount}
          shop_id={itemdata.shop_id}
          images={itemdata.images}
        />
      ))}
    </Fragment>
  );
};

export default Productsdeatilspage;

export async function loader({ request, params }) {
  const id = params.id;

  const response = await fetch("http://localhost:8080/products/product" + id);

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
