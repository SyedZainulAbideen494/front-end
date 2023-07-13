import React,{useCallback, Fragment} from "react";
import insta from '../../home/header/images/download (1).jpg'
import Productsinshopapp from "../items.js/productsApp";
import tick from '../../home/header/images/301-3011315_icon-check-green-tick-transparent-background.png'
import { Link } from "react-router-dom";

const Template3preview = () => {
    return (
      <Fragment>
        <div className="temp3header">
          <header>
            <div className="name">
              <h2>
                shop tagline
                <br />
                <h3>Shop name</h3>
              </h2>
            </div>
            <div className="socials">
              <span className="insta">
                <Link to="https://www.instagram.com/saz_494">
                  <img src={insta} />
                </Link>
              </span>
            </div>
          </header>
        </div>
        <div className="keypoints">
          <div className="keypoint">
            <span className="img">
              <img src={tick} />
            </span>
            <span className="headingforkeypoint">
              <h3>heading</h3>
            </span>
            <span className="keypointtxt">
              <p>details</p>
            </span>
          </div>
          <div className="keypoint">
            <span className="img">
              <img src={tick} />
            </span>
            <span className="headingforkeypoint">
              <h3>Heading</h3>
            </span>
            <span className="keypointtxt">
              <p>details</p>
            </span>
          </div>
          <div className="keypoint">
            <span className="img">
              <img src={tick} />
            </span>
            <span className="headingforkeypoint">
              <h3>heading</h3>
            </span>
            <span className="keypointtxt">
              <p>details</p>
            </span>
          </div>
        </div>
        <hr />
        <div className="aboutsection">
          <section>
            <div className="aboutustxttemp3">
              <h2>About us</h2>
            </div>
            <div className="block1">
              <div className="block1header">
                <h3>heading for your block</h3>
              </div>
              <div className="block1txt">
                <h4>
                  Details about the heading you have written in above heading
                </h4>
              </div>
            </div>
            <div className="block2">
              <div className="block2header">
                <h3>heading for your block</h3>
              </div>
              <div className="block2txt">
                <h4>
                  Details about the heading you have written in above heading
                </h4>
              </div>
            </div>
            <div className="block3">
              <div className="block3header">
                <h3>heading for your block</h3>
              </div>
              <div className="block3txt">
                <h4>
                  Details about the heading you have written in above heading
                </h4>
              </div>
            </div>
          </section>
        </div>
        <hr />
        <div className="prodstemp3">
          <div className="prodstxt">
            <h2>Our Products</h2>
            <div className="prodstemp2">
              <Productsinshopapp />
            </div>
          </div>
        </div>
        <div className="footertemp3">
          <footer>
            <div className="contacttxttemp3">
              <h3>Contact us</h3>
            </div>
            <div className="contactli">
              <ul>
                <li>Email: Your email</li>
                <li>phone no: Your phone number</li>
              </ul>
            </div>
          </footer>
        </div>
      </Fragment>
    );
}

export default Template3preview