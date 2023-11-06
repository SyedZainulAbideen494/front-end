import React,{Fragment, useCallback, useState, useEffect} from "react";
import './sections.css'
import { useParams } from "react-router-dom";
import img1 from '../../header/images/Dropment (1).png'

const Section3Buildpreview = () => {
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
       <div className="section-3-build-maindiv-preview">
        <div className="section-3-build-section1-preview">
          <div className="section-3-build-leftcatogory-preview">
            <section className="section-3-build-leftcat1-preview">
              <div className="section-3-build-leftcat1-img-preview"></div>
              <div className="section-3-build-leftcat1-txt-preview">
                <h2>Mens's Wear</h2>
                <button>Shop now</button>
              </div>
            </section>
            <section className="section-3-build-leftcat2-preview">
            <div className="section-3-build-leftcat2-txt-preview">
                <h2>womens's Wear</h2>
                <button>Shop now</button>
              </div>
              <div className="section-3-build-leftcat2-img-preview"></div>
            </section>
          </div>
          <section className="section-3-build-section1-img-right-preview">
            <h2>Trend in 2023</h2>
            <button>Shop Now</button>
          </section>
        </div>
       </div>
    </Fragment>
}

export default Section3Buildpreview