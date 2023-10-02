import React, { useState, useEffect, useCallback, Fragment } from 'react';
import { useParams } from 'react-router-dom';


function SalesReportApp() {
    const [salesData, setSalesData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [prods, setProds] = useState([])
    const params = useParams();
  
    const fetchMessages = useCallback(async () => {
      setLoading(true);
      const token = localStorage.getItem('token');
      try {
        const response = await fetch(`http://localhost:8080/sales/stats/shop`, {
          headers: {
            Authorization: params.shop_id,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const transformedData = data.products.map((userdata) => ({
          orders_id: userdata.orders_id,
          name: userdata.name,
          Phone: userdata.Phone,
          Email: userdata.Email,
          streetadrs: userdata.streetadrs,
          city: userdata.city,
          state: userdata.state,
          zipcode: userdata.zipcode,
          country: userdata.country,
          id: userdata.id,
          product: userdata.product,
          sender_id: userdata.sender_id,
          shop_id: userdata.shop_id,
          message: userdata.message,
          age: userdata.age,
          occupation: userdata.occupation,
        }));
        setSalesData(transformedData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }, [params.shop_id]);
  
    useEffect(() => {
      fetchMessages();
    }, [fetchMessages]);

       const Prds = () => {
        const [salesdataid, setsalesdataid] = useState([])
        useEffect(() => {
            setsalesdataid(salesData.id);
          }, [salesData.id]);
        const fetchProdDetails = useCallback(async () => {
            setLoading(true);
            const token = localStorage.getItem('token');
            try {
              const response = await fetch(`http://localhost:8080/prods/details/orders/for/details`, {
                headers: {
                  Authorization: salesdataid,
                },
              });
              if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
              const data = await response.json();
              const transformedData = data.products.map((userdata) => ({
                id: userdata.id,
                title: userdata.title
              }));
              setProds(transformedData);
              setLoading(false);
            } catch (error) {
              console.error(error);
              setLoading(false);
            }
          }, [salesData]);
        
          useEffect(() => {
            fetchProdDetails();
          }, [fetchProdDetails]);
          return<Fragment>
            {prods.map((item) => (
                <p>{item.title}</p>
      ))}
      </Fragment>
    }
   
  
    return (
      <div className="sales-report-app"> {/* Updated class name */}
        <h1>Sales Statistics</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="sales-table"> {/* Updated class name */}
            <thead>
              <tr>
                <th>Country</th>
                <th>Product</th>
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>Zipcode</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Age</th>
                <th>Occupation</th>
              </tr>
            </thead>
            <tbody>
              {salesData.map((item) => (
                <tr key={item.id}>
                  <td>{item.country}</td>
                  <td><Prds/></td>
                  <td>{item.streetadrs}</td>
                  <td>{item.city}</td>
                  <td>{item.state}</td>
                  <td>{item.zipcode}</td>
                  <td>{item.name}</td>
                  <td>{item.Email}</td>
                  <td>{item.Phone}</td>
                  <td>{item.age}</td>
                  <td>{item.occupation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
  
  export default SalesReportApp;