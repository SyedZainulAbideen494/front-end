import React,{Fragment, useCallback, useState, useEffect} from "react";
import './sections.css'
import { useParams } from "react-router-dom";
import img1 from '../../header/images/Dropment (1).png'

const Section1Buildpreview = () => {
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
        <div className="section1-buildright">
            <section className="section1buildrighttext">
                <h2>Header</h2>
                <p>The sun cast a warm glow over the serene meadow as a 
                  gentle breeze rustled the wildflowers. Birds sang melodies
                   from the treetops, creating a symphony of nature. Nearby, 
                   a babbling brook sparkled under the midday sun, inviting
                    anyone to dip their feet in and embrace the tranquility 
                    of the moment.</p>
            </section>
            <section className="imgrightsection1build">
                <img src={img1}/>
            </section>
        </div>
        <div className="section1-buildleft">
        <section className="imgleftsection1build">
                <img src={img1}/>
            </section>
            <section className="section1buildlefttext">
                <h2>Header</h2>
                <p>The sun cast a warm glow over the serene meadow as a gentle 
                  breeze rustled the wildflowers. Birds sang melodies from the treetops, 
                  creating a symphony of nature. Nearby, a babbling brook sparkled under
                   the midday sun, inviting anyone to dip their feet in and embrace the 
                   tranquility of the moment.</p>
            </section>
        </div>
        <div className="section1-buildright">
            <section className="section1buildrighttext">
                <h2>Header</h2>
                <p>The sun cast a warm glow over the serene meadow as a gentle breeze rustled the
                   wildflowers. Birds sang melodies from the treetops, creating a symphony of nature.
                    Nearby, a babbling brook sparkled under the midday sun, inviting anyone to dip their 
                    feet in and embrace the tranquility of the moment.</p>
            </section>
            <section className="imgrightsection1build">
                <img src={img1}/>
            </section>
        </div>
    </Fragment>
}

export default Section1Buildpreview