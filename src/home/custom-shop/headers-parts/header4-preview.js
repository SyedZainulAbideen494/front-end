import React, { Fragment, useCallback, useState, useEffect } from "react";
import './headers.css';
import img from '../../header/images/Dropment (2).png';
import { useParams } from "react-router-dom";

const Header4preview = () => {
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
    <div className="hero-section-4-preview">
      <p className="header4-hero-tagline-preview">Discover the Best Deals</p>
      <div className="sales-offer-header4-preview">
        <p className="header4-hero-sales-discount-preview">Winter Sale 25% Off</p>
      </div>
      <div className="cta-buttons">
        <button className="header4-shop-button-preview">Shop Now</button>
        <button className="header4-learn-button-preview">Learn More</button>
      </div>
    </div>
    </Fragment>
  );
};

export default Header4preview;