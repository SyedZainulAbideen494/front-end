import React, { Fragment, useState } from "react";
import { useParams, json, useLoaderData } from "react-router-dom";
import Shopsright from "./shopsright";
import Shopsinprofile from "./shopsini";
import Fashionshop from "./fashionshop";

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
      {props.map.shops((item) => (
        <Fashionshop
          shop_id={item.shop_id}
          shop_name={item.shop_name}
          shop_owner={item.shop_owner}
          shop_about={item.shop_about}
          shop_tagline={item.shop_tagline}
          shop_abouthead={item.shop_abouthead}
          shop_block2={item.shop_block2}
          shop_blockheading2={item.shop_blockheading2}
          shop_blockheading3={item.shop_blockheading3}
          shop_block3={item.shop_block3}
          user_id={item.user_id}
          images={item.images}
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
