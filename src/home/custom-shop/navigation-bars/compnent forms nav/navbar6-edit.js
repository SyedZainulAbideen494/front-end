import React, { useState, useCallback, useEffect, Fragment } from 'react';
import '../nav-bars.css';
import  Axios  from 'axios';
import logo from '../../../header/images/drop2_logo.png';
import { useParams } from 'react-router-dom';
import insta from '../../../header/images/icons8-instagram-50.png';
import phonelogo from '../../../header/images/icons8-phone-50.png';

function NavBar6Edit() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sec1, setSec1] = useState(false);
  const [backgroundColor1, setbackgorundColor1] = useState('#fffff'); // Default color is black
  const [backgroundColor2, setbackgorundColor2] = useState('#fffff'); // Default color is black
  const [backgroundColor3, setbackgorundColor3] = useState('#fffff'); // Default color is black
  const [backgroundColor4, setbackgorundColor4] = useState('#fffff'); // Default color is black
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


  const EditMenu = () => {
    const [shop_name, setShop_name] = useState('');
    const [btn1, setButton1] = useState('');
    const [phone, setPhoneNo] = useState('');
    const [instaLink, setInstaLink] = useState('');
    const [shop_blockhead3, setShop_blockhead3] = useState('');
    const [shop_block3, setShop_block3] = useState('');
    const params = useParams();


    
  
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
      window.location.href = `/build/${params.build}/preview/${params.shop_id}/${params.build}`;
  };

    const addColorsHandler = (e) => {
      if (e) {
        e.preventDefault();
      }
      Axios.post(
        "https://apifordropment.online/color/selection/section/1",
        {
          backgroundColor1: backgroundColor1,
          backgroundColor2: backgroundColor2,
          backgroundColor3: backgroundColor3,
          backgroundColor4: backgroundColor4,
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
     
        Axios.post("https://apifordropment.online/add/shop/logo5", formData, {
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
     
            <label>Add your logo</label>
            <input
              type="file"
              placeholder="Logo"
              onChange={(e) => setImage(e.target.files[0])}
            />
     
            <button type="submit">Add Image</button>
          </form>
        </div>
      );
     };


     const addShopHandler = (e) => {
      if (e) {
        e.preventDefault();
      }
      Axios.put(
        "https://apifordropment.online/nav/bar/data",
        {
         shop_name: shop_name,
         btn1: btn1,
         instaLink: instaLink,
         phone: phone
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
    
  
    return (
      <Fragment>
        <div className="edit-menu-container">
          <header>

        <button onClick={handleShowContent} className="edit-conten-btn-edit-component">Edit Content</button>
        <button onClick={handleShowColors}>Edit colors</button>
        <button onClick={handleShowImages}>Add Images</button>
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
              placeholder="Shop name"
              onChange={e => setShop_name(e.target.value)}
            />
          </div>
          <div className="edit-section-input">
            <input
              required
              placeholder="Button 1 (products/services)"
              onChange={e => setButton1(e.target.value)}
            />
          </div>
          <div className="edit-section-input">
            <input
              required
              placeholder="Add your phone number"
              onChange={e => setPhoneNo(e.target.value)}
            />
          </div>
          <div className="edit-section-input">
            <input
              required
              placeholder="Your instagram link"
              onChange={e => setInstaLink(e.target.value)}
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
          <label htmlFor="bgclr2"><h4>background color 1</h4></label>
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
          <label htmlFor="bgclr3"><h4>background color 2</h4></label>
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
          <label htmlFor="bgclr4"><h4>background color 4</h4></label>
        <input
          type="color"
          value={backgroundColor4}
          onChange={handleBackgroundColorChange4}
          style={{ background: 'transparent', border: "none" }}
          id="bgclr4"
        />
        <h4 style={{color: backgroundColor4}}>{backgroundColor4}</h4>
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
  {showImages && 
  <div>
  <Addimage1/>
  </div>
  }
          </div>
      </Fragment>
    );
  };

  const whatsappNumber = items[0]?.phone_header_link || '7760372901'; // Removed extra single quote

  const message = ''; // Replace with your desired message

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Fragment>
      <EditMenu/>
      <header className="header-header-6" style={{backgroundColor: backgroundColor1}}>
    <nav className="nav-header-6">
      <ul className="nav-list-header-6">
        <li className="nav-item-header-6" style={{backgroundColor: backgroundColor2, border: `2px solid ${backgroundColor3}`, color: fontColor2}}>Home</li>
        <li className="nav-item-header-6" style={{backgroundColor: backgroundColor2, border: `2px solid ${backgroundColor3}`, color: fontColor2}}>Products</li>
        <li className="nav-item-header-6" style={{backgroundColor: backgroundColor2, border: `2px solid ${backgroundColor3}`, color: fontColor2}}>Login</li>
      </ul>
    </nav>
  </header>
    </Fragment>
  );
}

export default NavBar6Edit;