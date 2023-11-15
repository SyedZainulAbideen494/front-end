import { useParams, Link, useNavigate } from "react-router-dom";
import { Fragment, useState, useEffect, useCallback } from "react";
import Axios from "axios";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import Productsapp from "../items.js/productsApp";
import Linkdin from '../../home/header/images/icons8-linkedin-logo-50.png'
import instagram from '../header/images/icons8-facebook-logo-50.png'
import twitter from '../../home/header/images/icons8-x-50.png'
import pinterst from '../header/images/icons8-pinterest-logo-50 (2).png'
import Confetti from 'react-confetti';
import logo from '../header/images/drop2_logo.png'

const FinishCustomShopBuild = () => {
    const [items, setitems] = useState([]);
  const [loading, setloading] = useState(false);
  const params = useParams()
  const token = localStorage.getItem("token");
  const fetchprodshandler = useCallback(async () => {
    setloading(true);
    const response = await fetch("http://localhost:8080/prods/details/shop/details", {
      headers: {
        Authorization: params.shop_id,
      },
    });
    const data = await response.json();
    const transformedItems = data.shops.map((itemsdata) => {
      return {
        shop_id: itemsdata.shop_id,
        shop_name: itemsdata.shop_name,
        temp: itemsdata.temp,
        build: itemsdata.build,
        logo: `http://localhost:8080/images/${itemsdata.logo}`,
      };
    });
    setitems(transformedItems);
    setloading(false);
  }, []);

  useEffect(() => {
    fetchprodshandler();
  }, []);

  const handleViewShop = useCallback(() => {
    window.location.href = `/mystore/${params.shop_id}/${items[0]?.shop_name}`;
    console.log("View Shop clicked!");
  }, []);  const currentUrl = window.location.href;
  const ShareButton = () => {
    return (
      <div className="sharing-prods-socials">
        <header>
      {/* Share on LinkedIn */}
      <LinkedinShareButton
        url={`check it out: ${currentUrl}`}
        title={`My new dropment shop! ${items[0]?.shop_name}`}
        source={items[0]?.logo}
      >
        <img src={Linkdin}/>
      </LinkedinShareButton>
    
      {/* Share on Facebook */}
      <FacebookShareButton
        url={`check it out: ${currentUrl}`}
        quote={`My new dropment shop! - ${items[0]?.shop_name}.`}
        hashtag="#MyNewDropmentShop"
        image={items[0]?.logo}
      >
        <img src={instagram}/>
      </FacebookShareButton>
    
      {/* Share on Twitter */}
      <TwitterShareButton
        url={`Check it out: ${currentUrl}`}
        title={`My new dropment shop! - ${items[0]?.shop_name}.`}
        hashtags={['newdropmentshop', 'dropment', 'dropmentStores']}
        via="SyedZain_saz"
        image={items[0]?.logo}
      >
        <img src={twitter}/>
      </TwitterShareButton>
      </header>
    </div>
    );
  };
  
  const YourComponent = () => {
    const currentUrl = window.location.href;
  
    // Assuming `items` is now populated
    const product = {
      url: currentUrl,
      title: items[0]?.shop_name,
      imageUrl: items[0]?.logo,
    };
    const ProductWithPinterestButton = () => {
      const currentUrl = window.location.href;
    
      const itemss = [
        {
          title: items[0]?.shop_name,
      images: items[0]?.logo,
        },
      ];
    
      const handlePinterestShare = () => {
        if (window.PinUtils) {
          window.PinUtils.pinOne({
            url: currentUrl,
            title: itemss[0]?.title,
            imageUrl: itemss[0]?.images,
          });
        } else {
          console.error('Pinterest SDK not loaded');
        }
      };
    
      useEffect(() => {
        // Load Pinterest JavaScript SDK dynamically
        const script = document.createElement('script');
        script.defer = true;
        script.async = true;
        script.src = 'https://assets.pinterest.com/js/pinit.js';
    
        script.onload = () => {
          console.log('Pinterest SDK loaded');
        };
    
        script.onerror = () => {
          console.error('Failed to load Pinterest SDK');
        };
    
        document.head.appendChild(script);
    
        return () => {
          // Remove the script element only if it was successfully appended
          if (document.head.contains(script)) {
            document.head.removeChild(script);
          }
        };
      }, []); // Empty dependency array ensures the effect runs only once
    
      return (
        <div className="sharing-prods-socials">
          <img onClick={handlePinterestShare} src={pinterst}/>
        </div>
      );
    };
    return (
      <div className="header-social-share-prods-2">
        <header>
        <h3>Share on</h3>
        <ShareButton {...product} />
        <ProductWithPinterestButton/>
        </header>
      </div>
    );
  };

  return (
    <>
    <div className="maindiv-finish-page-custom-shop" style={{ backgroundColor: 'black', minHeight: '100vh' }}>
      <div className="shop-finish-custom-header-1">
        <header>
          {/* YourComponent goes here */}
          <img src={logo} alt="Dropment Logo" className="finish-shop-custom-build-dropment-logo"/>
          <YourComponent/>
        </header>
      </div>
      <div className="middle-content-finish-custom-build-shop">
        <Confetti />
        <h1 >Congratulations!</h1>
        <p>Your new shop {items[0]?.shop_name} is ready<br/>Check it out</p>
        <button onClick={handleViewShop}>View Shop</button>
      </div>
    </div>
  </>
  );
}

export default FinishCustomShopBuild;