import React, { useState, useCallback, useEffect, useRef } from 'react';
import './nav-bars.css';
import logo from '../../header/images/drop2_logo.png';
import { useParams } from 'react-router-dom';
import insta from '../../header/images/icons8-instagram-50.png';
import phonelogo from '../../header/images/icons8-phone-50.png';

function NavBar6() {
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

  const whatsappNumber = items[0]?.phone_header_link || '7760372901'; // Removed extra single quote

  const message = ''; // Replace with your desired message

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  
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


  return (
    <div className='nav-bar6-header' style={{backgroundColor: color[0]?.background_colour1}}>
      <header className='nav-bar6'>
        <section className='section1-nav-bar-6'>
          <a href={items[0]?.instagram_link || 'https://www.instagram.com/saz_494/'}>
            <img src={insta} alt="Instagram" />
          </a>
          <img src={phonelogo} onClick={handleWhatsAppClick} alt="Phone" />
        </section>
        <section className='section2-nav-bar-6'>
            <button onClick={scrollToItems} style={{color: color[0]?.font_colour1, border: `2px solid ${color[0]?.background_colour2}`, backgroundColor: color[0]?.background_colour3}}>{items[0]?.button1 || 'button1'}</button>
            <img src={items[0]?.logo || logo}/>
            <button onClick={scrollToaboutus} style={{color: color[0]?.font_colour1, border: `2px solid ${color[0]?.background_colour2}`, backgroundColor: color[0]?.background_colour3}}>About us</button>
        </section>
      </header>
    </div>
  );
}

export default NavBar6;