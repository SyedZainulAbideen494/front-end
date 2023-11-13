import React, { useState, useEffect, useCallback } from 'react';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';

const ShareButton = ({ url, title, description }) => {
  return (
    <div>
      <FacebookShareButton url={url} quote={title}>
        Share on Facebook
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title}>
        Share on Twitter
      </TwitterShareButton>

      <LinkedinShareButton url={url} title={title} summary={description}>
        Share on LinkedIn
      </LinkedinShareButton>
    </div>
  );
};
function StripeApp() {
  const [items, setItems] = useState([]);
  const [params, setParams] = useState({ id: 'yourAuthorizationTokenHere' });

  const fetchProdsHandler = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:8080/imgprods/`, {
        headers: {
          Authorization: params.id,
        },
      });
      const data = await response.json();
      const transformedItems = data.img.map((itemsdata) => ({
        images: `http://localhost:8080/images/${itemsdata.images}`,
        title: itemsdata.title,
        product_description: itemsdata.product_description,
        id: itemsdata.id,
        shop_id: itemsdata.shop_id,
      }));
      setItems(transformedItems);
    } catch (error) {
      console.error(error);
    }
  }, [params.id]);

  useEffect(() => {
    fetchProdsHandler();
  }, [fetchProdsHandler]);

  const currentUrl = window.location.href;


  // Assuming `items` is now populated
  const product = {
    url: currentUrl,
    title: items[0]?.title,
    description: items[0]?.product_description,
  };

  return (
    <div>
      <h1>Your Product Details</h1>
      <ShareButton {...product} />
    </div>
  );
};

export default StripeApp;