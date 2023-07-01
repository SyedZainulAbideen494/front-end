import React, { Fragment, useState } from "react";
import { useParams, json, useLoaderData } from "react-router-dom";
import Saleschat from "./saleschat";

function Ordersdeatilspage() {
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
        <Saleschat
          orders_id={itemdata.orders_id}
          name={itemdata.name}
          Phone={itemdata.Phone}
          Email={itemdata.Email}
          streetadrs={itemdata.streetadrs}
          city={itemdata.city}
          state={itemdata.state}
          zipcode={itemdata.zipcode}
          country={itemdata.country}
          id={itemdata.id}
          product={itemdata.product}
          sender_id={itemdata.sender_id}
          shop_id={itemdata.shop_id}
          message={itemdata.message}
        />
      ))}
    </Fragment>
  );
};

export default Ordersdeatilspage;

export async function loader({ request, params }) {
  const id = params.id;

  const response = await fetch("http://localhost:8080/allorders" + id);

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
