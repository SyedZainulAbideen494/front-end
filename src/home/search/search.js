import React, { useState, useEffect, useCallback } from "react";
import "./search.css";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultsUser, setSearchResultsUser] = useState([]);
  const [searchResultsShop, setSearchResultsShop] = useState([]);
  const [filter, setFilter] = useState("users"); // Default filter is "users"

  const handleSearch = () => {
    fetch(`https://apifordropment.online/api/search?query=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);

        fetch(`https://apifordropment.online/api/shops/search?query=${searchTerm}`)
          .then((response) => response.json())
          .then((userData) => {
            setSearchResultsShop(userData); // Assuming userData is an array of shop results
          });

        fetch(`https://apifordropment.online/api/user/search?query=${searchTerm}`)
          .then((response) => response.json())
          .then((userData) => {
            setSearchResultsUser(userData); // Assuming userData is an array of user results
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  };

  const [img, setimage] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchimagehandler = useCallback(async () => {
    setloading(true);
    const token = localStorage.getItem("token");
    setloading(true);
    const response = await fetch("https://apifordropment.online/users/", {
      headers: {
        Authorization: token,
      },
    });
    const data = await response.json();
    const transformeduser = data.user.map((userdata) => {
      return {
        profilePic: `https://apifordropment.online/images/${userdata.porfilepic}`,
        first_name: userdata.first_name,
        last_name: userdata.last_name,
        unique_id: userdata.unique_id,
        occupation: userdata.occupation,
        bio: userdata.bio,
        user_id: userdata.user_id,
      };
    });
    setimage(transformeduser);
    setloading(false);
  }, []);

  useEffect(() => {
    fetchimagehandler();
  }, []);

  const filteredResults = () => {
    if (filter === "users") {
      return <User searchResultsUser={searchResultsUser} />;
    } else if (filter === "shops") {
      return <Shop searchResultsShop={searchResultsShop} />;
    } else if (filter === "products") {
      return <Products searchResults={searchResults} />;
    }
  };
  return (
    <div className="outer-container">
  <div className="header-search">
  <header>
    <div className="header-left" style={{display: 'inline-flex'}}>
      <Link to='/home'>
        <button style={{marginTop: '12px', marginRight: '9px'}}>back</button>
      </Link>
      <h3>Search</h3>
    </div>
    <div className="header-right">
      <Link to='/profile'>
      <img src={img[0]?.profilePic}/>
      </Link>
    </div>
    </header>
    </div>
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="What Are You Looking For?"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>Search</button>
    </div>


    <div className="filter-buttons">
      </div>

      {/* Filter buttons */}
      <div className="filter-buttons">
        <button
          className={filter === "users" ? "active" : ""}
          onClick={() => setFilter("users")}
        >
          Users
        </button>
        <button
          className={filter === "shops" ? "active" : ""}
          onClick={() => setFilter("shops")}
        >
          Shops
        </button>
        <button
          className={filter === "products" ? "active" : ""}
          onClick={() => setFilter("products")}
        >
          Products
        </button>
      </div>

      {/* Display filtered results */}
      <div className="user-shop-sections">
        {filteredResults()}
      </div>
    </div>
  );
};

const User = ({ searchResultsUser }) => {
  if (!searchResultsUser || !Array.isArray(searchResultsUser)) {
    return <div>No user results found.</div>;
  }

  return (
    <div>
      {searchResultsUser.map((result) => (
        <div className="user-post-search-result" key={result.user_id}>
          <div className="user-post-header-search-result">
            <div className="user-post-image-search-result">
              <img
                src={`https://apifordropment.online/images/${result.porfilepic}`}
                alt="User Profile"
                className="user-profile-pic-search-result"
              />
            </div>
            <div className="user-post-details-search-result">
              <Link
                to={`/user/${result.user_id}`}
                className="user-post-username-search-result"
              >
                {result.first_name} {result.last_name}
              </Link>
              <h4 className="user-unique-id-search-result">{result.unique_id}</h4>
            </div>
          </div>
          <h4 className="user-bio-search-result">{result.bio}</h4>
          <div className="user-post-actions-search-result">
            <Link
              to={`/user/${result.user_id}`}
              className="profile-link-button-search-result"
            >
              Visit Profile
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

const Shop = ({ searchResultsShop }) => {
  if (!searchResultsShop || !Array.isArray(searchResultsShop)) {
    return <div>No shop results found.</div>;
  }

  const Linkno = (props) => {
    if (props.temp === 'temp1') {
      return "/mystore1";
    } else if (props.temp === 'temp2') {
      return "/mystore2";
    } else if (props.temp === 'temp3') {
      return "/mystore3";
    } else if (props.temp === 'temp4') {
      return "/mystore4";
    } else if (props.temp === 'temp5') {
      return "/mystore5";
    } else if (props.temp === 'temp6') {
      return "/mystore6";
    } else if (props.temp === 'temp7') {
      return "/mystore7";
    } else if (props.temp === 'temp8') {
      return "/mystore8";
    }else if (props.temp === 'incomplete') {
      return `/build/${props.build}/step1`;
    }else if (props.temp === 'custom') {
      return `/mystore`;
    }
  };

  return (
    <div>
      {searchResultsShop.map((result) => (
        result.temp !== 'incomplete' ? (
          <div className="shop-container-search-result" key={result.shop_id}>
            <div className="shop-card-search-result">
              <div className="shop-header-search-result">
                <>
                  <img
                    src={`https://apifordropment.online/images/${result.logo}`}
                    alt={result.shop_name}
                    className="shop-logo-search-result"
                  />
                  <div className="shop-header-details-search-result">
                    <Link
                      to={`${Linkno(result)}/${result.shop_id}/${result.shop_name}`}
                      style={{ textDecoration: "none", color: "black" }}
                      className="shop-name-link-search-result"
                    >
                      <p>{result.shop_name}</p>
                    </Link>
                  </div>
                </>
              </div>
            </div>
          </div>
        ) : (
          <div key={result.shop_id} style={{ backgroundColor: 'black' }}></div>
        )
      ))}
    </div>
  );
};

const Products = ({ searchResults }) => {
  if (!searchResults || !Array.isArray(searchResults)) {
    return <div>No shop results found.</div>;
  }
  return (
    <div>
      {searchResults.map((result) => (
        <Link  to={`/products/${result.id}/${result.shop_id}`} style={{textDecoration: 'none'}}>
          <div className="PRoducts-card-search-result" key={result.id}>
            <div className="product-img-search-result">
              <img
                src={`https://apifordropment.online/images/${result.images}`}
                alt="Product Image"
              />
            </div>
            <div className="product-title-search-result">
              <h2>{result.title}</h2>
              <p>{result.usd}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Search;