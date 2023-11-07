import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Exchanges from "./components/Exchanges";
import Cryptocurrencies from "./components/Cryptocurrencies";
import CryptoDetails from "./components/CryptoDetails";
import News from "./components/News";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <div className="routes">
            <Routes>
              <Route index exact path="/" element={<Homepage />} />
              <Route index exact path="/exchanges" element={<Exchanges />} />
              <Route
                index
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route
                index
                exact
                path="/crypto/:coinId"
                element={<CryptoDetails />}
              />
              <Route index exact path="/news" element={<News />} />
            </Routes>
          </div>

          <div className="footer">
            <Typography.Title
              level={5}
              style={{ color: "white", textAlign: "center" }}
            >
              cryptoverse
              <br />
              All rights reserved
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
