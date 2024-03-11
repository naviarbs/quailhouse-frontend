import React from 'react';
import 'styles/App.css';
import logo from 'assets/images/logo_q_w_s.png';
// import logo_q_b_s from 'assets/images/logo_q_b_s.png';

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Ainbox Logo" className="logo"/>
        <nav className="nav desktop-nav">
          <a href="#why-ainbox">Why Ainbox?</a>
          <a href="#product">Product</a>
          <a href="#pricing">Pricing</a>
          <a href="#stories">Success Stories</a>
          <a href="#blog">Blog</a>
          <a href="#contact" className="contact-link">Contact</a>
          <button className="buy-template-btn">Buy Template</button>
        </nav>
        <select className="nav mobile-nav" aria-label="Navigation Menu">
          <option value="#why-ainbox">Why Ainbox?</option>
          <option value="#product">Product</option>
          <option value="#pricing">Pricing</option>
          <option value="#stories">Success Stories</option>
          <option value="#blog">Blog</option>
          <option value="#contact">Contact</option>
        </select>
      </header>
      <main className="main">
        <section className="hero">
          <h1>Boost your good ideas</h1>
          <p>Obtain a savvy marketing platform of growth for the business you're pursuing.</p>
          <button className="buy-template-btn">Buy Template</button>
        </section>
        <section className="features">
          <h2>Unlock the possibilities</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>Power Surge</h3>
              <p>Experience a surge of power with our platform.</p>
            </div>
            <div className="feature">
              <h3>Campaign Master</h3>
              <p>Masterfully manage your marketing campaigns.</p>
            </div>
            <div className="feature">
              <h3>Security Fortress</h3>
              <p>Shield your marketing with impenetrable security.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
