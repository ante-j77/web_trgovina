import React from "react";
import "./Home.css";
import naslovna from "./images/slika3.jpg";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img src={naslovna} className="home_image" />

        <div className="home_row">
          <Product
            id="1241511"
            title="Razer Mamba Elite Wired Gaming Mouse: 16,000 DPI Optical Sensor - Chroma RGB Lighting - 9 Programmable Buttons - Mechanical Switches"
            price={44.99}
            image="https://m.media-amazon.com/images/I/61VwBIfNvJL._AC_SY450_.jpg"
          />
          <Product
            id="12421515"
            title="SAMSUNG UJ59 Series 32-Inch 4K UHD (3840x2160) Computer Monitor, HDMI, Display Port, Eye Saver/Flicker Free Mode, FreeSync"
            price={339.99}
            image="https://m.media-amazon.com/images/I/81Duq9UVJtL._AC_SX679_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="5436324"
            title="Lenovo Legion 5 Pro 16, Ryzen 7-5800H 16GB RAM 512GB SSD RTX 3060 6GB GDDR6 TGP 130W"
            price={1449.99}
            image="https://m.media-amazon.com/images/I/31Trwx5KK8L._AC_SX355_.jpg"
          />
          <Product
            id="5123131"
            title="Alienware M15 R5 Gaming Laptop,  AMD Ryzen R9 5900HX, GeForce RTX 3070"
            price={2099.99}
            image="https://m.media-amazon.com/images/I/81UKmA-HCVL._AC_SX355_.jpg"
          />
          <Product
            id="546578"
            title="SAMSUNG Galaxy Watch 5 Pro 45mm Bluetooth Smartwatch w/ Body, Health"
            price={449.0}
            image="https://m.media-amazon.com/images/I/61Sl+xoVHoL._AC_SX355_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="782822"
            title="Apple 2023 MacBook Pro Laptop M2 Pro chip with 10‑core CPU and 16‑core GPU: 14.2-inch Liquid Retina XDR Display, 16GB Unified Memory, 512GB SSD Storage. Works with iPhone/iPad; Space Gray"
            price={1948.99}
            image="https://m.media-amazon.com/images/I/61lYIKPieDL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="8675039"
            title="JBL Live 460NC - Wireless On-Ear Noise Cancelling Headphones with Long Battery Life and Voice Assistant Control - Black"
            price={89.99}
            image="https://m.media-amazon.com/images/I/61Kq-Pz8d-L._AC_SY355_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
