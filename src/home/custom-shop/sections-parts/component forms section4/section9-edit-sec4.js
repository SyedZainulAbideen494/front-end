import React,{Fragment, useCallback, useState, useEffect} from "react";
import '../sections.css'
import { useParams } from "react-router-dom";
import img1 from '../../../header/images/Dropment (1).png'
import  Axios  from "axios";

const Section9BuildEditSec4 = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sec1, setSec1] = useState(false);
  const [backgroundColor1, setbackgorundColor1] = useState('#fffff'); // Default color is black
  const [backgroundColor2, setbackgorundColor2] = useState('#fffff'); // Default color is black
  const [backgroundColor3, setbackgorundColor3] = useState('#fffff'); // Default color is black
  const [backgroundColor4, setbackgorundColor4] = useState('#fffff'); // Default color is black
  const [backgroundColor5, setbackgorundColor5] = useState('#fffff'); // Default color is black
  const [fontColor1, setfontColor1] = useState('#000000'); // Default color is black
  const [fontColor2, setfontColor2] = useState('#000000'); // Default color is black
  const [fontColor3, setfontColor3] = useState('#000000'); // Default color is black
  const [fontColor4, setfontColor4] = useState('#000000'); // Default color is black
  const [fontColor5, setfontColor5] = useState('#000000'); // Default color is black
  const [fontColor6, setfontColor6] = useState('#000000'); // Default color is black
  const [showContent, setShowContent] = useState(true)
  const [showColors, setShowColors] = useState(false)
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
        "https://apifordropment.online/section4/data",
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
    const handleBackgroundColorChange4 = (event) => {
      setbackgorundColor4(event.target.value);
    };
    const handleBackgroundColorChange5 = (event) => {
      setbackgorundColor5(event.target.value);
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
      if (params.build === '5') {
        window.location.href = `/build/${params.build}/footer/${params.shop_id}/${params.build}`;
      }if  (params.build === 'edit') {
        window.location.href = `/build/${params.build}/preview/${params.shop_id}/`;
      } else {
        window.location.href = `/build/${params.build}/step5/${params.shop_id}/${params.build}`;
      }
    };

    const addColorsHandler = () => {
      Axios.post(
        "https://apifordropment.online/color/selection/section/4",
        {
          backgroundColor1: backgroundColor1,
          backgroundColor2: backgroundColor2,
          backgroundColor3: backgroundColor3,
          backgroundColor4: backgroundColor4,
          backgroundColor5: backgroundColor5,
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
    
        <button onClick={handleShowContent} className="edit-conten-btn-edit-component">Edit Content</button>
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
          <div className="edit-section-input">
            <input
              required
              placeholder="Text 1"
              onChange={e => setShop_block1(e.target.value)}
            />
          </div>
          <div className="edit-section-input">
            <input
              required
              placeholder="Heading 2"
              onChange={e => setShop_blockhead2(e.target.value)}
            />
          </div>
          <div className="edit-section-input">
            <input
              required
              placeholder="Text 2"
              onChange={e => setShop_block2(e.target.value)}
            />
          </div>
          <div className="edit-section-input">
            <input
              required
              placeholder="Heading 3"
              onChange={e => setShop_blockhead3(e.target.value)}
            />
          </div>
          <div className="edit-section-input">
            <input
              required
              placeholder="Text 3"
              onChange={e => setShop_block3(e.target.value)}
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
          <label htmlFor="bgclr3"><h4>background color 3</h4></label>
        <input
          type="color"
          value={backgroundColor3}
          onChange={handleBackgroundColorChange3}
          style={{ background: 'transparent', border: "none" }}
          id="bgclr3"
        />
        <h4 style={{color: backgroundColor3}}>{backgroundColor3}</h4>
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
      <div className="color-palette">
          <label htmlFor="fc3"><h4>font color 3</h4></label>
        <input
          type="color"
          value={fontColor3}
          onChange={handleFontColorChange3}
          style={{ background: 'transparent', border: "none" }}
          id="fc3"
        />
        <h4 style={{color: fontColor3}}>{fontColor3}</h4>
      </div>
      <div className="color-palette">
          <label htmlFor="fc4"><h4>font color 4</h4></label>
        <input
          type="color"
          value={fontColor4}
          onChange={handleFontColorChange4}
          style={{ background: 'transparent', border: "none" }}
          id="fc4"
        />
        <h4 style={{color: fontColor4}}>{fontColor4}</h4>
      </div>
      <div className="color-palette">
          <label htmlFor="fc5"><h4>font color 5</h4></label>
        <input
          type="color"
          value={fontColor5}
          onChange={handleFontColorChange5}
          style={{ background: 'transparent', border: "none" }}
          id="fc5"
        />
        <h4 style={{color: fontColor5}}>{fontColor5}</h4>
      </div>
      <div className="color-palette">
          <label htmlFor="fc6"><h4>font color 6</h4></label>
        <input
          type="color"
          value={fontColor6}
          onChange={handleFontColorChange6}
          style={{ background: 'transparent', border: "none" }}
          id="fc6"
        />
        <h4 style={{color: fontColor6}}>{fontColor6}</h4>
      </div>
      <button type="submit">Set Color</button>
      <button onClick={NextStep}>Next</button>
        </form>
  }
  {showImages && 
  <div>
  <Addimage1/>
  <Addimage2/>
  <Addimage3/>
  </div>
  }
        </div>
      </Fragment>
    );
  };

    return<Fragment>
      <EditMenu/>
       <div className="section-9-build-main-div">
        <div className="section-9-build-section1" style={{backgroundColor: backgroundColor1}}>
            <section>
                <h1 style={{color: fontColor1}}>heading</h1>
                <p style={{color: fontColor2}}>The serene forest enveloped in an emerald cloak
                    whispered secrets to the breeze. Birds sang
                    harmoniously, nature's orchestra playing a 
                    timeless symphony under the tranquil, azure sky.</p>
                    
            </section>
        </div>
        <div className="section-9-build-section2" style={{backgroundColor: backgroundColor2}}>
            <section>
                <h1 style={{color:fontColor3}}>heading</h1>
                <p style={{color: fontColor4}}>The serene forest enveloped in an emerald cloak
                    whispered secrets to the breeze. Birds sang
                    harmoniously, nature's orchestra playing a 
                    timeless symphony under the tranquil, azure sky.</p>
                    
            </section>
        </div>
        <div className="section-9-build-section1" style={{backgroundColor: backgroundColor3}}>
            <section>
                <h1 style={{color:fontColor5}}>heading</h1>
                <p style={{color: fontColor6}}>The serene forest enveloped in an emerald cloak
                    whispered secrets to the breeze. Birds sang
                    harmoniously, nature's orchestra playing a 
                    timeless symphony under the tranquil, azure sky.</p>
                   
            </section>
        </div>
       </div>
    </Fragment>
}

export default Section9BuildEditSec4