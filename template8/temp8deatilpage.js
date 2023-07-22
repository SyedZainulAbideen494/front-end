import React, { Fragment, useState } from "react";
import { useParams, json, useLoaderData } from "react-router-dom";
import Shopsright from "./shopsright";
import Shopsinprofile from "./shopsini";
import Template3website from "./template8app";

function Temp4detailspage() {
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
      {props.shops.map((item) => (
        <Template3website
          shop_id={item.shop_id}
          shop_name={item.shop_name}
          shop_owner={item.shop_owner}
          shop_tagline={item.shop_tagline}
          shop_block2={item.shop_block2}
          shop_blockhead2={item.shop_blockhead2}
          shop_blockhead3={item.shop_blockhead3}
          shop_block3={item.shop_block3}
          user_id={item.user_id}
          shop_blockhead1={item.shop_blockhead1}
          shop_block1={item.shop_block1}
          shop_keyhead1={item.shop_keyhead1}
          shop_key1={item.shop_key1}
          shop_keyhead2={item.shop_keyhead2}
          shop_key2={item.shop_key2}
          shop_keyhead3={item.shop_keyhead3}
          shop_key3={item.shop_key3}
          shop_email={item.shop_email}
          shop_phone={item.shop_phone}
        />
      ))}
    </Fragment>
  );
};

export default Temp4detailspage;

export async function loader({ request, params }) {
  const id = params.id;

  const response = await fetch(
    "https://backend-zain-production.up.railway.app/user/shops/template3" + id
  );

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
