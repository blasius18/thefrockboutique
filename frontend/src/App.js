import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <Router>
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>&#9776;</button>
        <Link to="/">thefrockboutique</Link>
      </div>
      <div className="header-links">
        <a href="cart.html">Cart</a>
        <Link to="/signin">Sign In</Link>
      </div>
    </header>
    <aside className="sidebar">
      <h3>Categories</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul>
        <li>
          <a href="index.html">less than 6 yrs</a>
        </li>
        <li>
          <a href="index.html">6 to 9 yrs</a>
        </li>
        <li>
          <a href="index.html">10 to 13 yrs</a>
        </li>
        <li>
          <a href="index.html">14 to 17 yrs</a>
        </li>
        <li>
          <a href="index.html">18 yrs and above</a>
        </li>
        <li>
          <a href="index.html">Wedding Gowns</a>
        </li>
      </ul>
    </aside>
    <main className="main">
      <div className="content">
        <Route path="/signin" component={SigninScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/" exact={true} component={HomeScreen} />
      </div>
    </main>
    <footer className="footer">
      All rights reserved.
    </footer>
  </div>
  </Router>
  );
}

export default App;
