import React,{Fragment} from "react";
import Productsinshopapp from "../items.js/productsApp";

const Temp2preview = () => {
      return (
        <Fragment>
          <div className="headerstore1">
            <header>
              <div className="headerinlinelelments">
                <span className="headertxtname">
                  <h1>Shop name</h1>
                </span>
              </div>
            </header>
          </div>
          <div className="imgheaderfashion">
            <header>
              <h2>Your tagline</h2>
            </header>
          </div>
          <div className="prodssection">
            <section>
              <div className="prodstxt1212">
                <hr />
                <h2>Products</h2>
                <Productsinshopapp />
              </div>
            </section>
            <hr />
          </div>
          <div className="aboutussection">
            <section>
              <div className="aboutustxtheading">
                <h2>About us</h2>
              </div>
              <div className="aboutusblock1">
                <h2>About your shop heading 1</h2>
                <h3>
                  Write details about what you have written in the heading above
                </h3>
              </div>
              <div className="block2">
                <h2>About your shop heading 2</h2>
                <h3>
                  Write details about what you have written in the heading above
                </h3>
              </div>
              <div className="block3">
                <h2>About your shop heading 3</h2>
                <h3>
                  Write details about what you have written in the heading above
                </h3>
              </div>
            </section>
          </div>
        </Fragment>
      );
}

export default Temp2preview