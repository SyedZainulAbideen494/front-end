import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import SalesReportApp from '../sales/chatsreport';
import './adminview.css'
import logo from '../header/images/drop2_logo.png'
const Products = () => {
    const [products, setProducts] = useState([]);
    const params = useParams()
    const shopId = params.shop_id
  
    useEffect(() => {
      // Fetch products based on shopId
      fetch(`https://apifordropment.online/products/admin/products/data/${shopId}`)
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error('Error fetching products:', error));
    }, [shopId]);
    const handleDelete = (productId) => {
        // Delete product from backend
        fetch(`https://apifordropment.online/products/delete/admin/data/${productId}`, {
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
        axios.put('https://apifordropment.online/update/inventory/admin/data/products', { productId, action })
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
              <div><img src={`https://apifordropment.online/images/${product.images}`} alt={product.title} class='product-image'/></div>
              <div className='mobile-deleted' style={{color: 'white'}}>{product.id}</div>
              <div style={{color: 'white'}}>{product.title}</div>
              <div>${product.usd}</div>
              <div className='mobile-inventroy' style={{color: 'white'}}><p style={{color: 'white'}}>Quantity:</p>{product.amount}</div>
              <div>
          <button class='delete-button' onClick={() => handleDelete(product.id)}>Delete</button>
          <Link className='delete-button' style={{textDecoration: 'none'}} to={`/item/edit/${product.id}`}>Edit</Link>
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
            <button style={{color: 'white'}}>Orders</button>
            </Link>
          <Link to={`/admin/${params.shop_id}`}>
            <button style={{color: 'white'}}>Overview</button>
            </Link>
            <Link to='/'>
            <button style={{color: 'white'}}>back</button>
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