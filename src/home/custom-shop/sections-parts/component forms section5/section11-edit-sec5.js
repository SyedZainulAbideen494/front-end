import React,{Fragment, useCallback, useState, useEffect} from "react";
import '../sections.css'
import { useParams, Link } from "react-router-dom";
import  Axios  from "axios";
import img1 from '../../../header/images/24 Products For People Who Don’t Know What The Heck To Do With Makeup.jpg'
import img2 from '../../../header/images/34 Holy Grail Beauty Products I Think You Should Know About.jpg'
import img3 from '../../../header/images/Myprotein Impact Whey Protein (Mango Alphonso, 1 Kg).jpg'



const Section11BuildEditSec5 = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sec1, setSec1] = useState(false);
  const [backgroundColor1, setbackgorundColor1] = useState('#fffff'); // Default color is black
  const [backgroundColor2, setbackgorundColor2] = useState('#fffff'); // Default color is black
  const [backgroundColor3, setbackgorundColor3] = useState('#fffff'); // Default color is black
  const [fontColor1, setfontColor1] = useState('#000000'); // Default color is black
  const [fontColor2, setfontColor2] = useState('#000000'); // Default color is black
  const [fontColor3, setfontColor3] = useState('#000000'); // Default color is black
  const [fontColor4, setfontColor4] = useState('#000000'); // Default color is black
  const [fontColor5, setfontColor5] = useState('#000000'); // Default color is black
  const [fontColor6, setfontColor6] = useState('#000000'); // Default color is black
  const [showContent, setShowContent] = useState(false)
  const [showColors, setShowColors] = useState(true)
  const [showImages, setShowImages] = useState(false)
  const token = localStorage.getItem("token");
  const params = useParams();

  const fetchProductsHandler = useCallback(async () => {
    setLoading(true);
    try {
      const response = await Axios.get(`https://apifordropment.online/custom/shop/display`, {
        headers: {
          Authorization: params.shop_id,
        },
      });
      const data = response.data;
      const transformedItems = data.shops.map(itemsdata => ({
        shop_blockhead1: itemsdata.shop_blockhead1,
        shop_block1: itemsdata.shop_block1,
        shop_blockhead2: itemsdata.shop_blockhead2,
        shop_block2: itemsdata.shop_block2,
        shop_blockhead3: itemsdata.shop_blockhead3,
        shop_block3: itemsdata.shop_block3,
        images2: `https://apifordropment.online/images/${itemsdata.images2}`,
        images3: `https://apifordropment.online/images/${itemsdata.images3}`,
        images4: `https://apifordropment.online/images/${itemsdata.images4}`,
      }));
      setItems(transformedItems);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
    }
  }, [params.shop_id]);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  const EditMenu = () => {
    const [shop_blockhead1, setShop_blockhead1] = useState('');
    const [shop_block1, setShop_block1] = useState('');
    const [shop_blockhead2, setShop_blockhead2] = useState('');
    const [shop_block2, setShop_block2] = useState('');
    const [shop_blockhead3, setShop_blockhead3] = useState('');
    const [shop_block3, setShop_block3] = useState('');
    const params = useParams();

    const addShopHandler = () => {
      Axios.post(
        "https://apifordropment.online/section5/data",
        {
          shop_blockhead1: shop_blockhead1,
          shop_block1: shop_block1,
          shop_blockhead2: shop_blockhead2,
          shop_block2: shop_block2,
          shop_blockhead3: shop_blockhead3,
          shop_block3: shop_block3
        },
        {
          headers: {
            Authorization: params.shop_id
          }
        }
      )
      .then(response => {
        if (response.status === 200) {
          console.log('Operation succeeded');
        } else {
          console.log('Operation failed');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    };
    
  
    const handleBackgroundColorChange1 = (event) => {
      setbackgorundColor1(event.target.value);
    };
    const handleBackgroundColorChange2 = (event) => {
      setbackgorundColor2(event.target.value);
    };
    const handleBackgroundColorChange3 = (event) => {
      setbackgorundColor3(event.target.value);
    };
    const handleFontColorChange1 = (event) => {
      setfontColor1(event.target.value);
    };
    const handleFontColorChange2 = (event) => {
      setfontColor2(event.target.value);
    };
    const handleFontColorChange3 = (event) => {
      setfontColor3(event.target.value);
    };
    const handleFontColorChange4 = (event) => {
      setfontColor4(event.target.value);
    };
    const handleFontColorChange5 = (event) => {
      setfontColor5(event.target.value);
    };
    const handleFontColorChange6 = (event) => {
      setfontColor6(event.target.value);
    };

       const NextStep = () => {
        window.location.href = `/build/${params.build}/preview/${params.shop_id}`;
    };

    const addColorsHandler = () => {
      Axios.post(
        "https://apifordropment.online/color/selection/section/5",
        {
          backgroundColor1: backgroundColor1,
          backgroundColor2: backgroundColor2,
          backgroundColor3: backgroundColor3,
          fontColor1: fontColor1,
          fontColor2: fontColor2,
          fontColor3: fontColor3,
          fontColor4: fontColor4,
          fontColor5: fontColor5,
          fontColor6: fontColor6 
        },
        {
          headers: {
            Authorization: params.shop_id
          }
        }
      )
      .then(response => {
        if (response.status === 200) {
          console.log('Operation succeeded');
        } else {
          console.log('Operation failed');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    };

    const handleShowColors = () => {
      setShowColors(true)
      setShowContent(false)
      setShowImages(false)
    }

    const handleShowContent = () => {
      setShowContent(true)
      setShowColors(false)
      setShowImages(false)
    }
    const handleShowImages = () => {
      setShowContent(false)
      setShowColors(false)
      setShowImages(true)
    }

    const Addimage1 = (props) => {
      const [image, setImage] = useState(null);
     
      const shopId = props.shop_id; // Assuming you're passing shopId as a prop
     
      const params = useParams();
     
      const Addimage1Handler = (e) => {
        e.preventDefault();
     
        const formData = new FormData();
        formData.append("image", image);
     
        Axios.post("https://apifordropment.online/addshopimg4", formData, {
          headers: {
            Authorization: params.shop_id,
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
        <div className="ImagesEditsectionElement">
  
          <form onSubmit={Addimage1Handler}>
     
            <label>Image 1</label>
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
     const Addimage2 = (props) => {
      const [image, setImage] = useState(null);
     
      const shopId = props.shop_id; // Assuming you're passing shopId as a prop
     
      const params = useParams();
     
      const Addimage1Handler = (e) => {
        e.preventDefault();
     
        const formData = new FormData();
        formData.append("image", image);
     
        Axios.post("https://apifordropment.online/addshopimg5", formData, {
          headers: {
            Authorization: params.shop_id,
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
        <div className="ImagesEditsectionElement">

          <form onSubmit={Addimage1Handler}>
     
            <label>Image 2</label>
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
     const Addimage3 = (props) => {
      const [image, setImage] = useState(null);
     
      const shopId = props.shop_id; // Assuming you're passing shopId as a prop
     
      const params = useParams();
     
      const Addimage1Handler = (e) => {
        e.preventDefault();
     
        const formData = new FormData();
        formData.append("image", image);
     
        Axios.post("https://apifordropment.online/addshopimg6", formData, {
          headers: {
            Authorization: params.shop_id,
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
        <div className="ImagesEditsectionElement">
  
          <form onSubmit={Addimage1Handler}>
     
            <label>Image 3</label>
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
  
    return (
      <Fragment>
        <div className="edit-menu-container">
          <header>
     
        <button onClick={handleShowColors}>Edit colors</button>
        </header>
        {showContent &&
               <form onSubmit={(e) => {
          e.preventDefault(); // Ensure form doesn't trigger default browser action
          addShopHandler(); // Call the function to handle shop data submission
        }}>
          <div className="edit-section-inp-txt">
          <div className="edit-section-input">
            <input
              required
              placeholder="Heading 1"
              onChange={e => setShop_blockhead1(e.target.value)}
            />
          </div>
          </div>
          <button type="submit">save</button>
          <button onClick={NextStep}>Next</button>
        </form>
  }
        {showColors && 
               <form onSubmit={(e) => {
                e.preventDefault(); // Ensure form doesn't trigger default browser action
                addColorsHandler(); // Call the function to handle shop data submission
              }}>
        <div className="color-palette">
          <label htmlFor="bgclr1"><h4>background color 1</h4></label>
        <input
          type="color"
          value={backgroundColor1}
          onChange={handleBackgroundColorChange1}
          style={{ background: 'transparent', border: "none" }}
          id="bgclr1"
        />
        <h4 style={{color: backgroundColor1}}>{backgroundColor1}</h4>
      </div>
      <div className="color-palette">
          <label htmlFor="bgclr2"><h4>background color 2</h4></label>
        <input
          type="color"
          value={backgroundColor2}
          onChange={handleBackgroundColorChange2}
          style={{ background: 'transparent', border: "none" }}
          id="bgclr2"
        />
        <h4 style={{color: backgroundColor2}}>{backgroundColor2}</h4>
      </div>
      <div className="color-palette">
          <label htmlFor="fc1"><h4>font color 1</h4></label>
        <input
          type="color"
          value={fontColor1}
          onChange={handleFontColorChange1}
          style={{ background: 'transparent', border: "none" }}
          id="fc1"
        />
        <h4 style={{color: fontColor1}}>{fontColor1}</h4>
      </div>
      <div className="color-palette">
          <label htmlFor="fc2"><h4>font color 2</h4></label>
        <input
          type="color"
          value={fontColor2}
          onChange={handleFontColorChange2}
          style={{ background: 'transparent', border: "none" }}
          id="fc2"
        />
        <h4 style={{color: fontColor2}}>{fontColor2}</h4>
      </div>
      <button type="submit">Set Color</button>
      <button onClick={NextStep}>Next</button>
        </form>
  }
        </div>
      </Fragment>
    );
  };

    function Productsinshopapp() {
        const [items, setItems] = useState([]);
        const [loading, setLoading] = useState(false);
        const params = useParams();
      
        const fetchProductsHandler = useCallback(async () => {
          setLoading(true);
      
          try {
            const response = await fetch("https://apifordropment.online/use/shops/products", {
              headers: {
                Authorization: params.shop_id,
              },
            });
      
            if (!response.ok) {
              throw new Error("Failed to fetch products.");
            }
      
            const data = await response.json();
            const transformedItems = data.items.map((itemsData) => {
              return {
                id: itemsData.id,
                title: itemsData.title,
                price: itemsData.price,
                amount: itemsData.quantity,
                shop_id: itemsData.shop_id,
                images: `https://apifordropment.online/images/${itemsData.images}`,
                usd: itemsData.usd,
                EUR: itemsData.EUR,
                GBP: itemsData.GBP,
                JPY: itemsData.JPY,
                CAD: itemsData.CAD,
                AUD: itemsData.AUD,
                CHF: itemsData.CHF,
                CNY: itemsData.CNY,
                INR: itemsData.INR,
                BRL: itemsData.BRL,
                RUB: itemsData.RUB,
                KRW: itemsData.KRW,
                SGD: itemsData.SGD,
                NZD: itemsData.NZD,
                MXN: itemsData.MXN,
                HKD: itemsData.HKD,
                TRY: itemsData.TRY,
                ZAR: itemsData.ZAR,
                SEK: itemsData.SEK,
                NOK: itemsData.NOK,
              };
            });
      
            setItems(transformedItems);
          } catch (error) {
            console.log(error);
          }
      
          setLoading(false);
        }, []);
      
        useEffect(() => {
          fetchProductsHandler();
        }, [fetchProductsHandler]);
      
        return (
          <Fragment>
            <section>
              {!loading ? <ProductList items={items} /> : <p>Loading..</p>}
            </section>
          </Fragment>
        );
      }

      const Products = (props) => {
        const Pricing = ({ country }) => {
          if (country === "India") {
            return <h3>{props.INR} ₹</h3>;
          } else if (country === "europe") {
            return <h3>{props.EUR} €</h3>;
          } else if (country === "united kingdom") {
            return <h3>{props.GBP} £</h3>;
          } else if (country === "japan") {
            return <h3>{props.JPY} ¥</h3>;
          } else if (country === "canada") {
            return <h3>{props.CAD} CAD</h3>;
          } else if (country === "australia") {
            return <h3>{props.AUD} AUD</h3>;
          } else if (country === "switzerland") {
            return <h3>{props.CHF} Fr</h3>;
          } else if (country === "china") {
            return <h3>{props.CNY} ¥</h3>;
          } else if (country === "brazil") {
            return <h3>{props.BRL} R$</h3>;
          } else if (country === "south korea") {
            return <h3>{props.KRW} ₩</h3>;
          } else if (country === "singapore") {
            return <h3>{props.SGD} SGD</h3>;
          } else if (country === "new zealand") {
            return <h3>{props.NZD} NZD</h3>;
          } else if (country === "mexico") {
            return <h3>{props.MXN} MXN</h3>;
          } else if (country === "hong kong") {
            return <h3>{props.HKD} HKD</h3>;
          } else if (country === "turkey") {
            return <h3>{props.TRY} ₺</h3>;
          } else if (country === "south africa") {
            return <h3>{props.ZAR} R</h3>;
          } else if (country === "sweden") {
            return <h3>{props.SEK} kr</h3>;
          } else if (country === "norway") {
            return <h3>{props.NOK} kr</h3>;
          } else {
            return <h3>{props.USD} $</h3>;
          }
        };
      
        const [name, setName] = useState([]);
        const [loading, setLoading] = useState(false);
      
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
          <div className="productmodeltemp3">
            {name.map((user, index) => (
              <li key={index}>
                <div className="productimgtemp3">
                  <img src={props.images} alt="Product Image" />
                </div>
                <div className="product__titletemp3">
                  <h2>{props.title}</h2>
                </div>
                <Pricing country={user.country} />
              </li>
            ))}
          </div>
        );
      };
      
      const ProductList = (props) => {
        return (
          <div className="productmodelul">
            <ul>
              {props.items.map((item) => (
                <div key={item.id}>
                  <Link
                   to={`/products/${item.id}/${item.shop_id}`}
                  >
                    <Products
                      id={item.id}
                      title={item.title}
                      amount={item.amount}
                      price={item.price}
                      shop_id={item.shop_id}
                      images={item.images}
                      payment={item.payment}
                      usd={item.usd}
                      EUR={item.EUR}
                      GBP={item.GBP}
                      JPY={item.JPY}
                      CAD={item.CAD}
                      AUD={item.AUD}
                      CHF={item.CHF}
                      CNY={item.CNY}
                      INR={item.INR}
                      BRL={item.BRL}
                      RUB={item.RUB}
                      KRW={item.KRW}
                      SGD={item.SGD}
                      NZD={item.NZD}
                      MXN={item.MXN}
                      HKD={item.HKD}
                      TRY={item.TRY}
                      ZAR={item.ZAR}
                      SEK={item.SEK}
                      NOK={item.NOK}
                    />
                  </Link>
                </div>
              ))}
            </ul>
          </div>
        );
      };
      const DummyProducts = () => {
        return (
          <div className="section-11-build-main-div-prods">
          <li className="main-main-div-prods-section-11-build" style={{backgroundColor: backgroundColor1}}>
            <div className="section-11-build-products-img">
              <img src={img1} alt="Product Image" />
            </div>
            <div className="section-11-build-prods-details">
              <p style={{color: fontColor1}}>Title</p>
              
              <button style={{backgroundColor: backgroundColor2, border:`1px solid ${backgroundColor2}`, color: fontColor2}}>$434 Buy Now</button>
            </div>
          </li>
          <li className="main-main-div-prods-section-11-build" style={{backgroundColor: backgroundColor1}}>
            <div className="section-11-build-products-img">
              <img src={img2} alt="Product Image" />
            </div>
            <div className="section-11-build-prods-details">
              <p style={{color: fontColor1}}>Title</p>
              
              <button style={{backgroundColor: backgroundColor2, border:`1px solid ${backgroundColor2}`, color: fontColor2}}>$434 Buy Now</button>
            </div>
          </li>
          <li className="main-main-div-prods-section-11-build" style={{backgroundColor: backgroundColor1}}>
            <div className="section-11-build-products-img">
              <img src={img3} alt="Product Image" />
            </div>
            <div className="section-11-build-prods-details">
              <p style={{color: fontColor1}}>Title</p>
              
              <button style={{backgroundColor: backgroundColor2, border:`1px solid ${backgroundColor2}`, color: fontColor2}}>$434 Buy Now</button>
            </div>
          </li>
        </div>
          );
      }


    return<Fragment>
      <EditMenu/>
        <div className="main-div-section-11-build">
            <DummyProducts/>
        </div>
    </Fragment>
}

export default Section11BuildEditSec5