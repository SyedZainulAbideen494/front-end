import React, { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import "./csb.css";
import Axios from "axios";

const SelectNoSection = () => {

  const addshophandler1 = () => {
    const token = localStorage.getItem("token");
  
    Axios.post(
      `http://localhost:8080/add/custom/shop`,
      {
        section: 4
      }, // POST data here
      {
        headers: {
          Authorization: token,
        },
      }
    ).then((response) => {
      // Check if the response indicates a successful operation, e.g., a specific status code.
      // You can add your own condition to check for success.
  
      // Redirect to /custom/shop on success
      if (response.status === 200) { // Adjust the condition based on your API response.
        window.location.href = `/profile`;
      } else {
        // Handle the case where the operation is not successful
        console.log('Operation failed');
      }
    }).catch((error) => {
      // Handle any errors that occur during the POST request.
      console.error('Error:', error);
    });
  };

  const addshophandler2 = () => {
    const token = localStorage.getItem("token");
  
    Axios.post(
      `http://localhost:8080/add/custom/shop`,
      {
        section: 5
      }, // POST data here
      {
        headers: {
          Authorization: token,
        },
      }
    ).then((response) => {
      // Check if the response indicates a successful operation, e.g., a specific status code.
      // You can add your own condition to check for success.
  
      // Redirect to /custom/shop on success
      if (response.status === 200) { // Adjust the condition based on your API response.
        window.location.href = `/profile`;
      } else {
        // Handle the case where the operation is not successful
        console.log('Operation failed');
      }
    }).catch((error) => {
      // Handle any errors that occur during the POST request.
      console.error('Error:', error);
    });
  };
  
  const addshophandler3 = () => {
    const token = localStorage.getItem("token");
  
    Axios.post(
      `http://localhost:8080/add/custom/shop`,
      {
        section: 6
      }, // POST data here
      {
        headers: {
          Authorization: token,
        },
      }
    ).then((response) => {
      // Check if the response indicates a successful operation, e.g., a specific status code.
      // You can add your own condition to check for success.
  
      // Redirect to /custom/shop on success
      if (response.status === 200) { // Adjust the condition based on your API response.
        window.location.href = `/profile`;
      } else {
        // Handle the case where the operation is not successful
        console.log('Operation failed');
      }
    }).catch((error) => {
      // Handle any errors that occur during the POST request.
      console.error('Error:', error);
    });
  };
  
  const addshophandler4 = () => {
    const token = localStorage.getItem("token");
  
    Axios.post(
      `http://localhost:8080/add/custom/shop`,
      {
        section: 7
      }, // POST data here
      {
        headers: {
          Authorization: token,
        },
      }
    ).then((response) => {
      // Check if the response indicates a successful operation, e.g., a specific status code.
      // You can add your own condition to check for success.
  
      // Redirect to /custom/shop on success
      if (response.status === 200) { // Adjust the condition based on your API response.
        window.location.href = `profile`;
      } else {
        // Handle the case where the operation is not successful
        console.log('Operation failed');
      }
    }).catch((error) => {
      // Handle any errors that occur during the POST request.
      console.error('Error:', error);
    });
  };
  
  const addshophandler5 = () => {
    const token = localStorage.getItem("token");
  
    Axios.post(
      `http://localhost:8080/add/custom/shop`,
      {
        section: 8
      }, // POST data here
      {
        headers: {
          Authorization: token,
        },
      }
    ).then((response) => {
      // Check if the response indicates a successful operation, e.g., a specific status code.
      // You can add your own condition to check for success.
  
      // Redirect to /custom/shop on success
      if (response.status === 200) { // Adjust the condition based on your API response.
        window.location.href = `/profile`;
      } else {
        // Handle the case where the operation is not successful
        console.log('Operation failed');
      }
    }).catch((error) => {
      // Handle any errors that occur during the POST request.
      console.error('Error:', error);
    });
  };
  
  const addshophandler6 = () => {
    const token = localStorage.getItem("token");
  
    Axios.post(
      `http://localhost:8080/add/custom/shop`,
      {
        section: 9
      }, // POST data here
      {
        headers: {
          Authorization: token,
        },
      }
    ).then((response) => {
      // Check if the response indicates a successful operation, e.g., a specific status code.
      // You can add your own condition to check for success.
  
      // Redirect to /custom/shop on success
      if (response.status === 200) { // Adjust the condition based on your API response.
        window.location.href = `/profile`;
      } else {
        // Handle the case where the operation is not successful
        console.log('Operation failed');
      }
    }).catch((error) => {
      // Handle any errors that occur during the POST request.
      console.error('Error:', error);
    });
  };
  
  const addshophandler7 = () => {
    const token = localStorage.getItem("token");
  
    Axios.post(
      `http://localhost:8080/add/custom/shop`,
      {
        section: 10
      }, // POST data here
      {
        headers: {
          Authorization: token,
        },
      }
    ).then((response) => {
      // Check if the response indicates a successful operation, e.g., a specific status code.
      // You can add your own condition to check for success.
  
      // Redirect to /custom/shop on success
      if (response.status === 200) { // Adjust the condition based on your API response.
        window.location.href = `/profile`;
      } else {
        // Handle the case where the operation is not successful
        console.log('Operation failed');
      }
    }).catch((error) => {
      // Handle any errors that occur during the POST request.
      console.error('Error:', error);
    });
  };
  
  const addshophandler8 = () => {
    const token = localStorage.getItem("token");
  
    Axios.post(
      `http://localhost:8080/add/custom/shop`,
      {
        section: 11
      }, // POST data here
      {
        headers: {
          Authorization: token,
        },
      }
    ).then((response) => {
      // Check if the response indicates a successful operation, e.g., a specific status code.
      // You can add your own condition to check for success.
  
      // Redirect to /custom/shop on success
      if (response.status === 200) { // Adjust the condition based on your API response.
        window.location.href = `/profile`;
      } else {
        // Handle the case where the operation is not successful
        console.log('Operation failed');
      }
    }).catch((error) => {
      // Handle any errors that occur during the POST request.
      console.error('Error:', error);
    });
  };
  
  const addshophandler9 = () => {
    const token = localStorage.getItem("token");
  
    Axios.post(
      `http://localhost:8080/add/custom/shop`,
      {
        section: 12
      }, // POST data here
      {
        headers: {
          Authorization: token,
        },
      }
    ).then((response) => {
      // Check if the response indicates a successful operation, e.g., a specific status code.
      // You can add your own condition to check for success.
  
      // Redirect to /custom/shop on success
      if (response.status === 200) { // Adjust the condition based on your API response.
        window.location.href = `/profile`;
      } else {
        // Handle the case where the operation is not successful
        console.log('Operation failed');
      }
    }).catch((error) => {
      // Handle any errors that occur during the POST request.
      console.error('Error:', error);
    });
  };
  
  const addshophandler10 = () => {
    const token = localStorage.getItem("token");
  
    Axios.post(
      `http://localhost:8080/add/custom/shop`,
      {
        section: 13
      }, // POST data here
      {
        headers: {
          Authorization: token,
        },
      }
    ).then((response) => {
      // Check if the response indicates a successful operation, e.g., a specific status code.
      // You can add your own condition to check for success.
  
      // Redirect to /custom/shop on success
      if (response.status === 200) { // Adjust the condition based on your API response.
        window.location.href = `/profile`;
      } else {
        // Handle the case where the operation is not successful
        console.log('Operation failed');
      }
    }).catch((error) => {
      // Handle any errors that occur during the POST request.
      console.error('Error:', error);
    });
  };
  
  
  return (
    <Fragment>
      <div className="box-container">
        <div className="header-section">
          <Link to="/Addshoppage1">
            <button>Go Back</button>
          </Link>
          <h2 className="section-heading">
            Choose the Number of Sections for Your Online Store
          </h2>
        </div>
        <div className="section-buttons">
            <button className="section-button" onClick={addshophandler1}>4 section store</button>
            <button className="section-button" onClick={addshophandler2}>5 section store</button>
            <button className="section-button" onClick={addshophandler3}>6 section store</button>
            <button className="section-button" onClick={addshophandler4}>7 section store</button>
            <button className="section-button" onClick={addshophandler5}>8 section store</button>
            <button className="section-button" onClick={addshophandler6}>9 section store</button>

        </div>
      </div>
    </Fragment>
  );
};

export default SelectNoSection;