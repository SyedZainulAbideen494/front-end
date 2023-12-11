import React,{Fragment, useCallback, useState, useEffect} from "react";
import './headers.css'
import img from '../../header/images/Dropment (1).png'
import { useParams } from "react-router-dom";

const Header1Preview = () => {
    const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
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
        salestext: itemsdata.salestext,
        shop_tagline: itemsdata.shop_tagline,
        images1: `https://apifordropment.online/images/${itemsdata.images1}`
      };
    });
    setItems(transformedItems);
    setLoading(false);
  }, [params.shop_id]);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);
    return<Fragment>
         <div className="header1-build">
            <header>
                <section className="textheadersection1-build">
                    <h2>{items[0]?.shop_tagline || 'Fake it, till you make it'}</h2>
                    <h1>{items[0]?.salestext || '25% off winter sale'}</h1>
                </section>
                <section className="imgsheadersection1-build">
  <img src={img} alt="Image Alt Text" />
</section>
            </header>
         </div>
    </Fragment>
}
export default Header1Preview