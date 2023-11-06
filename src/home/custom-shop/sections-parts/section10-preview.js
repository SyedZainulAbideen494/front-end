import React,{Fragment, useCallback, useState, useEffect} from "react";
import './sections.css'
import { useParams } from "react-router-dom";
import img1 from '../../header/images/Dropment (1).png'

const Section10Buildpreview = () => {
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
    return<Fragment>
        <div className="section-10-main-div-preview">
            <div className="section-10-section1"></div>
            <div className="section-10-section2">
                <h1>Welcome</h1>
                <p>Welcome to Dropment, your one-stop solution for 
                    creating and managing online shops with ease.
                     Customize your unique storefront, collaborate 
                     with others, and engage with your customers 
                     through our social features. Whether you're an 
                     entrepreneur or a small business, we're here to 
                     help you succeed in the world of e-commerce.</p>
                     <button>Read more</button>
            </div>
        </div>
    </Fragment> 
}

export default Section10Buildpreview