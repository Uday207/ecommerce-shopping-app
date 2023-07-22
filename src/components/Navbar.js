import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const lengthItems = useSelector((state) => state.cartDetail.value);
  console.log(`lengthItems`, lengthItems);
  return (
    <div className="navbar">
      <div className="nav_box">
        <span className="my_shop">
          <Link to={`/`} style={{ color: 'white', textDecoration: 'none',marginLeft: '-55px'}}>
            E-commerce
          </Link>
        </span>
        <div className="cart">
          <Link to={`/addProduct`} style={{ textDecoration: 'none' }}>
            <label className="mx-5 mb-2 text-white" style={{ fontSize: '14px' }}>
              Add Product
            </label>
          </Link>
          <Link to={`/Cart`} style={{ textDecoration: 'none' }}>
            <span>
              <i className="fas fa-cart-plus"></i>
            </span>
            <span>{lengthItems?.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
