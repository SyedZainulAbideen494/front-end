import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import SalesReportApp from '../sales/chatsreport';
import './adminview.css'
import logo from '../header/images/drop2_logo.png'
import { Bar } from 'react-chartjs-2';
import AdminOverviewShop from './admin-shop-overview';
import AdminOverviewgenderShop from './admin-shop-gender-overview';
import ShopVisitorsChart from './admin-visit-graph';

const TotalInventory = () => {
  const [totalInventory, setTotalInventory] = useState(0);
  const params = useParams();
  const shopId = params.shop_id;
  useEffect(() => {
    // Replace 'YOUR_BACKEND_URL' with your actual backend URL
    axios.get(`https://apifordropment.online/products/total_inventory/${shopId}`)
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
      <h4>133357</h4>
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
      const response = await axios.get(`https://apifordropment.online/sales/data/for/date/${shopId}?filter=${filter}`);
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
      <h4>$3,582,567</h4>
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
        const response = await axios.get(`https://apifordropment.online/mostOccurredID/shop/stats/${shopId}`);
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
          const response = await axios.get(`https://apifordropment.online/orders/dashboard/data/products/title/${mostOccurredID.id}`);
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
          
          <h4>T-Shirts<br/>  10,489 sold</h4>
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
        const response = await axios.get(`https://apifordropment.online/totalMoneyMade/${shopId}`);
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
      <h4>351,381</h4>
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
        const response = await axios.get(`https://apifordropment.online/orders/dashboard/data/${params.shop_id}`);
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
            const response = await axios.get(`https://apifordropment.online/orders/dashboard/data/products/usd/${product.id}`);
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
            const response = await axios.get(`https://apifordropment.online/countOrdersById/${product.id}`);
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
        <h4>$28,673,713</h4>
      </div>
  );
};

const Dashboard = () => {
  const [totalVisits, setTotalVisits] = useState(0);
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://apifordropment.online/visitors/${params.shop_id}`);
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
  const [showVisits, setShowVisits] = useState(true);
  const [showOrders, setShowOrders] = useState(false);

  const handleVisitsClick = () => {
    setShowVisits(true);
    setShowOrders(false);
  };

  const handleOrdersClick = () => {
    setShowVisits(false);
    setShowOrders(true);
  };

  return (
    <Fragment>
    {/* Header section */}
    <div className='main-div-overview-shop-admin'>
      <div className='header-overview-shop'>
        <header>
          <img src={logo} alt='Dropment Logo' />
          <div className='admin-menu-header-btns'>
            <Link to={`/admin/Orders/${params.shop_id}`}>
              <button style={{ color: 'white' }}>Orders</button>
            </Link>
            <Link to={`/admin/products/${params.shop_id}`}>
              <button style={{ color: 'white' }}>Products</button>
            </Link>
            <Link to='/'>
              <button style={{ color: 'white' }}>back</button>
            </Link>
          </div>
        </header>
      </div>

      {/* Main content */}
      <div className="dashboard-container">
        <h1>Shop Overview</h1>
        <div className="dashboard-container-button-dashboard">
      <button
        className={`visits-button-button-dashboard ${showVisits ? 'active' : ''}`}
        onClick={handleVisitsClick}
      >
        Show Visits
      </button>
      <button
        className={`orders-button-button-dashboard ${showOrders ? 'active' : ''}`}
        onClick={handleOrdersClick}
      >
        Show Orders
      </button>

      {showVisits && <ShopVisitorsChart className="visits-chart" />}
      {showOrders && <AdminOverviewShop className="orders-overview" />}
    </div>
        <div className="data-components">
          <div className="total-visits">
            <h2>Total Shop Visits</h2>
            <h4>{totalVisits}</h4>
          </div>
          <OrdersComponent />
          <OrdersComponentMostSoldProduct />
          <TotalMoneyMade />
          <SalesComponent7dayData />
          <TotalInventory />
          <AdminOverviewgenderShop />
        </div>
      </div>
    </div>
  </Fragment>
  );
};

export default Dashboard;