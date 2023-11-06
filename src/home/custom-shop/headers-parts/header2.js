import React, { Fragment, useCallback, useState, useEffect } from "react";
import './headers.css';
import img from '../../header/images/Dropment (2).png';
import { useParams } from "react-router-dom";

const Header2 = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState([])
  const params = useParams();
  
  const fetchProductsHandler = useCallback(async () => {
    setLoading(true);
    const response = await fetch(`http://localhost:8080/custom/shop/display`, {
      headers: {
        Authorization: params.shop_id, // Set the token in the Authorization header
      },
    });
    const data = await response.json();
    const transformedItems = data.shops.map((itemsdata) => {
      return {
        salestext: itemsdata.salestext,
        shop_tagline: itemsdata.shop_tagline,
        images1: `http://localhost:8080/images/${itemsdata.images1}`
      };
    });
    setItems(transformedItems);
    setLoading(false);
  }, [params.shop_id]);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  const fetchColorHandler = useCallback(async () => {
    setLoading(true);
    const response = await fetch(`http://localhost:8080/custom/shop/coloring/display/section2`, {
      headers: {
        Authorization: params.shop_id, // Set the token in the Authorization header
      },
    });
    const data = await response.json();
    const transformedItems = data.shops.map((itemsdata) => {
      return {
        id: itemsdata.id,
        background_colour1: itemsdata.background_colour1,
        background_colour2: itemsdata.background_colour2,
        background_colour3: itemsdata.background_colour3,
        background_colour4: itemsdata.background_colour4,
        background_colour5: itemsdata.background_colour5,
        font_colour1: itemsdata.font_colour1,
        font_colour2: itemsdata.font_colour2,
        font_colour3: itemsdata.font_colour3,
        font_colour4: itemsdata.font_colour4,
        font_colour5: itemsdata.font_colour5,
        font_colour6: itemsdata.font_colour6,
        font_colour7: itemsdata.font_colour7,
        font_colour8: itemsdata.font_colour8,
      };
    });
    setColor(transformedItems);
    setLoading(false);
  }, [params.shop_id]);

  useEffect(() => {
    fetchColorHandler();
  }, [fetchColorHandler]);

  const heroStyle = {
    backgroundImage: `url(${items.length > 0 ? items[0].images1 : ''})`,
  };

  return (
    <Fragment>
      <div className="hero-2" style={heroStyle}>
      <div className="hero-content-2">
        <h1 className="hero-title-2" style={{color: color[0]?.font_colour1}}>{items[0]?.shop_tagline}</h1>
        <p className="hero-subtitle-2" style={{color: color[0]?.font_colour2}}>{items[0]?.salestext}</p>
        <button className="cta-button-2" style={{backgroundColor: color[0]?.background_colour1, border:`2px solid ${color[0]?.background_colour2}`, color: color[0]?.font_colour3}}>Get Started</button>
      </div>
    </div>
    </Fragment>
  );
};

export default Header2;