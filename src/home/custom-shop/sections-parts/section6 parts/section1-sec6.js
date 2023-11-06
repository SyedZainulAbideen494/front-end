import React,{Fragment, useCallback, useState, useEffect} from "react";
import '../sections.css'
import { useParams } from "react-router-dom";

const Section1BuildSec6 = () => {
    const [items, setItems] = useState([]);
    const [img, setimg] = useState([]);
    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState('')
    const token = localStorage.getItem("token");
    const params = useParams();
    
    const fetchProductsHandler = useCallback(async () => {
      setLoading(true);
      const response = await fetch(`http://localhost:8080/section6/display`, {
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
        };
      });
      setItems(transformedItems);
      setLoading(false);
    }, [params.shop_id]);
  
    useEffect(() => {
      fetchProductsHandler();
    }, [fetchProductsHandler]);

    const fetctimgHandler = useCallback(async () => {
      setLoading(true);
      const response = await fetch(`http://localhost:8080/custom/shop/display`, {
        headers: {
          Authorization: params.shop_id, // Set the token in the Authorization header
        },
      });
      const data = await response.json();
      const transformedItems = data.shops.map((itemsdata) => {
        return {
          images2: `http://localhost:8080/images/${itemsdata.images10}`,
          images3: `http://localhost:8080/images/${itemsdata.images11}`,
          images4: `http://localhost:8080/images/${itemsdata.images12}`
        };
      });
      setimg(transformedItems);
      setLoading(false);
    }, [params.shop_id]);
  
    useEffect(() => {
      fetctimgHandler();
    }, [fetctimgHandler]);


    const fetchColorHandler = useCallback(async () => {
      setLoading(true);
      const response = await fetch(`http://localhost:8080/custom/shop/coloring/display/section6`, {
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
      <div style={{backgroundColor: color[0]?.background_colour1}}>
        <div className="section1-buildright">
            <section className="section1buildrighttext">
                <h2 style={{color: color[0]?.font_colour1}}>{items[0]?.shop_blockhead1 || 'Header'}</h2>
                <p style={{color: color[0]?.font_colour2}}>{items[0]?.shop_block1 ||'The sun cast a warm glow over the serene meadow as a gentle breeze rustled the wildflowers. Birds sang melodies from the treetops, creating a symphony of nature. Nearby, a babbling brook sparkled under the midday sun, inviting anyone to dip their feet in and embrace the tranquility of the moment.'}</p>
            </section>
            <section className="imgrightsection1build">
                <img src={img[0]?.images2}/>
            </section>
        </div>
        <div className="section1-buildleft">
        <section className="imgleftsection1build">
                <img src={img[0]?.images3}/>
            </section>
            <section className="section1buildlefttext">
                <h2 style={{color: color[0]?.font_colour3}}>{items[0]?.shop_blockhead2 || 'Header'}</h2>
                <p style={{color: color[0]?.font_colour4}}>{items[0]?.shop_block2 || 'The sun cast a warm glow over the serene meadow as a gentle breeze rustled the wildflowers. Birds sang melodies from the treetops, creating a symphony of nature. Nearby, a babbling brook sparkled under the midday sun, inviting anyone to dip their feet in and embrace the tranquility of the moment.'}</p>
            </section>
        </div>
        <div className="section1-buildright">
            <section className="section1buildrighttext">
                <h2>{items[0]?.shop_blockhead3 || 'Header'}</h2>
                <p>{items[0]?.shop_block3 || 'The sun cast a warm glow over the serene meadow as a gentle breeze rustled the wildflowers. Birds sang melodies from the treetops, creating a symphony of nature. Nearby, a babbling brook sparkled under the midday sun, inviting anyone to dip their feet in and embrace the tranquility of the moment.'}</p>
            </section>
            <section className="imgrightsection1build">
                <img src={img[0]?.images4}/>
            </section>
        </div>
        </div>
    </Fragment>
}

export default Section1BuildSec6