import React, { Fragment, useCallback, useState, useEffect } from "react";
import './headers.css';
import img from '../../header/images/Dropment (2).png';
import { useParams } from "react-router-dom";

const Header2Preview = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const fetchProductsHandler = useCallback(async () => {
    setLoading(true);
    const response = await fetch(`http://localhost:8080/custom/shop/display`, {
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
          ? `http://localhost:8080/images/${itemsdata.images1}`
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
      <div className="hero-2-preview">
      <div className="hero-content-2-preview">
        <h1 className="hero-title-2-preview">Welcome to Our Website</h1>
        <p className="hero-subtitle-2-preview">Discover amazing things here.</p>
        <a href="#cta" className="cta-button-2-preview">Get Started</a>
      </div>
    </div>
    </Fragment>
  );
};

export default Header2Preview;