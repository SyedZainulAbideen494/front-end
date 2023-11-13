import React, { Fragment, useCallback, useState, useEffect } from "react";
import './footers.css'
import insta from '../../header/images/icons8-instagram-50.png'
import facebook from '../../header/images/icons8-facebook-logo-50.png'
import linkdin from '../../header/images/icons8-linkedin-logo-50.png'
import x from '../../header/images/icons8-x-50.png'
import whatsapp from '../../header/images/icons8-whatsapp-50.png'
import { useParams } from "react-router-dom";
import Axios from "axios";

const Footer1Footer = () => {
  const [items, setItems] = useState([]);
  const [color, setColor] = useState('');
  const token = localStorage.getItem("token");
  const params = useParams();

  const fetchProductsHandler = useCallback(async () => {
    try {
      const response = await Axios.get(`http://localhost:8080/custom/shop/display/footer`, {
        headers: {
          Authorization: params.shop_id, // Use the 'token' variable here
        },
      });
      const data = response.data;
      const transformedItems = data.shops.map((itemsdata) => ({
        companyname: itemsdata.companyname,
        slogan: itemsdata.slogan,
        insta: itemsdata.insta,
        facebook: itemsdata.facebook,
        twitter: itemsdata.twitter,
        linkdin: itemsdata.linkdin,
        phone: itemsdata.phone,
        email: itemsdata.email,
        whatsapp: itemsdata.whatsapp
      }));
      setItems(transformedItems);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, [token]);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  const fetchColorHandler = useCallback(async () => {
    try {
      const response = await Axios.get(`http://localhost:8080/custom/shop/coloring/display/footer`, {
        headers: {
          Authorization: params.shop_id, // Use the 'token' variable here
        },
      });
      const data = response.data;
      const transformedItems = data.shops.map((itemsdata) => ({
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
      }));
      setColor(transformedItems);
    } catch (error) {
      console.error("Error fetching colors:", error);
    }
  }, [token]);

  useEffect(() => {
    fetchColorHandler();
  }, [fetchColorHandler]);

  const whatsappNumber = 7760372901 || items[0]?.phone; // Removed extra single quote

  const message = ''; // Replace with your desired message

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };


    return<Fragment>
        <footer>
          <div className="footer-1-" style={{backgroundColor: color[0]?.background_colour1}}>
          <div className="footer-1-section-1">
            <h4 style={{color: color[0]?.font_colour1}}>Our company</h4>
            <p style={{color: color[0]?.font_colour2}}>{items[0]?.companyname}</p>
            <p style={{color: color[0]?.font_colour2}}>{items[0]?.slogan}</p>
          </div>
          <div className="footer-1-section-2">
          <h4 style={{color: color[0]?.font_colour1}}>Sections</h4>
            <p style={{color: color[0]?.font_colour2}}>About us</p>
            <p style={{color: color[0]?.font_colour2}}>Products</p>
          </div>
          <div className="footer-1-section-3">
            <h4 style={{color: color[0]?.font_colour1}}>Follow us</h4>
            <a href={items[0]?.insta}>
            <img src={insta}/>
            </a>
            <a href={items[0]?.facebook}>
            <img src={facebook}/>
            </a>
            <a href={items[0]?.twitter}>
            <img src={x}/>
            </a>
            <a href={items[0]?.linkdin}>
            <img src={linkdin}/>
            </a>
          </div>
          <div className="footer-1-section-4">
            <h4 style={{color: color[0]?.font_colour1}}>Contact us</h4>
            <p style={{color: color[0]?.font_colour2}}>Email: {items[0]?.email}</p>
            <p style={{color: color[0]?.font_colour2}}>Phone: {items[0]?.phone}</p>
            <img src={whatsapp} onClick={handleWhatsAppClick}/>
          </div>
          </div>
          <div style={{backgroundColor: color[0]?.background_colour2}}><p style={{color: color[0]?.font_colour3}}>&copy; {new Date().getFullYear()} {items[0]?.companyname}. All rights reserved.</p></div>
        </footer>
    </Fragment>
}

export default Footer1Footer