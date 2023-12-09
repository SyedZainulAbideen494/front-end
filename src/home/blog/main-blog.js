import React,{Fragment, useCallback} from "react";
import './blog.css'
import logo from '../header/images/drop2_logo.png'
import { Link } from "react-router-dom";

const MainBlog = () => {
    return<Fragment>
       <div class="main-div-blog">
    <div class="header-blog">
        <header>
            <nav class="nav-blog">
                <img src={logo} alt="Dropment Logo" class="logo"/>
                <ul class="nav-links">
                    <Link to='/login'>
                    <li><a>Login</a></li>
                    </Link>
                    <Link to='/signin'>
                    <li><a>Sign up</a></li>
                    </Link>
                    <Link to='/login'>
                    <li className="startforfree-blog-btn"><a>Start For Free</a></li>
                    </Link>
                    <Link to='/Plans'>
                    <li><a>Pricing</a></li>
                    </Link>
                </ul>
            </nav>
        </header>
    </div>
    <div className="section1-blog">
        <div className="main-blog-page">
            <section className="main-blog-images"></section>
            <section className="main-blog-text">
                <h4>Unlocking Success: Leveraging Customer Data to Optimize Your Dropment Store</h4>
            </section>
        </div>
    </div>
</div>
    </Fragment>
}

export default MainBlog