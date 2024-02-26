import { useParams, Link, useNavigate } from "react-router-dom";
import { Fragment, useState, useEffect, useCallback } from "react";
import Axios from "axios";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import Productsapp from "../items.js/productsApp";
import Linkdin from '../../home/header/images/icons8-linkedin-logo-50.png'
import instagram from '../header/images/icons8-facebook-logo-50.png'
import twitter from '../../home/header/images/icons8-x-50.png'
import pinterst from '../header/images/icons8-pinterest-logo-50 (2).png'
import Spinnerui from "../UI/spinner";

const Editbtndisplay = () => {
  const nav = useNavigate();
  const params = useParams();
  const [showedititem, setshowitem] = useState(false);

  const [auth, setauth] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setauth(true);
    } else {
      setauth(false);
    }
  }, []);
  if (auth === false) {
    nav("/login");
  }

  const showedit = () => {
    setshowitem(prevState => !prevState);
  };
  const hideedit = () => {
    setshowitem(false);
  };
  const [name, setname] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const fetchUsersHandler = async () => {
      setloading(true);
      try {
        const response = await fetch(
          `https://apifordropment.online/user/id/editbtndiaplay1`,
          {
            headers: {
              Authorization: params.shop_id,
            },
          }
        );
        const data = await response.json();
        const transformedUser = data.shops.map((userdata) => {
          return {
            user_id: userdata.user_id,
            country: userdata.country
          };
        });
        setname(transformedUser);
      } catch (error) {
        console.error(error);
      } finally {
        setloading(false);
      }
    };

    fetchUsersHandler();
  }, [params.shop_id]);

  useEffect(() => {
    const fetchUser2sHandler = async () => {
      setloading(true);
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          "https://apifordropment.online/user/id/editbtndiaplay2",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        const data = await response.json();
        const transformedUser2 = data.user.map((userdata) => {
          return {
            user_id: userdata.user_id,
          };
        });
        setname(transformedUser2);
      } catch (error) {
        console.error(error);
      } finally {
        setloading(false);
      }
    };

    fetchUser2sHandler();
  }, []);


  const deleteproduct = async () => {
    try {
      const response = await Axios.delete(`https://apifordropment.online/product/delete/${params.id}`);
      // Check if deletion was successful
      if (response.status === 200) {
        // Redirect to /home route
        nav('/home');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  const EEditbtn = () => {
    if (
      name.length > 0 &&
      name.length > 0 &&
      name[0].user_id === name[0].user_id
    ) {
      return<Fragment>
      <h2 style={{ color: 'white' }}>Admin Menu</h2>
      <div style={{ backgroundColor: '#333', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <button style={{ backgroundColor: 'red', marginRight: '5px', color: 'white', border: 'none', borderRadius: '5px', padding: '8px 16px', cursor: 'pointer' }} onClick={deleteproduct}>Delete Product</button>
        <Link to={`/item/edit/${params.id}`}>
        <button style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid white', borderRadius: '5px', padding: '8px 16px', cursor: 'pointer' }}>Edit</button>
        </Link>
      </div>
    </Fragment>
    } else {
      return <h2></h2>;
    }
  };

  return (
    <div>
      {!loading ? <EEditbtn /> : <p>Loading...</p>}
      {showedititem && <div><Edititemform /><Addimges/></div>}
    </div>
  );
};



const Edititemform = () => {
  const params = useParams();

  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const [amount, setamount] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.put(
        "https://apifordropment.online/updateprods",
        {
          title: title,
          price: price,
          amount: amount,
        },
        {
          headers: {
            Authorization: params.id,
          },
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage("Error updating data.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          placeholder="Enter title"
        />
        <input
          type="text"
          value={price}
          onChange={(e) => setprice(e.target.value)}
          placeholder="price"
        />
        <input
          type="text"
          value={amount}
          onChange={(e) => setamount(e.target.value)}
          placeholder="amount"
        />
        <button type="submit">Update</button>
        
      </form>
      <p>{message}</p>
    </div>
  );
};

const Addimges = () => {
  return<Fragment>
        <Addimage2/>
        <Addimage3/>
        <Addimage4/>
        <Addimage5/>
        <Addimage6/>
  </Fragment>
}

const Addimage2 = (props) => {
  const [image, setImage] = useState(null);
 
  const shopId = props.shop_id; // Assuming you're passing shopId as a prop
 
  const params = useParams();
 
  const Addimage1Handler = (e) => {
    e.preventDefault();
 
    const formData = new FormData();
    formData.append("image", image);
 
    Axios.post("https://apifordropment.online/addprodsimg2", formData, {
      headers: {
        Authorization: params.id,
      },
    })
      .then((response) => {
        console.log(response.data);
        // Handle success
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        // Handle error
      });
  };
 
  return (
    <div>
      <h2>ADD Image 2</h2>
      <form onSubmit={Addimage1Handler}>
 
        <label>Image 2</label>
        <input
          type="file"
          placeholder="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
 
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
 };
 
 const Addimage3 = (props) => {
  const [image, setImage] = useState(null);
 
  const shopId = props.shop_id; // Assuming you're passing shopId as a prop
 
  const params = useParams();
 
  const Addimage1Handler = (e) => {
    e.preventDefault();
 
    const formData = new FormData();
    formData.append("image", image);
 
    Axios.post("https://apifordropment.online/addprodsimg3", formData, {
      headers: {
        Authorization: params.id,
      },
    })
      .then((response) => {
        console.log(response.data);
        // Handle success
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        // Handle error
      });
  };
 
  return (
    <div>
      <h2>ADD Image 3</h2>
      <form onSubmit={Addimage1Handler}>
 
        <label>Image 3</label>
        <input
          type="file"
          placeholder="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
 
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
 };
 
 const Addimage4 = (props) => {
  const [image, setImage] = useState(null);
 
  const shopId = props.shop_id; // Assuming you're passing shopId as a prop
 
  const params = useParams();
 
  const Addimage1Handler = (e) => {
    e.preventDefault();
 
    const formData = new FormData();
    formData.append("image", image);
 
    Axios.post("https://apifordropment.online/addprodsimg4", formData, {
      headers: {
        Authorization: params.id,
      },
    })
      .then((response) => {
        console.log(response.data);
        // Handle success
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        // Handle error
      });
  };
 
  return (
    <div>
      <h2>ADD Image 4</h2>
      <form onSubmit={Addimage1Handler}>
 
        <label>Image 4</label>
        <input
          type="file"
          placeholder="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
 
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
 };
 
 const Addimage5 = (props) => {
  const [image, setImage] = useState(null);
 
  const shopId = props.shop_id; // Assuming you're passing shopId as a prop
 
  const params = useParams();
 
  const Addimage1Handler = (e) => {
    e.preventDefault();
 
    const formData = new FormData();
    formData.append("image", image);
 
    Axios.post("https://apifordropment.online/addprodsimg5", formData, {
      headers: {
        Authorization: params.id,
      },
    })
      .then((response) => {
        console.log(response.data);
        // Handle success
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        // Handle error
      });
  };
 
  return (
    <div>
      <h2>ADD Image 5</h2>
      <form onSubmit={Addimage1Handler}>
 
        <label>Image 5</label>
        <input
          type="file"
          placeholder="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
 
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
 };
 
 const Addimage6 = (props) => {
  const [image, setImage] = useState(null);
 
  const shopId = props.shop_id; // Assuming you're passing shopId as a prop
 
  const params = useParams();
 
  const Addimage1Handler = (e) => {
    e.preventDefault();
 
    const formData = new FormData();
    formData.append("image", image);
 
    Axios.post("https://apifordropment.online/addprodsimg6", formData, {
      headers: {
        Authorization: params.id,
      },
    })
      .then((response) => {
        console.log(response.data);
        // Handle success
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        // Handle error
      });
  };
 
  return (
    <div>
      <h2>ADD Image 6</h2>
      <form onSubmit={Addimage1Handler}>
 
        <label>Image 6</label>
        <input
          type="file"
          placeholder="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
 
        <button type="submit">Add Image</button>
      </form>
    </div>
  );
 };


 

function Prodsright() {
  const [orderform, setOrderForm] = useState(false);
  const [items, setItems] = useState([]);
  const [shops, setShops] = useState([]);
  const [users, setUsers] = useState([]);
  const [paymentlink, setPaymentLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [img1, setimg1] = useState(true)
  const [img2, setimg2] = useState(false)
  const [img3, setimg3] = useState(false)
  const [img4, setimg4] = useState(false)
  const [img5, setimg5] = useState(false)
  const [img6, setimg6] = useState(false)
  const params = useParams();

  const orderOpenHandler = () => {
    setOrderForm(true);
  };

  const orderCloseHandler = () => {
    setOrderForm(false);
  };

  const [showedititem, setShowItem] = useState(false);

  const showEdit = () => {
    setShowItem(true);
  };

  const hideEdit = () => {
    setShowItem(false);
  };

  const showmg1 = () => {
    setimg1(true)
    setimg2(false)
    setimg3(false)
    setimg4(false)
    setimg5(false)
    setimg6(false)
  }
  const showmg2 = () => {
    setimg1(false)
    setimg2(true)
    setimg3(false)
    setimg4(false)
    setimg5(false)
    setimg6(false)
  }
  const showmg3 = () => {
    setimg1(false)
    setimg2(false)
    setimg3(true)
    setimg4(false)
    setimg5(false)
    setimg6(false)
  }
  const showmg4 = () => {
    setimg1(false)
    setimg2(false)
    setimg3(false)
    setimg4(true)
    setimg5(false)
    setimg6(false)
  }
  const showmg5 = () => {
    setimg1(false)
    setimg2(false)
    setimg3(false)
    setimg4(false)
    setimg5(true)
    setimg6(false)
  }
  const showmg6 = () => {
    setimg1(false)
    setimg2(false)
    setimg3(false)
    setimg4(false)
    setimg5(false)
    setimg6(true)
  }

  const fetchProdshandler = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://apifordropment.online/imgprods/`, {
        headers: {
          Authorization: params.id,
        },
      });
      const data = await response.json();
      const transformedItems = data.img.map((itemsdata) => ({
        images: `https://apifordropment.online/images/${itemsdata.images}`,
        images2: `https://apifordropment.online/images/${itemsdata.images2}`,
        images3: `https://apifordropment.online/images/${itemsdata.images3}`,
        images4: `https://apifordropment.online/images/${itemsdata.images4}`,
        images5: `https://apifordropment.online/images/${itemsdata.images5}`,
        images6: `https://apifordropment.online/images/${itemsdata.images6}`,
        title: itemsdata.title,
        price: itemsdata.price,
        description: itemsdata.product_description,
        id: itemsdata.id,
        shop_id: itemsdata.shop_id,
        usd: itemsdata.usd,
        EUR: itemsdata.EUR,
        GBP: itemsdata.GBP,
        JPY: itemsdata.JPY,
        CAD: itemsdata.CAD,
        AUD: itemsdata.AUD,
        CHF: itemsdata.CHF,
        CNY: itemsdata.CNY,
        INR: itemsdata.INR,
        BRL: itemsdata.BRL,
        RUB: itemsdata.RUB,
        KRW: itemsdata.KRW,
        SGD: itemsdata.SGD,
        NZD: itemsdata.NZD,
        MXN: itemsdata.MXN,
        HKD: itemsdata.HKD,
        TRY: itemsdata.TRY,
        ZAR: itemsdata.ZAR,
        SEK: itemsdata.SEK,
        NOK: itemsdata.NOK,
      }));
      setItems(transformedItems);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [params.id]);

  const fetchshopdata = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://apifordropment.online/prods/details/shop/details`, {
        headers: {
          Authorization: items[0]?.shop_id,
        },
      });
      const data = await response.json();
      const transformedItems = data.shops.map((itemsdata) => ({
        shop_name: itemsdata.shop_name,
        shop_owner: itemsdata.shop_owner,
        shop_id: itemsdata.shop_id,
        user_id: itemsdata.user_id
      }));
      setShops(transformedItems);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [items[0]?.shop_id]);

  const fetchuserdata = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://apifordropment.online/user/details/shop/details`, {
        headers: {
          Authorization: shops[0]?.user_id,
        },
      });
      const data = await response.json();
      const transformedItems = data.users.map((itemsdata) => ({
        user_id: itemsdata.user_id,
        first_name: itemsdata.first_name
      }));
      setUsers(transformedItems);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [shops[0]?.user_id]);

  const fetchProdspayhandler = useCallback(async () => {
    try {
      const response = await fetch(`https://apifordropment.online/imgprods/`, {
        headers: {
          Authorization: params.id,
        },
      });
      const data = await response.json();
      const payment = data.img[0]?.payment || '';
      setPaymentLink(payment);
    } catch (error) {
      console.error(error);
    }
  }, [params.id]);

  useEffect(() => {
    fetchProdshandler();
    fetchProdspayhandler();
    fetchshopdata()
    fetchuserdata()
  }, [fetchProdshandler, fetchProdspayhandler, fetchshopdata, fetchuserdata]);

  const Showimg1 = () => {
    return<Fragment>
      <img src={items[0]?.images} alt="image1" className="imgdetailsprodsimgs"/>
    </Fragment>
  }
  const Showimg2 = () => {
    return<Fragment>
      <img src={items[0]?.images2} alt="image2" className="imgdetailsprodsimgs"/>
    </Fragment>
  }
  const Showimg3 = () => {
    return<Fragment>
      <img src={items[0]?.images3} alt="image3" className="imgdetailsprodsimgs"/>
    </Fragment>
  }
  const Showimg4 = () => {
    return<Fragment>
      <img src={items[0]?.images4} alt="image4" className="imgdetailsprodsimgs"/>
    </Fragment>
  }
  const Showimg5 = () => {
    return<Fragment>
      <img src={items[0]?.images5} alt="image5" className="imgdetailsprodsimgs"/>
    </Fragment>
  }
  const Showimg6 = () => {
    return<Fragment>
      <img src={items[0]?.images6} alt="imag6" className="imgdetailsprodsimgs"/>
    </Fragment>
  }

  const Linkno = (props) => {
    if (shops[0]?.temp1 !== null) {
      return "/mystore1";
    } else if (shops[0]?.temp2 !== null) {
      return "/mystore2";
    } else if (shops[0]?.temp3 !== null) {
      return "/mystore3";
    } else if (shops[0]?.temp4 !== null) {
      return "/mystore4";
    } else if (shops[0]?.temp5 !== null) {
      return "/mystore5";
    } else if (shops[0]?.temp6 !== null) {
      return "/mystore6";
    } else if (shops[0]?.temp7 !== null) {
      return "/mystore7";
    } 
    else if (shops[0]?.temp8 !== null) {
      return "/mystore8";
    } 
  };
  const currentUrl = window.location.href;
  const ShareButton = ({ url, title, description, imageUrl }) => {
    const shareOnInstagram = () => {
      const instagramShareURL = `https://www.instagram.com/?url=${encodeURIComponent(imageUrl)}&caption=${encodeURIComponent(title + ' - ' + description)}`;
      
      window.open(instagramShareURL, '_blank');
    };
    return (
      <div className="sharing-prods-socials">
        <header>
      {/* Share on LinkedIn */}
      <LinkedinShareButton
        url={`Link to buy: ${url}`}
        title={`Check out: ${title}`}
        summary={description}
        source={imageUrl}
      >
        <img src={Linkdin}/>
      </LinkedinShareButton>
    
      {/* Share on Facebook */}
      <FacebookShareButton
        url={`Link to buy: ${url}`}
        quote={`Check out: ${title}. Buy now!`}
        hashtag="#YourHashtag"
        image={imageUrl}
      >
        <img src={instagram}/>
      </FacebookShareButton>
    
      {/* Share on Twitter */}
      <TwitterShareButton
        url={`Link to buy: ${url}`}
        title={`Check out: ${title}. Buy now!`}
        hashtags={['product', 'dropment', 'dropmentStores']}
        via="SyedZain_saz"
        image={imageUrl}
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
      title: items[0]?.title,
      description: items[0]?.description,
      imageUrl: items[0]?.images,
    };
    const ProductWithPinterestButton = () => {
      const currentUrl = window.location.href;
    
      const itemss = [
        {
          title: items[0]?.title,
      description: items[0]?.description,
      images: items[0]?.images,
        },
      ];
    
      const handlePinterestShare = () => {
        if (window.PinUtils) {
          window.PinUtils.pinOne({
            url: currentUrl,
            title: itemss[0]?.title,
            description: itemss[0]?.description,
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
        <h3>Share this product</h3>
        <ShareButton {...product} />
        <ProductWithPinterestButton />
        <CopyURL/>
      </header>
    </div>
    );
  };
  const [showShare, setShowShare] = useState(false);

  const toggleShare = () => {
    setShowShare(!showShare);
  };
  const CopyURL = () => {
    const [copied, setCopied] = useState(false);
    const currentUrl = window.location.href;
  
    const copyCurrentURL = () => {
      navigator.clipboard.writeText(currentUrl)
        .then(() => setCopied(true))
        .catch((err) => console.error('Failed to copy: ', err));
  
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    };
  
    return (
      <div className="url-container">
        <input
          type="text"
          value={currentUrl}
          readOnly
          className="url-input"
        />
        <button onClick={copyCurrentURL} className={`copy-button ${copied ? 'copied' : ''}`}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    );
  };
  const [name, setName] = useState([]);
  const Pricing = () => {
    if (name[0]?.country === "India") {
      return <h3>{items[0]?.INR} ₹</h3>;
    } else if (name[0]?.country === "europe") {
      return <h3>{items[0]?.EUR} €</h3>;
    } else if (name[0]?.country === "united kingdom") {
      return <h3>{items[0]?.GBP} £</h3>;
    } else if (name[0]?.country === "japan") {
      return <h3>{items[0]?.JPY} ¥</h3>;
    } else if (name[0]?.country === "canada") {
      return <h3>{items[0]?.CAD} CAD</h3>;
    } else if (name[0]?.country === "australia") {
      return <h3>{items[0]?.AUD} AUD</h3>;
    } else if (name[0]?.country === "switzerland") {
      return <h3>{items[0]?.CHF} Fr</h3>;
    } else if (name[0]?.country === "china") {
      return <h3>{items[0]?.CNY} ¥</h3>;
    } else if (name[0]?.country === "brazil") {
      return <h3>{items[0]?.BRL} R$</h3>;
    } else if (name[0]?.country === "south korea") {
      return <h3>{items[0]?.KRW} ₩</h3>;
    } else if (name[0]?.country === "singapore") {
      return <h3>{items[0]?.SGD} SGD</h3>;
    } else if (name[0]?.country === "new zealand") {
      return <h3>{items[0]?.NZD} NZD</h3>;
    } else if (name[0]?.country === "mexico") {
      return <h3>{items[0]?.MXN} MXN</h3>;
    } else if (name[0]?.country === "hong kong") {
      return <h3>{items[0]?.HKD} HKD</h3>;
    } else if (name[0]?.country === "turkey") {
      return <h3>{items[0]?.TRY} ₺</h3>;
    } else if (name[0]?.country === "south africa") {
      return <h3>{items[0]?.ZAR} R</h3>;
    } else if (name[0]?.country === "sweden") {
      return <h3>{items[0]?.SEK} kr</h3>;
    } else if (name[0]?.country === "norway") {
      return <h3>{items[0]?.NOK} kr</h3>;
    } else {
      return <h3>{items[0]?.USD} $</h3>;
    }
  };

  

  const fetchUsersHandler = useCallback(async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    
    try {
      const response = await fetch("https://apifordropment.online/users/", {
        headers: {
          Authorization: token,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data.");
      }

      const data = await response.json();
      const transformedUsers = data.user.map((userData) => {
        return {
          first_name: userData.first_name,
          last_name: userData.last_name,
          country: userData.country,
        };
      });

      setName(transformedUsers);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsersHandler();
  }, [fetchUsersHandler]);
  return (
    <Fragment>
  <div className="product-page">
    <Editbtndisplay/>
    <div className="product-header">
      <header>
        <div className="product-buttons">
          <span className="product-btn">
            <Link to="/">
              <button className="back-button">Back</button>
            </Link>
          </span>
          <span>
      <button onClick={toggleShare} className="back-button">
        Share
      </button>
      {showShare && <YourComponent />}
    </span>
        </div>
      </header>
    </div>
    <div className="product-details">
      <div className="product-images">
        {loading ? (
          <div className="loading-image"><Spinnerui/></div>
        ) : (
          <>
            <section className="product-image-section">
            {img1 && <Showimg1 />}
            {img2 && <Showimg2 />}
            {img3 && <Showimg3 />}
            {img4 && <Showimg4 />}
            {img5 && <Showimg5 />}
            {img6 && <Showimg6 />}
            </section>
            <div className="image-change-buttons">
            <button className="image-button" onClick={showmg1}>Image 1</button>
        <button className="image-button" onClick={showmg2}>Image 2</button>
        <button className="image-button" onClick={showmg3}>Image 3</button>
        <button className="image-button" onClick={showmg4}>Image 4</button>
        <button className="image-button" onClick={showmg5}>Image 5</button>
        <button className="image-button" onClick={showmg6}>Image 6</button>
            </div>
          </>
        )}
      </div>

      <div className="product-info">
        <div className="product-title">
          <h2>{items[0]?.title}</h2>
        </div>
        
        <p>Item by <Link
        to={`${Linkno(shops)}/${shops[0]?.shop_id}/${shops[0]?.shop_name}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >{shops[0]?.shop_name}</Link></p>
        
        
         <p>Shop by <Link
        to={`/user/${users[0]?.user_id}/`}
        style={{ textDecoration: 'none', color: 'black' }}
      >{users[0]?.first_name}</Link></p>
          
        <div className="product-amount">
          <h3>Price:<Pricing/></h3>
          
        </div>
        <div className="product-description">{items[0]?.description}</div>
        <div className="product-buttons">
          <Link to={`/orders/${params.id}/${params.shop_id}/${items[0]?.title}`}>
          <button className="buy-button">
            Buy Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</Fragment>
  );
}

export default Prodsright;