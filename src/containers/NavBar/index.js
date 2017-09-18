import React from 'react';
import {Link } from 'react-router-dom'
import './index.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const NavBar = (props) => (
  <div>
    <nav className="black">
      <div className="nav-wrapper">
        <Link className="brand-logo" exact to="/">Dressy</Link>
        <ul id="nav-mobile" className="right">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><span className="cart-items">{props.cartProducts.length}</span></li>
        </ul>
      </div>
   </nav>
   {props.children}
 </div>
);

const mapStateToProps = (state, ownProps) => {
  return {
    cartProducts: state.cart.cartProducts
  }
};


export default withRouter(connect(mapStateToProps, null)(NavBar));
