import React from 'react';
import { NavLink } from 'react-router-dom'
import './index.css';
import { connect } from 'react-redux';

const NavBar = (props) => (
  <div>
    <nav className="black">
      <div className="nav-wrapper">
        <NavLink className="brand-logo" exact to="/">Dressy</NavLink>
        <ul id="nav-mobile" className="right">
          <li><NavLink activeClassName="selected" to="/about">About</NavLink></li>
          <li><NavLink activeClassName="selected" to="/contact">Contact</NavLink></li>
          <li><span className="cart-items">{props.cartProducts.length}</span></li>
        </ul>
      </div>
   </nav>
   {props.children}
 </div>
);

const mapStateToProps = (state) => {
  return {
    cartProducts: state.cart.cartProducts
  }
};



export default connect(mapStateToProps, null)(NavBar);
