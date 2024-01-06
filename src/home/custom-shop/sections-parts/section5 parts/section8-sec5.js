import React,{Fragment, useCallback, useState, useEffect} from "react";
import '../sections.css'
import { useParams, Link } from "react-router-dom";

const Section8BuildSec5 = () => {
  const [items, setItems] = useState([]);
  const [img, setimg] = useState([])
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState('')
  const token = localStorage.getItem("token");
  const params = useParams();
  
  const fetchImgHandler = useCallback(async () => {
    setLoading(true);
    const response = await fetch(`https://apifordropment.online/custom/shop/display`, {
      headers: {
        Authorization: params.shop_id, // Set the token in the Authorization header
      },
    });
    const data = await response.json();
    const transformedItems = data.shops.map((itemsdata) => {
      return {
        images2: `https://apifordropment.online/images/${itemsdata.images7}`,
        images3: `https://apifordropment.online/images/${itemsdata.images8}`,
        images4: `https://apifordropment.online/images/${itemsdata.images9}`
      };
    });
    setimg(transformedItems);
    setLoading(false);
  }, [params.shop_id]);

  useEffect(() => {
    fetchImgHandler();
  }, [fetchImgHandler]);

  const fetchProductsHandler = useCallback(async () => {
    setLoading(true);
    const response = await fetch(`https://apifordropment.online/section5/display`, {
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
              <li key={index} style={{backgroundColor: color[0]?.background_colour1}}>
                <div className="productimgtemp3">
                  <img src={props.images} alt="Product Image" />
                </div>
                <div className="product__titletemp3">
                  <p style={{color: color[0]?.ont_colour3}}>{props.title}</p>
                </div>
                <Pricing country={user.country}  style={{color: color[0]?.font_colour5, border: `2px solid ${color[0]?.background_colour2}`, backgroundColor: color[0]?.background_colour3}}/>
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
     

      const fetchColorHandler = useCallback(async () => {
        setLoading(true);
        const response = await fetch(`https://apifordropment.online/custom/shop/coloring/display/section5`, {
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
        <div className="main-div-section-5-build">
            <div className="section-5-build-txt-top">
                <h1 style={{color: color[0]?.font_colour1}}>Our products</h1>
                <p style={{color: color[0]?.font_colour2}}>{items[0]?.shop_blockhead1 || "View from our latest collection"}</p>
            </div>
            <Productsinshopapp/>
        </div>
    </Fragment>
}

export default Section8BuildSec5