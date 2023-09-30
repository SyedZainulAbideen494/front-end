import React, { useState, useEffect } from "react";
import "./search.css";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultsUser, setSearchResultsUser] = useState([]);
  const [searchResultsShop, setSearchResultsShop] = useState([]);

  const handleSearch = () => {
    fetch(`http://localhost:8080/api/search?query=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);

        fetch(`http://localhost:8080/api/shops/search?query=${searchTerm}`)
          .then((response) => response.json())
          .then((userData) => {
            setSearchResultsShop(userData); // Assuming userData is an array of shop results
          });

        fetch(`http://localhost:8080/api/user/search?query=${searchTerm}`)
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

  return (
    <div className="outer-container">
      <div className="inpsearchbar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="user-shop-sections">
        <span className="user-shop-section">
          <User searchResultsUser={searchResultsUser} />
        </span>
        <span className="user-shop-section">
          <Shop searchResultsShop={searchResultsShop} />
        </span>
        <span>
          <Products searchResults={searchResults} />
        </span>
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
            src={`http://localhost:8080/images/${result.porfilepic}`}
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
    if (props.temp1 !== null) {
      return "/mystore1";
    } else if (props.temp2 !== null) {
      return "/mystore2";
    } else if (props.temp3 !== null) {
      return "/mystore3";
    } else if (props.temp4 !== null) {
      return "/mystore4";
    } else if (props.temp5 !== null) {
      return "/mystore5";
    } else if (props.temp6 !== null) {
      return "/mystore6";
    } else if (props.temp7 !== null) {
      return "/mystore7";
    } else if (props.temp8 !== null) {
      return "/mystore8";
    } else {
      return "/default-link";
    }
  };

  return (
    <div>
    {searchResultsShop.map((result) => (
      <div className="shop-container-search-result" key={result.shop_id}>
        <div className="shop-card-search-result">
          <div className="shop-header-search-result">
            <img
              src={`http://localhost:8080/images/${result.logo}`}
              alt={result.shop_name}
              className="shop-logo-search-result"
            />
            <div className="shop-header-details-search-result">
              <Link
                to={`${Linkno(result)}/${result.shop_id}/${result.shop_name}`}
                style={{ textDecoration: "none", color: "black" }}
                className="shop-name-link-search-result"
              >
                {result.shop_name}
              </Link>
            </div>
          </div>
          <div className="shop-image-search-result">
            <img
              src={`http://localhost:8080/images/${result.logo}`}
              alt={result.shop_name}
              className="shop-image-pic-search-result"
            />
          </div>
        </div>
      </div>
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
    <Link  to={`/products/${result.id}`}>
    <div className="PRoducts-card-search-result" key={result.id}>
      <div className="product-img-search-result">
        <img
          src={`http://localhost:8080/images/${result.images}`}
          alt="Product Image"
        />
      </div>
      <div className="product-title-search-result">
        <h2>{result.title}</h2>
      </div>
    </div>
    </Link>
  ))}
</div>
  );
};

export default Search;