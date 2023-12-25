import React,{Fragment, useCallback, useState, useEffect} from "react";
import './footers.css'
import insta from '../../header/images/icons8-instagram-50.png'
import facebook from '../../header/images/icons8-facebook-logo-50.png'
import linkdin from '../../header/images/icons8-linkedin-logo-50.png'
import x from '../../header/images/icons8-x-50.png'
import whatsapp from '../../header/images/icons8-whatsapp-50.png'
import { useParams } from "react-router-dom";

const Footer1 = () => {
    const [items, setItems] = useState([]);
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
          insta: itemsdata.insta,
          shop_phone: itemsdata.shop_phone,
          shop_email: itemsdata.shop_email,
          othersocials: itemsdata.othersocials
        };
      });
      setItems(transformedItems);
      setLoading(false);
    }, [params.shop_id]);
  
    useEffect(() => {
      fetchProductsHandler();
    }, [fetchProductsHandler]);


    return<Fragment>
        <footer>
          <div className="footer-1-">
          <div className="footer-1-section-1">
            <h4>Our company</h4>
            <p>Company name</p>
            <p>Slogan</p>
          </div>
          <div className="footer-1-section-2">
          <h4>Sections</h4>
            <p>About us</p>
            <p>Products</p>
          </div>
          <div className="footer-1-section-3">
            <h4>Follow us</h4>
            <img src={insta}/>
            <img src={facebook}/>
            <img src={x}/>
            <img src={linkdin}/>
          </div>
          <div className="footer-1-section-4">
            <h4>Contact us</h4>
            <p>Email: you@gmail.com</p>
            <p>Phone: (123) 456-7890</p>
            <img src={whatsapp}/>
          </div>
          </div>
          <div style={{textAlign: 'center'}}><p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p></div>
        </footer>
    </Fragment>
}

export default Footer1