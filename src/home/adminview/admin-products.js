import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import SalesReportApp from '../sales/chatsreport';
import './adminview.css'
import logo from '../header/images/Dropment (2).png'
const Products = () => {
    const [products, setProducts] = useState([]);
    const params = useParams()
    const shopId = params.shop_id
  
    useEffect(() => {
      // Fetch products based on shopId
      fetch(`http://localhost:8080/products/admin/products/data/${shopId}`)
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error('Error fetching products:', error));
    }, [shopId]);
    const handleDelete = (productId) => {
        // Delete product from backend
        fetch(`http://localhost:8080/products/delete/admin/data/${productId}`, {
          method: 'DELETE'
        })
          .then((response) => {
            if (response.ok) {
              // Update frontend state to reflect deletion
              const updatedProducts = products.filter((product) => product.id !== productId);
              setProducts(updatedProducts);
            } else {
              throw new Error('Failed to delete product');
            }
          })
          .catch((error) => console.error('Error deleting product:', error));
      };
     const handleInventoryUpdate = (productId, action) => {
        axios.put('http://localhost:8080/update/inventory/admin/data/products', { productId, action })
          .then(response => {
            console.log(response.data);
            // Optionally, update state or perform other actions on successful update
          })
          .catch(error => {
            console.error('Error updating inventory:', error);
            // Handle errors
          });
      }
  
    return (
        <div class='products-list'>
        <div class='inventory-table'>
          <div class='table-header'>
            <div>Image</div>
            <div>ID</div>
            <div>Title</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
          </div>
          {products.map((product) => (
            <div key={product.id} class='table-row'>
              <div><img src={`http://localhost:8080/images/${product.images}`} alt={product.title} class='product-image'/></div>
              <div className='mobile-deleted'>{product.id}</div>
              <div>{product.title}</div>
              <div>${product.usd}</div>
              <div className='mobile-inventroy'><p>Quantity:</p>{product.amount}</div>
              <div>
          <button class='delete-button' onClick={() => handleDelete(product.id)}>Delete</button>
          <div>
            <button class='delete-button'  onClick={() => handleInventoryUpdate(product.id, 'decrease')}>-</button>
            <button class='delete-button'  onClick={() => handleInventoryUpdate(product.id, 'increase')}>+</button>
          </div>
        </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
const AdminProduct = () => {
    const params = useParams()
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
          <Link to={`/admin/${params.shop_id}`}>
            <button>Overview</button>
            </Link>
            <Link to='/'>
            <button>back</button>
            </Link>
          </div>
        </header>
      </div>
      <div className='admin-view-products-page'>
     <Products/>
      </div>
          </div>
      </Fragment>
      );
}

export default AdminProduct