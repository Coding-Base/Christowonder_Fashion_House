import React from "react";
import  fb from "./facebook.png"
import  x from "./x.png"
import  insta from "./insta.jpg"
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f8f8f8",
        padding: "20px 10%",
        borderTop: "1px solid #ddd",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* Logo and Tagline */}
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
          Christowonder Fashion House Online
          </h2>
          <p style={{ fontSize: "14px", color: "#666" }}>
            Best tailored dresses delivered to your door.
          </p>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
          <div>
            <h4 style={{ fontSize: "16px", marginBottom: "10px" }}>Shop</h4>
            <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
              <li>
                <a href="/shop" style={{ color: "#333", textDecoration: "none" }}>
                  Dresses
                </a>
              </li>
              <li>
                <a href="/custom" style={{ color: "#333", textDecoration: "none" }}>
                  Custom Orders
                </a>
              </li>
              <li>
                <a href="/sale" style={{ color: "#333", textDecoration: "none" }}>
                  Sale
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: "16px", marginBottom: "10px" }}>Company</h4>
            <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
              <li>
                <a href="/about" style={{ color: "#333", textDecoration: "none" }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" style={{ color: "#333", textDecoration: "none" }}>
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" style={{ color: "#333", textDecoration: "none" }}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h4 style={{ fontSize: "16px", marginBottom: "10px" }}>Follow Us</h4>
          <div style={{ display: "flex", gap: "10px" }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img
                src={fb}
                alt="Facebook"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img
                src={insta}
                alt="Instagram"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img
                src={x}
                alt="Twitter"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "20px", fontSize: "14px", color: "#999" }}>
        © {new Date().getFullYear()} Christowonder Fashion House Online. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
