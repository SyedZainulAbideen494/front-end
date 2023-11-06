import React,{Fragment, useCallback, useState, useEffect} from "react";
import './footers.css'
import { useParams } from "react-router-dom";

const Footer1 = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
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
            <li>{items[0]?.insta || '@instagram'}</li>
            <li>{items[0]?.shop_email || 'you@gmail.com'}</li>
            <li>{items[0]?.shop_phone || '84629472058'}</li>
            <li>{items[0]?.othersocials ||'other Socials'}</li>
        </footer>
    </Fragment>
}

export default Footer1