import React,{Fragment, useCallback} from "react";
import './blog.css'
import logo from '../header/images/drop2_logo.png'
import blog1 from '../header/images/The Guide to Customer Experience Optimization - Growth Hackers.png'
import { Link } from "react-router-dom";
import blog2 from '../header/images/Get like on your social media.png'
import blog3 from '../header/images/Levels_ Successful business.png'

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
<Link to='/blog/Mastering-Social-Media:-Proven-Marketing-Tips-for-Dropment-Shop-Owner' style={{textDecoration: 'none', color: 'black'}}>
    <a class="blog-post">
  <div class="main-blog-page">
    <section class="main-blog-images">
      <img src={blog2} alt="Blog Post Image"/>
    </section>
    <section class="main-blog-text">
      <h4>Mastering Social Media: Proven Marketing Tips for Dropment Shop Owners</h4>
      <p>Read more...</p>
    </section>
  </div>
</a>
</Link>
<Link to='/blog/The-Power-of-Storytelling:-Crafting-Irresistible-Blinkfeeds-for-Your-Dropment-Store' style={{textDecoration: 'none', color: 'black'}}>
    <a class="blog-post">
  <div class="main-blog-page">
    <section class="main-blog-images">
      <img src={blog3} alt="Blog Post Image"/>
    </section>
    <section class="main-blog-text">
      <h4>The Power of Storytelling: Crafting Irresistible Blinkfeeds for Your Dropment Store</h4>
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