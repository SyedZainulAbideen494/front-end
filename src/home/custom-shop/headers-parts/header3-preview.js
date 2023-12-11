import React, { Fragment, useCallback, useState, useEffect } from "react";
import './headers.css';
import img from '../../header/images/Dropment (2).png';
import { useParams } from "react-router-dom";

const Header3Preview = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const fetchProductsHandler = useCallback(async () => {
    setLoading(true);
    const response = await fetch(`https://apifordropment.online/custom/shop/display`, {
      headers: {
        Authorization: params.shop_id,
      },
    });
    const data = await response.json();
    const transformedItems = data.shops.map((itemsdata) => {
      return {
        salestext: itemsdata.salestext,
        shop_tagline: itemsdata.shop_tagline,
        images1: itemsdata.images1
          ? `https://apifordropment.online/images/${itemsdata.images1}`
          : null,
      };
    });
    setItems(transformedItems);
    setLoading(false);
  }, [params.shop_id]);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  const heroStyle = {
    backgroundImage: `url(${items.length > 0 ? items[0].images1 : ''})`,
  };

  return (
    <Fragment>
     <div className="header3-preview">
        
     </div>
    </Fragment>
  );
};

export default Header3Preview;