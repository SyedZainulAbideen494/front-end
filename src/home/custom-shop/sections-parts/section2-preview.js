import React,{Fragment, useCallback, useState, useEffect} from "react";
import './sections.css'
import { useParams } from "react-router-dom";
import img1 from '../../header/images/Dropment (1).png'

const Section2Buildpreview = () => {
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
        <div className="section2-buildright-preview">
          <div className="section1-section-1build-preview">
            <section className="section1-section-1build-text-preview">
                <h2>Text 1</h2>
                <p>Text 2</p>
            </section>
            <section className="section1-section-1build-image-preview"></section>
          </div>
          <div className="section2-section-1build-preview">         
            <section className="section2-section-1build-text-preview">
                <h2>Text 3</h2>
                <p>Text 4</p>
            </section>
            <section className="section2-section-1build-image-preview"></section>
          </div>
          <div className="section3-section-1build-preview">
            <section className="section3-section-1build-text-preview">
                <h2>Text 5</h2>
                <p>Text 6</p>
            </section>
            <section className="section3-section-1build-image-preview"></section>
          </div>
        </div>
    </Fragment>
}

export default Section2Buildpreview