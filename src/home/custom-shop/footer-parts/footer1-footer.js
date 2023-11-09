import React,{Fragment, useCallback, useState, useEffect} from "react";
import './footers.css'
import insta from '../../header/images/instagram_logo.png'
import facebook from '../../header/images/facebook_logo.png'
import linkdin from '../../header/images/linkdin_logo.png'
import x from '../../header/images/x.png'
import whatsapp from '../../header/images/@amo_amigurumis _ Linktree.jpg'
import { useParams } from "react-router-dom";

const Footer1Footer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState('')
  const token = localStorage.getItem("token");
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
        shop_blockhead1: itemsdata.shop_blockhead1,
        shop_block1: itemsdata.shop_block1,
        shop_blockhead2: itemsdata.shop_blockhead2,
        shop_block2: itemsdata.shop_block2,
        shop_blockhead3: itemsdata.shop_blockhead3,
        shop_block3: itemsdata.shop_block3,
        images2: `http://localhost:8080/images/${itemsdata.images2}`,
        images3: `http://localhost:8080/images/${itemsdata.images3}`,
        images4: `http://localhost:8080/images/${itemsdata.images4}`
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
    const response = await fetch(`http://localhost:8080/custom/shop/coloring/display/section3`, {
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
          <div><p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p></div>
        </footer>
    </Fragment>
}

export default Footer1Footer