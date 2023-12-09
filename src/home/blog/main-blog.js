import React,{Fragment, useCallback} from "react";
import './blog.css'
import logo from '../header/images/drop2_logo.png'
import blog1 from '../header/images/The Guide to Customer Experience Optimization - Growth Hackers.png'
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
        <Link to='/blog/Unlocking-Success:-Leveraging-Customer-Data-to-Optimize-Your-Dropment-Store' style={{textDecoration: 'none', color: 'black'}}>
    <a class="blog-post">
  <div class="main-blog-page">
    <section class="main-blog-images">
      <img src={blog1} alt="Blog Post Image"/>
    </section>
    <section class="main-blog-text">
      <h4>Unlocking Success: Leveraging Customer Data to Optimize Your Dropment Store</h4>
      <p>Read more...</p>
    </section>
  </div>
</a>
</Link>
    </div>
</div>
    </Fragment>
}

export default MainBlog