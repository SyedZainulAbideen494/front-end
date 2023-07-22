import React, { useState } from "react";
import "./search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    fetch(`http://localhost:8080/api/search?query=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);

        fetch(`http://localhost:8080/api/shops/search?query=${searchTerm}`)
          .then((response) => response.json())
          .then((userData) => {
            // Append the results from the second API call to the existing results
            setSearchResults((prevResults) => [...prevResults, ...userData]);
          });

        // Make the second API call after the first one is complete
        fetch(`http://localhost:8080/api/user/search?query=${searchTerm}`)
          .then((response) => response.json())
          .then((userData) => {
            // Append the results from the second API call to the existing results
            setSearchResults((prevResults) => [...prevResults, ...userData]);
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
    <div>
      <div className="inpsearchbar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="searchresults">
        <span>
          <div className="prodsseacr">
            {searchResults.map((result) => (
              <div className="prods" key={result.id}>
                <h3>{result.title}</h3>
                <p>{result.price}</p>
              </div>
            ))}
          </div>
        </span>
        <span>
          <div className="shopsseacr">
            {searchResults.map((result) => (
              <div className="prods" key={result.id}>
                <h3>{result.shop_name}</h3>
                <p>{result.shop_owner}</p>
              </div>
            ))}
          </div>
        </span>
        <span>
          <div className="usersseacr">
            {searchResults.map((result) => (
              <div key={result.id}>
                <h3>{result.first_name}</h3>
                <p>{result.last_name}</p>
              </div>
            ))}
          </div>
        </span>
      </div>
    </div>
  );
};

export default Search;
