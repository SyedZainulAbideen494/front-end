import React,{Fragment, useState} from "react";
import { Link } from "react-router-dom";
import './contacts.css'

const Contact = () => {
    return (
      <Fragment>
        <div className="contact">
          <div className="contacthead">
            <h2>Contact us</h2>
          </div>
          <div className="contacts">
            <ul>
              <li>sazmanufacurer@gmail.com</li>
              <li>7760372901</li>
              <Link to="https://www.instagram.com/saz_494/">
                <li>instagram</li>
              </Link>
            </ul>
          </div>
        </div>
      </Fragment>
    );
}

export default Contact