import React,{Fragment, useState, useCallback, useEffect, useRef} from "react";
import { Link, useParams } from "react-router-dom";
import './nav-bars.css'
import logo from '../../header/images/drop2_logo.png'

const NavBar1 = () => {
  const [items, setItems] = useState([]);
  const [color, setColor] = useState([])
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const params = useParams();
  
  const fetchProductsHandler = useCallback(async () => {
    setLoading(true);
    const response = await fetch(`https://apifordropment.online/custom/shop/display`, {
      headers: {
        Authorization: params.shop_id, // Set the token in the Authorization header
      },
    });
    const data = await response.json();
    const transformedItems = data.shops.map((itemsdata) => {
      return {
        button1: itemsdata.button1,
        button2: itemsdata.button2,
        button3: itemsdata.button3,
        shop_name: itemsdata.shop_name,
        logo: `https://apifordropment.online/images/${itemsdata.logo}`
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
    const response = await fetch(`https://apifordropment.online/custom/shop/coloring/display/section1`, {
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


  const itemsRef = useRef(null)
  const aboutusRef = useRef(null);
  const contactusRef = useRef(null);

  const scrollToItems = () => {
    if (itemsRef.current) {
      itemsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToaboutus = () => {
    if (aboutusRef.current) {
      aboutusRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTocontactus = () => {
    if (contactusRef.current) {
      contactusRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

    return<Fragment>
  <header className="header-header1" style={{background: color[0]?.backgroundColor1}}>
      <div className="logo-header1">
        {/* Replace 'Logo' with your logo image or component */}
        <img src={items[0]?.logo} alt="Logo" />
      </div>
      <div className="buttons-header1">
        <Link to='/home'>
        <button className="button-header1" style={{backgroundColor: color[0]?.background_color2, border: `2px solid ${color[0]?.background_color3}`, color: color[0]?.font_color2}}>Home</button>
        </Link>
        <button className="button-header1" style={{backgroundColor: color[0]?.background_color2, border: `2px solid ${color[0]?.background_color3}`, color: color[0]?.font_color2}}>Products</button>
        <Link to='/login'>
        <button className="button-header1" style={{backgroundColor: color[0]?.background_color2, border: `2px solid ${color[0]?.background_color3}`, color: color[0]?.font_color2}}>Login</button>
        </Link>      
      </div>
      <div className="shopName-header1">
        <h1 style={{color: color[0]?.font_colour1}}>{items[0]?.shop_name}</h1>
      </div>
    </header>
    </Fragment>
}

export default NavBar1