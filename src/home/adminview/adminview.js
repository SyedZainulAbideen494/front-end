import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import SalesReportApp from '../sales/chatsreport';
import './adminview.css'
import logo from '../header/images/Dropment (2).png'
import { Bar } from 'react-chartjs-2';

const TotalInventory = () => {
  const [totalInventory, setTotalInventory] = useState(0);
  const params = useParams();
  const shopId = params.shop_id;
  useEffect(() => {
    // Replace 'YOUR_BACKEND_URL' with your actual backend URL
    axios.get(`http://localhost:8080/products/total_inventory/${shopId}`)
      .then(response => {
        setTotalInventory(response.data);
      })
      .catch(error => {
        console.error('Error fetching total inventory: ' + error.message);
      });
  }, []);

  return (
    <div class="total-visits">
      <h2>Total Inventory</h2>
      <h4>{totalInventory}</h4>
    </div>
  );
};
const SalesComponent7dayData = () => {
  const [filteredSales, setFilteredSales] = useState([]);
  const params = useParams();
  const shopId = params.shop_id;
  const filters = ["this year", "6 months", "this month", "this week", "1 day"];

  const fetchFilteredSales = async (filter) => {
    try {
      const response = await axios.get(`http://localhost:8080/sales/data/for/date/${shopId}?filter=${filter}`);
      setFilteredSales(response.data); // Update state with fetched data
    } catch (error) {
      console.error('Error fetching sales:', error);
    }
  };

  useEffect(() => {
    fetchFilteredSales("1year"); // Fetch sales data for 1 year initially
  }, [shopId]); // Add shopId to the dependencies array

  return (
    <div className="total-visits">
  <div className="left-align">
    <div>
      <select onChange={(event) => fetchFilteredSales(event.target.value)} defaultValue="7 days">
        <option value="7 days">7 days</option>
        {filters.map((filter, index) => (
          <option key={index} value={filter}>
            {filter}
          </option>
        ))}
      </select>
    </div>
  </div>
  {filteredSales.map((product) => (
    <div key={product.id}>
      <h2>Revenue</h2>
      <h4>${product.totalUSD}</h4>
    </div>
  ))}
</div>
  );
};
const OrdersComponentMostSoldProduct = () => {
  const [mostOccurredID, setMostOccurredID] = useState(null);
  const [productsUsd, setProductsUsd] = useState([]);
  const params = useParams();
  const shopId = params.shop_id;

  useEffect(() => {
    const fetchMostOccurredID = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/mostOccurredID/shop/stats/${shopId}`);
        setMostOccurredID(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMostOccurredID();
  }, [shopId]);

  useEffect(() => {
    const fetchUsdValues = async () => {
      try {
        if (mostOccurredID) {
          const response = await axios.get(`http://localhost:8080/orders/dashboard/data/products/title/${mostOccurredID.id}`);
          setProductsUsd([response.data[0]?.title]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsdValues();
  }, [mostOccurredID]);

  return (
    <div>
      {mostOccurredID ? (
        productsUsd.length > 0 ? (
          <div class="total-visits">
            <h2>Most sold Item</h2>
          
          <h4>{productsUsd[0]}<br/>  {mostOccurredID.id_count} sold</h4>
        </div>
        ) : (
          <p>Loading...</p>
        )
      ) : (
        <p>No Data Available</p>
      )}
    </div>
  );
};

const TotalMoneyMade = () => {
  const [totalOrders, setTotalOrders] = useState(0);
  const params = useParams();
  const shopId = params.shop_id; // Replace this with the shop_id you want to query

  useEffect(() => {
    const fetchTotalOrders = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/totalMoneyMade/${shopId}`);
        setTotalOrders(response.data.totalOrders);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchTotalOrders();
  }, [shopId]);

  return (
      <div class="total-visits">
      <h2>Total items sold</h2>
      <h4>{totalOrders}</h4>
    </div>
  );
};

const OrdersComponent = () => {
  const [productsId, setProductsId] = useState([]);
  const [productsUsd, setProductsUsd] = useState([]);
  const [occurrences, setOccurrences] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchTotalValues = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/orders/dashboard/data/${params.shop_id}`);
        setProductsId(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTotalValues();
  }, [params.shop_id]);

  useEffect(() => {
    const fetchUsdValues = async () => {
      try {
        const usdValues = await Promise.all(
          productsId.map(async product => {
            const response = await axios.get(`http://localhost:8080/orders/dashboard/data/products/usd/${product.id}`);
            return response.data[0]?.usd || 0; // Extract usd value from response data
          })
        );
        setProductsUsd(usdValues);
      } catch (error) {
        console.error(error);
      }
    };

    if (productsId.length > 0) {
      fetchUsdValues();
    }
  }, [productsId]);

  useEffect(() => {
    const fetchIdCounts = async () => {
      try {
        const idCounts = await Promise.all(
          productsId.map(async product => {
            const response = await axios.get(`http://localhost:8080/countOrdersById/${product.id}`);
            return response.data[0]?.id_count || 0;
          })
        );
        setOccurrences(idCounts);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (productsId.length > 0) {
      fetchIdCounts();
    }
  }, [productsId]);

  const calculatedValues = occurrences.map((idCount, index) => {
    const usd = productsUsd[index] || 0; // Use the direct value from productsUsd state
    return idCount * usd;
  });

  const totalResult = calculatedValues.reduce((acc, value) => acc + value, 0);

  return (
    <div class="total-visits">
        <h2>Total revenue</h2>
        <h4>${totalResult}</h4>
      </div>
  );
};

const Dashboard = () => {
  const [totalVisits, setTotalVisits] = useState(0);
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/visitors/${params.shop_id}`);
        const visitsData = response.data;

        // Calculate total visits
        const total = visitsData.totalVisits || 0;
        setTotalVisits(total);
      } catch (error) {
        console.error('Error fetching data: ', error);
        // Handle error (display a message, set a default value, etc.)
      }
    };

    fetchData();
  }, [params.shop_id]);

  return (
    <Fragment>
      <div className='main-div-overview-shop-admin'>
     <div class='header-overview-shop'>
    <header>
      <img src={logo} alt='Dropment Logo'/>
      <div className='admin-menu-header-btns'>
        <Link to={`/admin/Orders/${params.shop_id}`}>
            <button>Orders</button>
            </Link>
            <Link to={`/admin/products/${params.shop_id}`}>
            <button>Products</button>
            </Link>
            <Link to='/'>
            <button>back</button>
            </Link>
      </div>
    </header>
  </div>
  <div class="dashboard-container">
    <h1>Shop Overview</h1>
    <div class="data-components">
      <div class="total-visits">
        <h2>Total Shop Visits</h2>
        <h4></h4>
      </div>
      <OrdersComponent/>
      <OrdersComponentMostSoldProduct/>
      <TotalMoneyMade/>
      <SalesComponent7dayData/>
      <TotalInventory/>
      </div>
      </div>
      </div>
  </Fragment>
  );
};

export default Dashboard;