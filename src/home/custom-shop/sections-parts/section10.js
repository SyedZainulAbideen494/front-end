import React,{Fragment, useCallback, useState, useEffect} from "react";
import './sections.css'
import { useParams } from "react-router-dom";
import img1 from '../../header/images/Dropment (1).png'

const Section10Build = () => {
    const [items, setItems] = useState([]);
    const [color, setColor] = useState('')
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
          shop_blockhead1: itemsdata.shop_blockhead1,
          shop_block1: itemsdata.shop_block1,
          shop_blockhead2: itemsdata.shop_blockhead2,
          shop_block2: itemsdata.shop_block2,
          shop_blockhead3: itemsdata.shop_blockhead3,
          shop_block3: itemsdata.shop_block3,
          images2: `https://apifordropment.online/images/${itemsdata.images1}`,
          images3: `https://apifordropment.online/images/${itemsdata.images2}`,
          images4: `https://apifordropment.online/images/${itemsdata.images3}`
        };
      });
      setItems(transformedItems);
      setLoading(false);
    }, [params.shop_id]);
  
    useEffect(() => {
      fetchProductsHandler();
    }, [fetchProductsHandler]);

    const heroStyle1 = {
      backgroundImage: `url(${items.length > 0 ? items[0].images2 : ''})`,
    };

    const heroStyle2 = {
      backgroundImage: `url(${items.length > 0 ? items[0].images3 : ''})`,
    };

    const heroStyle3 = {
      backgroundImage: `url(${items.length > 0 ? items[0].images4 : ''})`,
    };

    const fetchColorHandler = useCallback(async () => {
      setLoading(true);
      const response = await fetch(`https://apifordropment.online/custom/shop/coloring/display/section3`, {
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
        <div className="section-10-main-div" style={{backgroundColor: color[0]?.background_colour1}}>
            <div className="section-10-section1" style={heroStyle1}></div>
            <div className="section-10-section2">
                <h1 style={{color: color[0]?.font_colour1}}>{items[0]?.shop_blockhead1}</h1>
                <p style={{color: color[0]?.font_colour2}}>{items[0]?.shop_block1}</p>
                <button style={{backgroundColor: color[0]?.background_colour2, border: `1px solid ${color[0]?.background_colour2}`, color: color[0]?.font_colour3}}>Read more</button>
            </div>
        </div>
    </Fragment> 
}

export default Section10Build