import React,{useCallback, useEffect, useState, Fragment, useRef} from 'react';
import './nav-bars.css';
import { useParams, Link } from 'react-router-dom';
import logo from '../../header/images/drop2_logo.png'

const NavBar2 = () => {
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
        <header className="header-header2" style={{background: color[0]?.backgroundColor1}}>
      <div className="logo-header2">
        <h1 style={{color: color[0]?.font_colour1}}>{items[0]?.shop_name}</h1>
      </div>
      <nav className="nav-header2">
        <ul className="nav-list-header2">
          <li className="nav-item-header2" style={{backgroundColor: color[0]?.background_color2, border: `2px solid ${color[0]?.background_color3}`, color: color[0]?.font_color2}}>Products</li>
          <Link to='/login'>
          <li className="nav-item-header2" style={{backgroundColor: color[0]?.background_color2, border: `2px solid ${color[0]?.background_color3}`, color: color[0]?.font_color2}}>Login</li>
          </Link>
          <li className="nav-item-header2" style={{backgroundColor: color[0]?.background_color2, border: `2px solid ${color[0]?.background_color3}`, color: color[0]?.font_color2}}>Shop</li>
        </ul>
      </nav>
    </header>
    </Fragment>
}

export default NavBar2